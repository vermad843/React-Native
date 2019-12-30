import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style = {{padding : 30}} >
       <View>
          <TextInput placeholder = "Enter Something"/>
          <Button title = "ADD" />
       </View>
       <View>

       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

