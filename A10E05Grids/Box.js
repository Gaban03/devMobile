import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles.js";

// Componente Box que recebe children como prop
export default function Box({ children }) {
  return (
    // View que representa uma caixa, aplicando os estilos definidos
    <View style={styles.box}>
      {/* Texto dentro da caixa */}
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

// Define os tipos das props esperadas pelo componente Box
Box.propTypes = {
  // Children deve ser um nó renderizável e é obrigatório
  children: PropTypes.node.isRequired,
};