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
  SectionList,
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

  const sections = [
    {
      title: 'Seção 1',
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
    },
    {
      title: 'Seção 2',
      data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
    },
  ];

  // Função que emite um alerta na tela com texto
  const handlePress = () => {
    alert('Botão Pressionado!');
  };

  return (
    // Reponsável para que trate caso exceda o numero de itens na tela sendo uma barra de rolagem
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Texto de Exemplo</Text>
        {/* Exibe uma imagem */}
        <Image
          source={iconReact}
          style={styles.image}
        />
        {/* Campo de inserir o texto (nome do item) */}
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />
        {/* Botão que aexibe a mensagem na tela por meio da função 'handlePress' */}
        <Button title="Clique aqui" onPress={handlePress} />
        {/* Botão que quando pressionado muda a opacidade */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>
      </View>

      {/* Componente de lista que exibe todos os items da lista adicionados*/}
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      
      <SectionList 
        sections={sections}
        renderItem={({item}) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

// Todos os estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 40,
  },
  image: {
    width: 170,
    height: 150,
    marginBottom: 10,
    marginLeft: 80,
    marginBottom: 30,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom:20,
    marginTop: 20,
  },
  touchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
