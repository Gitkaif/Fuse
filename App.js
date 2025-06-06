import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
// We don't need to import auth directly here anymore
// import { auth } from './firebase/config'; 

export function App() {
  return (
    <AuthProvider>
      <ExpoRoot />
    </AuthProvider>
  );
}

registerRootComponent(App); 