import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './pages/Home'
import { Back } from './pages/Back'

const Stack = createNativeStackNavigator();

export function Routes() {
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerTitleAlign: 'center'}}/>
      <Stack.Screen name='Back' component={Back} options={{headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  )
}