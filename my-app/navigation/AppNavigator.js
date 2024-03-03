import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HabitListScreen from '../screens/HabitListScreen'; // We'll create this screen next

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Habits" component={HabitListScreen} />
        {/* You can add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
