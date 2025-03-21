import React from 'react';
import { View } from 'react-native';
import styles from './styles.js'; // Importa os estilos definidos em styles.js
import Box from './Box.js'; // Importa o componente Box

// Componente principal App
export default function App() {
  return (
    // View peincipal que serve como container, aplicando os estilos definidos em styles.js
    <View style={styles.container}>
      {/* Utiliza o componente Box e passa o texto "#1" como children */}
      <Box>#1</Box>
      {/* Utiliza o componente Box e passa o texto "#2" como children */}
      <Box>#2</Box>
    </View>
  );
}

