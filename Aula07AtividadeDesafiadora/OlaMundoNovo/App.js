import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao.js';
import OlaPerfilClasse from './componentes/OlaPerfilClasse.js';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao
        nome="Vinicius"
        endereco="Rua Rodolfo Luporini"
        telefone="16991000062"
      />
      <OlaPerfilClasse
        nome="Vinicius"
        endereco="Rua Rodolfo Luporini"
        telefone="16991000062"
      />
      <StatusBar style="auto" />
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
