from fastapi import FastAPI, File, UploadFile, HTTPException
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware
from classDiseases import CLASS_NAMES
import pickle
from pydantic import BaseModel
import pandas as pd
app = FastAPI()

PLANT_MODEL = tf.keras.models.load_model("models/plant_disease_expart.h5")
FRESHNESS_MODEL = tf.keras.models.load_model("models/freshness.h5")
SEEDLING_MODEL = tf.keras.models.load_model("models/seedling.h5")
CROPS_MODEL = pickle.load(open('models/crops_model.pkl', 'rb'))
encoder = pickle.load(open('models/encoder.pkl', 'rb'))



origins = [
    "http://localhost:3000",
    'https://www.postman.com'
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

async def returnDiseasesName(file, MODEL, CLASS_):
    image = read_file_as_image(await file.read())
    image = Image.fromarray(image).resize((200, 200))  # Resize the image to (200, 200)
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    predicted_class = CLASS_[np.argmax(predictions[0])]
    confidence = round(100*np.max(predictions[0]), 2)
    return predicted_class, confidence

@app.get("/")
async def ping():
    return "Krishna wishes, I am alive too "


@app.post("/plantLeafPredict")
async def predict(file: UploadFile = File(...)):
    try:
        predicted_class, confidence= await returnDiseasesName(file, PLANT_MODEL, CLASS_NAMES)
        return {
            "class": predicted_class, 
            "confidence": confidence
            }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


async def returnFreshness(file, MODEL, CLASS_):
    image = read_file_as_image(await file.read())
    image = Image.fromarray(image).resize((224, 224))  # Resize the image to (200, 200)
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    predicted_class = CLASS_[np.argmax(predictions[0])]
    confidence = round(100*np.max(predictions[0]), 2)
    return predicted_class, confidence

@app.post("/freshness")
async def predict(file: UploadFile = File(...)):
    
    try:
        CLASS_NAMES=["Fresh","Mild", "Rotten"]
        predicted_class, confidence= await returnFreshness(file, FRESHNESS_MODEL, CLASS_NAMES)
        return {
            "class": predicted_class, 
            "confidence": confidence
            }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@app.post("/seedling")
async def predict(file: UploadFile = File(...)):
    
    try:
        CLASS_NAMES=["Black_grass","Charlock", "Cleavers", "Common_Chickweed", "Common_wheat", "Fat_Hen", "Loose_Silkey_bent", "Maize", "Scentless_Mayweed", "Shepherd", "Flowered_Cranesbill", "Sugar_beet"]
        predicted_class, confidence= await returnFreshness(file, SEEDLING_MODEL, CLASS_NAMES)
        return {
            "class": predicted_class, 
            "confidence": confidence
            }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


class SensorData(BaseModel):
    Humidity: str
    Nitrogen: str
    Ph: str
    Phosphorus: str
    Potassium: str
    Rainfall: str
    Temperature: str

@app.post("/cropsRecommend")
async def recommend(data: SensorData):
    try:
        result = {
            "Nitrogen": float(data.Nitrogen),
            "phosphorus": float(data.Phosphorus),
            "potassium": float(data.Potassium),
            "temperature": float(data.Temperature),
            "humidity": float(data.Humidity),
            "ph": float(data.Ph),
            "rainfall": float(data.Rainfall),
        }
        
        input_df = pd.DataFrame([result])

        decision_values = CROPS_MODEL.decision_function(input_df)
        top_9_indices = np.argsort(decision_values[0])[::-1][:9]
        top_9_predictions = encoder.inverse_transform(top_9_indices)
        top_9_decision_values = decision_values[0][top_9_indices]

        predictions = {}
        for label, decision_value in zip(top_9_predictions, top_9_decision_values):
            predictions[label] = round(decision_value, 2)

        return {"predictions": predictions}
    
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


if __name__== "__main__":
    
    uvicorn.run(app, host='localhost', port=8000)