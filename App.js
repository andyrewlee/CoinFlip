import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  }

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Text>Cool</Text>
      <Button title="Press" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
