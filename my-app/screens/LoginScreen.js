import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig'; // Import the Firebase auth module
import { signInWithEmailAndPassword } from "firebase/auth";
import { TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Use signInWithEmailAndPassword with the auth object
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.replace('Main'); // Navigate to the Main screen on success
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button onPress={handleLogin} title="Login" />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
  <Text style={{color: 'blue', marginTop: 20}}>New User? Sign Up</Text>
</TouchableOpacity>
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

export default LoginScreen;
