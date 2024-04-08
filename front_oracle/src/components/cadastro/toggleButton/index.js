import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './toggleButton.styles';

const ToggleButton = ({ title }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleButton}>
        <View style={[styles.indicator, isActive ? styles.active : styles.inactive]} />
      </TouchableOpacity>
      
    </View>
  );
};

export default ToggleButton;
