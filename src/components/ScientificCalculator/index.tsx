import React from 'react';
import { View } from 'react-native';
import CalculatorButton from '../CalculatorButton';
import styles from './styles';

const ScientificCalculator = ({ handlePress }: { handlePress: (value: string) => void }) => (
  <View>
    <View style={styles.row}>
      {['sin', 'cos', 'tan'].map((func) => (
        <CalculatorButton key={func} onPress={() => handlePress(`${func}(`)} text={func} />
      ))}
    </View>
    <View style={styles.row}>
      {['log', 'ln', '^'].map((func) => (
        <CalculatorButton key={func} onPress={() => handlePress(func === '^' ? '**' : `${func}(`)} text={func} />
      ))}
    </View>
    <View style={styles.row}>
      {['(', ')', '[', ']', '{', '}'].map((symbol) => (
        <CalculatorButton key={symbol} onPress={() => handlePress(symbol)} text={symbol} />
      ))}
    </View>
  </View>
);

export default ScientificCalculator;
