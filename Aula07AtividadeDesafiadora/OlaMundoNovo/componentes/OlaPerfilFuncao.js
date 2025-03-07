import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OlaPerfilFuncao(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Perfil com Função</Text>
      <Text>{props.nome}</Text>
      <Text>{props.endereco}</Text>
      <Text>{props.telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
