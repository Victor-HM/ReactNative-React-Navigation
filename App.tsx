import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';
import { Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
