import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-purple-600">Profile Screen</Text>
      <Text className="mt-2 text-gray-600">{user?.email}</Text>
      <TouchableOpacity
        onPress={logout}
        className="mt-5 px-6 py-3 bg-red-500 rounded-lg"
      >
        <Text className="text-white font-semibold text-lg">Logout</Text>
      </TouchableOpacity>
    </View>
  );
} 