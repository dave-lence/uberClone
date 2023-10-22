# uberClone project
## Setting up the development environment.
### Creating a new react native project.
To create a new React native app, run the following commands 
1. npm i -g create-react-native-app
2. create-react-native-app my-project
3. cd my-project
4. npm start or yarn start 

Note: To use Expo which is the recommended way to develop a React native app install Expo as a dependency this way you can debug with the Expo app on your real device. Or you can create a React Native app with expo directly by running the following commands
1. npx create-expo-app AwesomeProject
2. cd AwesomeProject
3. npx expo start

### Debugging and Running your React Native application
Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

### Running your app on a simulator or virtual device
Expo Go allows you to run your React Native app on a physical device without installing iOS and Android native SDKs. 
Once you've set these up, you can launch your app on an Android Virtual Device by running npm run android, or on the iOS Simulator by running npm run ios (macOS only).
