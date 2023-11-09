import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactProvider from './context/ContactContext';
import ContactForm from './components/ContactForm';
import Home from './components/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contactos" component={Home} />
          <Stack.Screen name="Formulario" component={ContactForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
