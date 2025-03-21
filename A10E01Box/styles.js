// styles.js
import { Platform, StyleSheet, StatusBar } from "react-native";

//Cria um objeto StyleSheet para definir os estilos
export default StyleSheet.create({
    // Estilos para o container  principal
    container: {
        flex: 1, // Preenche todo o espaço disponivel
        justifyContent: "center", // Centraliza o conteudo verticalmente
        backgroundColor: "ghostwhite", // Defina os elementos verticalmente
        alignItems: "center", // Centraliza os elementos verticalmente
        // Aplica um padding top diferente dependendo da plataforma
        ...Platform.select({
            ios: { paddingTop: 20 }, // Padding top para IOS
            android: { paddingTop: StatusBar.currentHeight }, // Padding top Android
        }),
    },

    // Estilos para as caixas
    box: {
        width: 100, // Define a largura da caixa como 100
        height: 100, // Define a altura da caixa como 100
        justifyContent: "center", // Centraliza o conteudo verticalmente
        alignItems: "center", // Centraliza o conteudo horizontalmente
        backgroundColor: "lightgray", // Cor de fundo da caixa 
    },

    // Estilos para o texto dentro das caixas
    boxText: {
        color: "darkslategray", // Cor do texto
        fontWeight: "bold", // Pedo da fonte (negrito)
    },
});