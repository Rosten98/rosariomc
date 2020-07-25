// Always at the top of the page
import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


import Home from './components/Home';
import MysteriesList from './components/mysteries/MysteriesList';
import About from './components/About';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = 'home-sharp'
            } else if (route.name === 'Misterios') {
              iconName = 'bookmarks-sharp'
            } else if (route.name === 'Nosotros') {
              iconName = 'information-circle-outline'
            } else {
              iconName = 'home-sharp'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        
        <Tab.Screen name="Inicio" component={Home}/>
        <Tab.Screen name="Misterios" component={MysteriesList} />
        <Tab.Screen name="Nosotros" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1
  }
});

export default App;
