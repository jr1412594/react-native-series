import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'
import RestaurantsContainer from '../components/RestaurantsContainer'


export default function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <RestaurantsContainer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
});