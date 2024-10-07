// /components/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Username' && password === 'Password') {
      navigation.replace('MyTDL');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your username or password.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');  // Navigate to the Register screen
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top-center */}
      <Image 
        source={require('../assets/Logo.png')} // Adjust the path as necessary
        style={styles.logo}
      />
      <Text style={styles.title}>Login to MyTDL</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        keyboardType="default" // Changed from "Username" to "default"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      {/* Register text */}
      <View style={styles.registerContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',  // Adjust width
    height: 200, // Adjust height
    alignSelf: 'center', // Center the logo horizontally
    marginBottom: 20, // Space between logo and title
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  registerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
