import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Pressable} from 'react-native';

export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={styles.container} keyboardDismissMode="on-drag">
          <Text style={styles.headerText}>Welcome to Little Lemon</Text>
          

          {
            !loggedIn ? 
            <>
              <Text style={styles.regularText}>Login to continue </Text>

              <TextInput 
                  style={styles.input} 
                  value={email} 
                  placeholder={"Email"}
                  onChangeText={onChangeEmail} 
                  keyboardType={"email-address"}
              /> 

              <TextInput 
                  style={styles.input} 
                  value={password} 
                  placeholder={"Password"}
                  onChangeText={onChangePassword} 
                  secureTextEntry={true}
              /> 

              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>
                  Login
                </Text>
              </Pressable>
            </> : 
            <Text style={styles.textLoggedIn}>
              You are logged in!
            </Text>
          }

        </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  }, 
    input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: 'white', 
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 16,
      marginHorizontal: 80,
      margin: 40,
      backgroundColor: '#EE9972',
      borderRadius: 25,
      borderColor: '#EE9972',
    },
    buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },
    textLoggedIn: {
      textAlign: 'center',
      color: '#EDEFEE',
      fontSize: 22,
    }

});

