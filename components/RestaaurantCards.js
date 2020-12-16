
import React from 'react'
import {
    View, 
    Text, 
    Image, 
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native'


export default function RestaaurantCards({restaurant, index}) {
    return (
        
            <View style={styles.container}>
                <Image style={styles.cardImage} source={{uri: restaurant.image_url}}/>
                    <View style={styles.infoContainer}>
                        <View style={styles.rowView}>
                            <Text style={styles.name}>{index}. {restaurant.name}</Text>
                            <Text style={styles.price}>{restaurant.price}</Text>
                        </View>
                            <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
                            <Text style={styles.address}>{restaurant.location.address1}</Text>
                        <View style={[styles.rowView, {justifyContent: 'flex-start'}]}>
                        {restaurant.categories.map(category => (
                            <Text>{category.title},</Text>
                        ))}
                        </View>
                    <TouchableOpacity style={styles.visitWebsiteButton}
                        onPress={() => Linking.openURL(restaurant.url)}
                        >
                            <Text style={styles.buttonText}>Visit website</Text>
                        </TouchableOpacity>
                    </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: 'hsl(0,0%,90%)',
        paddingVertical: 30,
    },
    cardImage: {
        width: '100%',
        height: 150,
    },
    inforContainer: {
        marginVertical: 15,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    price: {
        color: 'green',
    },
    rating: {
        marginVertical: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
    },
    address: {
        color: 'hsl(0,0%,45%)'
    },
    visitWebsiteButton: {
        backgroundColor: "#009fff",
        padding: 10,
        marginTop: 10,

    },
    buttonText: {
        textAlign: "center",
        color: 'white',
        fontSize: 16,
        fontWeight: "700"
    }
})