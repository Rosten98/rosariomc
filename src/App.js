// Always at the top of the page
import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/Home'
import PlayRosary from './screens/PlayRosary'

const RootStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen 
          name="Home" 
          component={Home} 
          options= {{
            headerShown: false
          }}
        />
        <RootStack.Screen 
          name="PlayRosary" 
          component={PlayRosary}
          screenProps
          options= {{
            headerStyle: {
              elevation: 0
            }
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer> 
  );
};

export default App;
