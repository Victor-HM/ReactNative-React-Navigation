import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export function Home({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        title="Ir para a tela back"
        onPress={() => navigation.navigate('Back')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 200
  }
})