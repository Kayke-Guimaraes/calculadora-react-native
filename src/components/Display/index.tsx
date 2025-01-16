import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface DisplayProps {
    value: string | number;
}

const Display = ({ value }: DisplayProps) => (

  <Text style={styles.input}>{value || '0'}</Text>

);

export default Display;
