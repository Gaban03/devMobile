import React from 'react';
import {Text, View } from 'react-native';
import styles from './styles'; // Importa os estilos definidos em styles.js

// Componente principal App
export default function App() {
  return (
    // View peincipal que serve como container, aplicando os estilos definidos em styles.js
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}> Isto é uma caixa</Text>
      </View>
    </View>
  );
}

