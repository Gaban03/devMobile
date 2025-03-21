// styles.js
import { Platform, StyleSheet, StatusBar } from "react-native";

//Cria um objeto StyleSheet para definir os estilos
export default StyleSheet.create({
    // Estilos para o container  principal
    container: {
        flex: 1, // Preenche todo o espaço disponivel
        flexDirection: "row", // Organiza os elementos em linha
        backgroundColor: "ghostwhite", // Defina os elementos verticalmente
        alignItems: "center", // Centraliza os elementos verticalmente
        justifyContent: "space-around", // Distribui o espaço igualmente entre os elementos
        // Aplica um padding top diferente dependendo da plataforma
        ...Platform.select({
            ios: { paddingTop: 20 }, // Padding top para IOS
            android: { paddingTop: StatusBar.currentHeight }, // Padding top Android
        }),
    },

    // Estilos para as caixas
    box: {
        width: 100, // Largura da caixa
        justifyContent: "center", // Centraliza o conteudo verticalmente
        alignSelf: "stretch", // Estica a caixa para ocupar toda a largura do container pai
        alignItems: "center", // Centraliza o conteudo horizontalmente
        backgroundColor: "lightgray", // Cor de fundo da caixa 
        borderWidth: 1, // Largura da Borda
        borderStyle: "dashed", // Estilo da borda (tracejada)
        borderColor: "darkslategray" // Cor da borda
    },

    // Estilos para o texto dentro das caixas
    boxText: {
        color: "darkslategray", // Cor do texto
        fontWeight: "bold", // Pedo da fonte (negrito)
    },
});