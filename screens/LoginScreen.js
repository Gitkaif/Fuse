import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await login(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <View className="items-center mb-10">
          <Image 
            source={require('../assets/images/logo.png')} 
            className="w-32 h-32"
            resizeMode="contain"
          />
          <Text className="text-3xl font-bold text-pink-500 mt-4">Fuse</Text>
          <Text className="text-gray-500 mt-2">Find your perfect match</Text>
        </View>

        {error ? (
          <Text className="text-red-500 text-center mb-4">{error}</Text>
        ) : null}

        <View className="space-y-4">
          <TextInput
            className="bg-gray-100 p-4 rounded-xl"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          
          <TextInput
            className="bg-gray-100 p-4 rounded-xl"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            className="mt-6"
          />

          <Button
            title="Create Account"
            variant="outline"
            onPress={() => navigation.navigate('Register')}
            className="mt-2"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen; 