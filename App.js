import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Main from './Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='home'
        screenOptions={{
          headerShown : false
        }}
       >
        <Stack.Group>
          <Stack.Screen 
            name='home' 
            component={Home} 
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

