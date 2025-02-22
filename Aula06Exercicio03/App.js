import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, /*Slider*/ Switch, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  // Estado para armazenar o texto digitado no TextInput
  const [text, setText] = useState('');
  
  // Estado para controlar o carregamento (exibir ou não o ActivityIndicator)
  const [isLoading, setIsLoading] = useState(false);
  
  // Estado para armazenar o valor do Slider
  const [sliderValue, setSliderValue] = useState(0);
  
  // Estado para armazenar o valor do Switch (ligado/desligado)
  const [switchValue, setSwitchValue] = useState(false);

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList, divididos em seções
  const sections = [
    { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }] },
  ];

  // Função para simular um carregamento ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* ImageBackground com uma imagem de fundo e um título */}
      <ImageBackground source={{ uri: 'https://via.placeholder.com/300' }} style={styles.imageBackground}>
        <Text style={styles.title}>Exemplo de Código React Native</Text>
      </ImageBackground>

      <View style={styles.content}>
        {/* Imagem exibida no conteúdo */}
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />

        {/* TextInput para o usuário digitar algo */}
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />

        {/* Botão que ao ser pressionado chama a função handlePress */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* TouchableOpacity que exibe um alerta ao ser pressionado */}
        <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity pressionado!')}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* ActivityIndicator que é exibido enquanto isLoading for true */}
        <ActivityIndicator animating={isLoading} />

        {/* Slider que permite ao usuário selecionar um valor entre 0 e 100 */}
        {/*<Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        />*/}
        <Text>Valor do Slider: {sliderValue}</Text>

        {/* Switch que permite ao usuário ligar ou desligar */}
        <Switch
          value={switchValue}
          onValueChange={setSwitchValue}
        />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        {/* FlatList que exibe uma lista de itens */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        {/* SectionList que exibe uma lista de itens divididos em seções */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
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