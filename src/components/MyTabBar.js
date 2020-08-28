import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import TabActive from '../components/TabActive'
import TabInactive from '../components/TabInactive'

// If theres is a problem with safeAreaView, go to this link
//  https://reactnavigation.org/docs/handling-safe-area/#hiddencustom-header-or-tab-bar
const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <SafeAreaView style={styles.tabContainer}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const icon = options.tabBarIcon
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.container}
              >
                {/* <View>
                  <Icon 
                    style={styles.icon}
                    name={
                      label == 'Inicio' ? 'home' 
                      : label == 'Misterios'  ? 'book' 
                      : 'infocirlceo'
                    }
                  />
                  <Text style={ isFocused ? styles.focused : styles.unfocused }>
                    {label}
                  </Text>
                </View> */}
                { isFocused ? <TabActive label={label}/> : <TabInactive label={label}/>  }
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  tabContainer: { 
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    borderRadius: 100,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
})

export default MyTabBar
