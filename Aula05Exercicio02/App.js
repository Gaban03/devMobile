//  Importações essenciais para o aplicativo
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import iconReact from './assets/iconReact.png';

// Função principal do aplicativo
const App = () => {
  // Variável de texto e de mudança de estado do texto
  const [text, setText] = useState('');
  // Lista de items
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // Função que emite um alerta na tela com texto
  const handlePress = () => {
    alert('Botão Pressionado!');
  };

  // Função que adiciona um item novo a lista
  const addItem = () => {
    setItems([...items, { id: String(Date.now()), name: text }]);
    setText('');
  };

  return (
    // Reponsável para que trate caso exceda o numero de itens na tela sendo uma barra de rolagem
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Exibe uma imagem */}
        <Image
          source={iconReact}
          style={styles.image}
        />
        <Text style={styles.title}> Exemplo de App React Native </Text>
      </View>

      {/* Campo de inserir o texto (nome do item) */}
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />

      {/* Botão que adiicona o item na lista por meio da função 'addItem' */}
      <Button title="Adicionar Item " onPress={addItem} />

      {/* Componente de lista que exibe todos os items da lista adicionados*/}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      
      {/* Botão que quando pressionado muda a opacidade */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}> Pressiona-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Todos os estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 170,
    height: 150,
    marginBottom: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
