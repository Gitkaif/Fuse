import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Removed unused Constants import as we are using hardcoded keys now
// import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Removed getAnalytics import as it's not used in the rest of the file
// import { getAnalytics } from \"firebase/analytics\";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDHbg5cRoq0qFRYF5p5zrrYdXTuYhqeQU",
  authDomain: "fuse--01.firebaseapp.com",
  projectId: "fuse--01",
  storageBucket: "fuse--01.firebasestorage.app",
  messagingSenderId: "581665119291",
  appId: "1:581665119291:web:2b57169a6a604116f6901e",
  measurementId: "G-1MJEPJP7MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
// Removed analytics initialization as getAnalytics was removed from imports
// const analytics = getAnalytics(app);

export default app; 