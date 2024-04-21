import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, 
         TextInput, KeyboardAvoidingView, Platform, useColorScheme, Pressable } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView indicatorStyle={"white"} style={[ 
         styles.container, 
         colorScheme === 'light' 
           ? { backgroundColor: '#fff' } 
           : { backgroundColor: '#333333' }, 
       ]} keyboardDismissMode="on-drag">
        <View style={styles.logo_container}>
          <Image 
            resizeMode="cover" 
            style={styles.logo} 
            source={require("./img/logo.png")}
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'} 
            />
          <Text
            style={[ 
              styles.title,
              colorScheme === 'light' 
                ? { color: '#333333' } 
                : { color: '#fff' }, 
            ]}>
            Little Lemon
          </Text>
        </View>
        <Text style={[ 
              styles.text,
              colorScheme === 'light' 
                ? { color: '#333333' } 
                : { color: '#fff' }, 
            ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <Pressable onPress={() => navigation.navigate('Menu')}> 
           <Text style={styles.buttonText}>View Menu</Text> 
        </Pressable> 
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  logo_container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  container: { flex: 1, backgroundColor: '#333333' },
  title: {
    padding: 40,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    padding: 40,
    fontSize: 20,
    color: 'white',
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
  buttonText: {
    backgroundColor: '#EE9972',
    width:100,
    borderRadius: 15,
    textAlign: 'center',
  }
})