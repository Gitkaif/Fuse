export default {
  expo: {
    name: "Fuse",
    slug: "Fuse",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "fuse",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
      imageWidth: 200,
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    extra: {
      // Add your Firebase config here
      firebaseApiKey: "YOUR_API_KEY",
      firebaseAuthDomain: "YOUR_AUTH_DOMAIN",
      firebaseProjectId: "YOUR_PROJECT_ID",
      firebaseStorageBucket: "YOUR_STORAGE_BUCKET",
      firebaseMessagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      firebaseAppId: "YOUR_APP_ID"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
}; 