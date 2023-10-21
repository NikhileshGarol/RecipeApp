import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserData from '../store/UserData';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = UserData.find(
      user => user.username === username && user.password === password,
    );
    if (user) {
      navigation.navigate('HomePage', {user});
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={style.container}>
      <Image
        source={require('../assets/loginBackground.png')}
        style={style.backgroundImage}
      />
      <Text style={style.title}>Welcome!</Text>

      <TextInput
        style={style.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={style.btn}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'lightblue',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: '80%',
  },
  btn: {
    padding: 50,
    width: '50%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // opacity: 0.7,
  },
});

export default LoginScreen;
