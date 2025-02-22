import React, { useState } from 'react'; // Importa React e o hook useState
import { 
    View, Text, Image, TextInput, Button, TouchableOpacity, 
    ScrollView, FlatList, SectionList, ActivityIndicator, 
    /*Slider*/ Switch, StyleSheet 
} from 'react-native'; // Importa componentes do React Native

const App = () => {
    // Declara estados para gerenciar dados dinâmicos
    const [text, setText] = useState(''); // Estado para armazenar o texto digitado no TextInput
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o indicador de carregamento
    const [sliderValue, setSliderValue] = useState(0); // Estado para armazenar o valor do Slider
    const [switchValue, setSwitchValue] = useState(false); // Estado para armazenar o valor do Switch

    // Array de objetos representando uma lista simples de itens
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    // Dados estruturados em seções para a SectionList
    const sections = [
        { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
        { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
    ];

    // Função chamada ao pressionar o botão
    const handleButtonPress = () => {
        setIsLoading(true); // Ativa o indicador de carregamento
        setTimeout(() => {
            setIsLoading(false); // Desativa o indicador após 2 segundos
            alert('Button Pressed!'); // Exibe um alerta
        }, 2000);
    };

    return (
        <ScrollView style={styles.container}> 
            {/* Container principal usando ScrollView para permitir rolagem */}
            <View style={styles.view}>
                <Text style={styles.text}>Hello React Native!</Text> 
                {/* Texto simples exibido na tela */}

                <Image 
                    source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
                    style={styles.image} 
                />
                {/* Exibe uma imagem do React Native carregada via URL */}

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter text"
                    value={text}
                    onChangeText={setText}
                />
                {/* Campo de entrada de texto */}

                <Button title="Press Me" onPress={handleButtonPress} />
                {/* Botão que chama a função handleButtonPress ao ser pressionado */}

                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.touchableOpacityText}>Touch Me</Text>
                </TouchableOpacity>
                {/* Botão customizado usando TouchableOpacity */}

                <ActivityIndicator animating={isLoading} />
                {/* Indicador de carregamento que aparece quando isLoading for true */}

                {/* 
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                />
                <Text>Slider Value: {sliderValue}</Text>
                */}
                {/* Slider desativado conforme solicitado */}

                <Switch value={switchValue} onValueChange={setSwitchValue} />
                {/* Componente Switch para alternar entre verdadeiro/falso */}
                <Text>Switch Value: {switchValue ? 'On' : 'Off'}</Text>
                {/* Exibe o estado do Switch */}
            </View>

            <FlatList
                data={data} 
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
            {/* Lista simples usando FlatList */}

            <SectionList
                sections={sections} 
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => <Text>{item.name}</Text>} 
                renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
            />
            {/* Lista agrupada por seções usando SectionList */}
        </ScrollView>
    );
};

// Definição dos estilos usados no aplicativo
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
