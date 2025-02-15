// importação dos componentes utilizados para a modelagem da página 
import React, {useState} from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import logoReact from './assets/iconReact.png';


// Função principal responsável
const App = () => {
  // Variáveis utilizadas para manipulação e recebimento dos dados
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para exibição do nome escrito
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}! `);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  }

  return (
    // Repsonsável pela visualização dos componentes assim como o estilo e funciona como um container
    // deixando eles flexiveis e responsivos
    <View style={styles.container}>

      {/* Titulo da pagina */}
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      {/* Exibe uma imagem */}
     <Image 
        source={logoReact}
        style={styles.logo}
     />

     

      {/* Campo de texto para preenchimento dos dados */}
      <TextInput 
        style={styles.input}
        placeholder="Digite seu nome..."
        onChangeText={setNome} // Reponsável pela mundaça de estado da variável ao digitar do usuário
        value={nome}
      />

      {/* Botão responsável pela chamada da função 'lidarComClique' que exibe o nome digitado*/}
      <Button title="Enviar" onPress={lidarComClique} />
      
      {/* Função de operadores ternários onde se imagem for verdadeira exibe um campo de texto 
      senão retorna null */}
      {mensagem  ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

// Toda a estilização e responsividade da página é tratada aqui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 190,
    height: 170,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

//Exporta o componente App para a página
export default App;

