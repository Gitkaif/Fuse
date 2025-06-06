import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const Button = ({ 
  onPress, 
  title, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'rounded-full items-center justify-center';
  
  const variants = {
    primary: 'bg-pink-500 active:bg-pink-600',
    secondary: 'bg-gray-200 active:bg-gray-300',
    outline: 'border-2 border-pink-500 active:bg-pink-50'
  };

  const sizes = {
    small: 'px-4 py-2',
    medium: 'px-6 py-3',
    large: 'px-8 py-4'
  };

  const textColors = {
    primary: 'text-white',
    secondary: 'text-gray-800',
    outline: 'text-pink-500'
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#EC4899' : '#FFFFFF'} />
      ) : (
        <Text className={`font-semibold text-center ${textColors[variant]}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button; 