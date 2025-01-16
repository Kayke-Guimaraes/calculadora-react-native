import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Alert, TouchableOpacity, Text } from 'react-native';
import * as math from 'mathjs';
import CalculatorButton from '../../components/CalculatorButton';
import Display from '../../components/Display';
import ScientificCalculator from '../../components/ScientificCalculator';
import styles from './styles';
import stylesButton from '../../components/CalculatorButton/styles';

const HomeScreen = () => {
  const [input, setInput] = useState('');
  const [isScientific, setIsScientific] = useState(false);

  const handlePress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const toggleScientific = () => {
    setIsScientific(!isScientific);
  };

  // remover depois
  const showSettingsAlert = () => { 
    Alert.alert('Créditos', 'Desenvolvido por Kayke Guimarães'); 
  };
  // remover depois

  return (
    <SafeAreaView style={styles.container}>

      {/*remover depois*/} 
      <TouchableOpacity style={styles.settingsButton} onPress={showSettingsAlert}> 
        <Text style={styles.settingsButtonText}>⚙️</Text> 
      </TouchableOpacity>
      {/*remover depois*/} 

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Display value={input} />
        
        <View style={styles.row}>
          <CalculatorButton 
            customStyle={{ backgroundColor: '#f0f0f0', borderRadius: 50 }}
            onPress={clearInput} text="C" 
          />
          <CalculatorButton 
            customStyle={{ backgroundColor: '#ff9500', borderRadius: 50 }}
            textStyle={{ color: '#fff' }} 
            onPress={() => handlePress('/')} text="÷" 
          />
          <CalculatorButton 
            customStyle={{ backgroundColor: '#ff9500', borderRadius: 50 }}
            textStyle={{ color: '#fff' }} 
            onPress={() => handlePress('*')} text="×" 
          />
          <CalculatorButton 
            customStyle={{ backgroundColor: '#ff9500', borderRadius: 50 }} 
            textStyle={{ color: '#fff' }}
            onPress={toggleScientific} text="Sci" 
          />
        </View>

        <View style={styles.row}>
          {[7, 8, 9].map((num) => (
            <CalculatorButton 
              customStyle={{ backgroundColor: '#515151', borderRadius: 50 }}
              textStyle={{ color: '#fff' }}
              key={num} onPress={() => handlePress(num.toString())} 
              text={num.toString()} 
            />
          ))}
          <CalculatorButton 
            customStyle={{ backgroundColor: '#ff9500', borderRadius: 50 }}
            textStyle={{ color: '#fff' }} 
            onPress={() => handlePress('-')} text="-" 
          />
        </View>

        <View style={styles.row}>
          {[4, 5, 6].map((num) => (
            <CalculatorButton 
              customStyle={{ backgroundColor: '#515151', borderRadius: 50 }}
              textStyle={{ color: '#fff' }}
              key={num} onPress={() => handlePress(num.toString())} 
              text={num.toString()} 
            />
          ))}
          <CalculatorButton 
            customStyle={{ backgroundColor: '#ff9500', borderRadius: 50 }}
            textStyle={{ color: '#fff' }} 
            onPress={() => handlePress('+')} text="+"
          />
        </View>

        <View style={styles.row}>
          
          {[1, 2, 3].map((num) => (
            <CalculatorButton 
              customStyle={{ backgroundColor: '#515151', borderRadius: 50 }}
              textStyle={{ color: '#fff' }}
              key={num} onPress={() => handlePress(num.toString())} 
              text={num.toString()} 
            />
          ))}
          <CalculatorButton 
            customStyle={{ backgroundColor: '#ff9500', borderRadius: 50 }}
            textStyle={{ color: '#fff' }} 
            onPress={calculateResult} text="=" 
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            customStyle={{ backgroundColor: '#515151', borderRadius: 50 }}
            textStyle={{ color: '#fff' }}
            onPress={() => handlePress('0')} text="0" 
          />
          <CalculatorButton 
            customStyle={{ backgroundColor: '#515151', borderRadius: 50 }}
            textStyle={{ color: '#fff' }}
            onPress={() => handlePress('.')} text="." 
          />
        </View>

        {isScientific && <ScientificCalculator handlePress={handlePress} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
