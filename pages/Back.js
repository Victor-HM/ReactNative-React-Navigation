import React from 'react';
import { Button, View, Text } from 'react-native';

export function Back({ navigation }) {
  return (
    <View>
      <Text>Back Screen</Text>
      <Button
        title="Ir para a tela Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}