# The app offers plant diseases recognition and recommendations based on soil components using transfer learning (EfficientNetV3) and SVM. Developed using React Native for Android. The Backend by Express.js and Python FastAP servers

## Here the project demo
![Image 1](appSS/01_.jpg)
![Image 2](appSS/02_.jpg)
![Image 3](appSS/03_.jpg)

# Source Data Links

## For Plant Disease:
```bash
https://www.kaggle.com/datasets/sadmansakibmahi/plant-disease-expert/data
```
## For Crop Recommendations:
```bash
https://www.kaggle.com/datasets/aksahaha/crop-recommendation?select=Crop_recommendation.csv
```
## For Fresh and stale classification
```bash
https://www.kaggle.com/datasets/swoyam2609/fresh-and-stale-classification
```

# Run The Project
## Step 1: Download the h5 file from below link or generate it own using above data
```bash
# save to fastApi_server/models

https://drive.google.com/drive/folders/1ZagqUbdJ7HFA8mW_OTy1LuWfy8q8Wj4b?usp=sharing
```
## Step 2: Setup FastApi server

   ### i. Create a Virtual Environment:
   ```bash 
   conda create --name myenv python=3.8
   conda activate myenv
   ```
   ### ii. Requirements.txt file:
   Now, you can install requirements.txt using the following command:
   ```bash 
   pip install -r requirements.txt
   ```
   ### iii. Run FastAPI Server:
   Now, you can run the FastAPI server using the following command:
   ```bash 
   uvicorn your_fastapi_script_name:app --host 0.0.0.0 --port 8000 --reload
   ```
   ### iv. Access FastAPI Documentation:
   Once the server is running, you can access the FastAPI documentation by navigating to ```http://localhost:8000``` in your web browser.

## Step 3: Setup Express.js server
   ### i. Install Node.js and npm
   ```bash
   # Download the latest version of Node.js
   https://nodejs.org/en/download
   ```
   ### ii. Install all packages:
   ```bash 
   cd expressjs_server
   npm install
   ```
   ### iii. Start the server:
   ```bash
   npm run start-dev
   ```
   ### iv. Access ExpressJs Documentation:
   Once the server is running, you can access the Express documentation by navigating to ```http://localhost:3000``` in your web browser.


## Step 4: Start the Metro Server
To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 5: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 6: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
