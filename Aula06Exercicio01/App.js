import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, ActivityIndicator, /*Slider*/ StyleSheet } from 'react-native';

const App = () => {
    // Estados para armazenar valores dinâmicos
    const [text, setText] = useState(''); // Estado para armazenar o texto digitado
    const [imageWidth, setImageWidth] = useState(200); // Estado para controlar a largura da imagem
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o indicador de carregamento
    const [sliderValue, setSliderValue] = useState(0); // Estado para armazenar o valor do Slider

    // Lista de dados simples
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    // Lista de seções com dados
    const sections = [
        { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
        { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
    ];

    // Função para lidar com o pressionamento do botão
    const handlePress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            alert('Botão pressionado!');
        }, 2000);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Hello React Native!</Text>
                
                {/* Exibição de imagem com tamanho dinâmico */}
                <Image
                    source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
                    style={[styles.image, { width: imageWidth }]}
                />

                {/* Campo de entrada de texto */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter text"
                    value={text}
                    onChangeText={setText}
                />

                {/* Botão que aciona uma ação */}
                <Button title="Press me" onPress={handlePress} />
                
                {/* Botão com TouchableOpacity para aumentar a largura da imagem */}
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => setImageWidth(imageWidth + 50)}>
                    <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
                </TouchableOpacity>

                {/* Indicador de carregamento */}
                <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />

                {/* Controle deslizante (Slider) */}
               {/* <Slider
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                /> */}
                <Text>Slider Value: {sliderValue.toFixed(0)}</Text>

                {/* Lista de itens simples */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                />

                {/* Lista seccionada */}
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
                />
            </View>
        </ScrollView>
    );
};

// Estilos
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
    },
    image: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    touchableOpacity: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
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
