export default {
  expo: {
    name: "Fuse",
    slug: "fuse",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "fuse",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
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
      "expo-router"
    ]
  }
}; 