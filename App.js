
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import FavoritesScreen from './screens/FavoritesScreen'

const Stack = createStackNavigator();


export default function App() {

  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="YAWLP" 
          component={HomeScreen}
          options={({navigation}) => ({ 
            headerRight: () => <CustomHomeHeader navigation={navigation}/>
          })}
          />
        <Stack.Screen name='Favorites' component={FavoritesScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    );
}

const CustomHomeHeader = (props) => (
    <TouchableOpacity 
      style={styles.touchable}
      onPress={() => props.navigation.navigate("Favorites")}
    >
        <Ionicons name="heart" size={24} color='red' />
    </TouchableOpacity>
  
)

const styles = StyleSheet.create({
  touchable: {
    paddingRight: 15
  }
})


