import React from "react";
import {  StyleSheet, View, Text } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text> Minha primeira App React Native</Text>
      <Text style={styles.titulo}>Ola Mundo!</Text>
      <Text style={styles.descricao}>Aprendendo do Zero ao Pro React Native</Text>
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
  titulo: {
    fontSize: 20,
    color: '#ff0021',
  },
  descricao: {
    color: 'blue',
    fontSize: 16,
  }
});