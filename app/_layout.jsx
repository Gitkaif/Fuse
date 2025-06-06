import { Stack, router, useSegments } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
// import { Redirect } from "expo-router"; // Redirect is not needed here anymore

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();

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
  }, [user, loading, segments]); // Added segments to the dependency array

  // While loading the authentication state, show nothing or a loading indicator
  if (loading) {
    return null; // Or a loading component
  }

  // Define the stack with both authentication and app route groups
  // The useEffect hook will handle the initial redirection
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
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
