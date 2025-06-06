import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    age: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.name || !formData.age) {
      setError("Please fill in all required fields");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18) {
      setError("You must be at least 18 years old");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      setError("");
      
      // Create user account
      const user = await signup(formData.email, formData.password);
      
      // TODO: Create user profile in Firestore
      // await createUserProfile(user.uid, {
      //   name: formData.name,
      //   age: parseInt(formData.age),
      //   bio: formData.bio,
      //   email: formData.email,
      //   createdAt: new Date().toISOString(),
      // });

      router.replace("/(app)");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-purple-50">
      <StatusBar style="dark" />
      <View className="flex-1 px-8 py-12">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-purple-600 mb-2">Create Account</Text>
          <Text className="text-gray-500">Join Fuse and find your match</Text>
        </View>

        {error ? (
          <Text className="text-red-500 text-center mb-4">{error}</Text>
        ) : null}

        {/* Registration Form */}
        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 mb-2">Full Name *</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Enter your full name"
              value={formData.name}
              onChangeText={(value) => handleChange("name", value)}
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2">Email *</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2">Age *</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Enter your age"
              keyboardType="numeric"
              value={formData.age}
              onChangeText={(value) => handleChange("age", value)}
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2">Password *</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Create a password"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2">Confirm Password *</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200"
              placeholder="Confirm your password"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-2">Bio</Text>
            <TextInput
              className="bg-white p-4 rounded-xl border border-purple-200 h-24"
              placeholder="Tell us about yourself"
              multiline
              textAlignVertical="top"
              value={formData.bio}
              onChangeText={(value) => handleChange("bio", value)}
            />
          </View>

          <TouchableOpacity
            className="bg-purple-600 p-4 rounded-xl mt-6"
            onPress={handleRegister}
            disabled={loading}
          >
            <Text className="text-white text-center font-semibold text-lg">
              {loading ? "Creating Account..." : "Create Account"}
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-500">Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text className="text-purple-600 font-semibold">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 