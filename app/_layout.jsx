import { Stack, Redirect, useSegments, router } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
// import { Redirect } from "expo-router"; // Redirect is not needed here anymore

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments(); // Get current route segments

  // Log current state for debugging
  useEffect(() => {
    console.log("RootLayoutNav - User:", user ? "Authenticated" : "Not Authenticated");
    console.log("RootLayoutNav - Loading:", loading);
    console.log("RootLayoutNav - Segments:", segments);
  }, [user, loading, segments]);

  useEffect(() => {
    // Only perform redirect after authentication state has finished loading
    if (!loading) {
      const inAuthGroup = segments[0] === '(auth)';

      if (user && inAuthGroup) {
        // If user is logged in and in the auth group, redirect to the app's main screen
        router.replace("/(app)");
      } else if (!user && !inAuthGroup) {
        // If user is not logged in and not in the auth group, redirect to the login screen
        router.replace("/(auth)/login");
      }
    }
  }, [user, loading, segments]);

  // Show a loading screen or null while authentication state is being determined
  if (loading) {
    return null; // Or a custom loading component
  }

  // If a user is logged in, show the app group
  if (user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(app)" />
      </Stack>
    );
  }

  // If no user is logged in, show the auth group
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
