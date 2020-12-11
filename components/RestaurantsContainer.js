import React, {useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const apiKey = "xaapFCPWrsc6uc-PIXffi51ooFXlU3E0CBy7rveNSXBqsCSWFWvax-YZhM3oLwcknq0BqDnhaYASpWlDUuG8iGZgIaa564FNlrPKgG0T3gKgfSKJBn4J-TD_f03RX3Yx"

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Denver"

export default function RestaurantsContainer() {
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants)
    
    
    useEffect(() => {
        fetch(apiUrl, {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', restaurants: businesses}))
    }, [])

    const showRestaurants = () => restaurants.map(restaurant => {
        return <Text>{restaurant.name}</Text>
    })

    return (
        <View style={styles.container}>
            {showRestaurants()}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});