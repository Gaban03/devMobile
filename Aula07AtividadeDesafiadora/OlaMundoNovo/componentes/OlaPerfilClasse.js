import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Olá Perfil com Classe</Text>
        <Text>{this.props.nome}</Text>
        <Text>{this.props.endereco}</Text>
        <Text>{this.props.telefone}</Text>
      </View>
    );
  }
}
export default OlaPerfilClasse;

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
