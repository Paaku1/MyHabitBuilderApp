import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
// Ensure you're importing the Firebase auth module

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password) // Corrected usage
      .then((userCredentials) => {
        // Success
        console.log('Registered with:', userCredentials.user.email);
        navigation.replace('Main');
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button onPress={handleSignUp} title="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
  },
});

export default SignUpScreen;
