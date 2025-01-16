import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface CalculatorButtonProps {
    onPress: () => void;
    text: string;
    customStyle?: object;
    textStyle?: object;
}

const CalculatorButton = ({ onPress, text, customStyle, textStyle }: CalculatorButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonBase, customStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};


export default CalculatorButton;
