import React, {useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import RestaaurantCards from './RestaaurantCards'

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

    const showRestaurants = () => restaurants.map((restaurant, i) => {
        return <RestaaurantCards 
            key={restaurant.id} 
            restaurant={restaurant} 
            index={i+ 1} />
    })

    return (
        <ScrollView style={styles.container}>
            {showRestaurants()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    margin: 15,
    },
});