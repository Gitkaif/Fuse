import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await login(email, password);
      router.replace("/(app)");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-purple-50">
      <StatusBar style="dark" />
      <View className="flex-1 justify-center px-8">
        {/* Logo or App Name */}
        <View className="items-center mb-12">
          <Text className="text-4xl font-bold text-purple-600 mb-2">Fuse</Text>
          <Text className="text-gray-500">Welcome back!</Text>
        </View>

        {error ? (
          <Text className="text-red-500 text-center mb-4">{error}</Text>
        ) : null}

        {/* Login Form */}
        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 mb-2">Email</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2">Password</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity className="items-end">
            <Text className="text-purple-600">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-purple-600 p-4 rounded-xl mt-6"
            onPress={handleLogin}
            disabled={loading}
          >
            <Text className="text-white text-center font-semibold text-lg">
              {loading ? "Signing in..." : "Sign In"}
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-500">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
              <Text className="text-purple-600 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
} 