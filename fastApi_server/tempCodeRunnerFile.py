# potatoLeafPredict

# @app.post("/appleLeafPredict")
# async def predict(file: UploadFile = File(...)):
#     CLASS_NAMES = ["Apple___Apple_scab", "Apple___Black_rot", "Apple___Cedar_apple_rust", "Apple___healthy"]
#     predicted_class, confidence= await returnDiseasesName(file, CLASS_NAMES, APPLE_MODEL)
#     return {
#         "class": predicted_class, 
#         "confidence": confidence
#         }

# @app.post("/cherryLeafPredict")
# async def predict(file: UploadFile = File(...)):
#     CLASS_NAMES = ["Cherry_Powdery_mildew", "Cherry_Healthy"]
#     predicted_class, confidence= await returnDiseasesName(file, CLASS_NAMES, CHERRY_MODEL)
#     return {
#         "class": predicted_class, 
#         "confidence": confidence
#         }

# @app.post("/capsicumLeafPredict")
# async def predict(file: UploadFile = File(...)):
#     CLASS_NAMES = ["Capsicum__Bacterial_spot", "Capsicum__Healthy"]
#     predicted_class, confidence= await returnDiseasesName(file, CLASS_NAMES, CAPCICUM_MODEL)
#     return {
#         "class": predicted_class, 
#         "confidence": confidence
#         }

# @app.post("/straberryLeafPredict")
# async def predict(file: UploadFile = File(...)):
#     CLASS_NAMES = ["Strawberry__Leaf_scorch", "Strawberry__healthy"]
#     predicted_class, confidence= await returnDiseasesName(file, CLASS_NAMES, STRAWBERRY_MODEL)
#     return {
#         "class": predicted_class, 
#         "confidence": confidence
#         }
