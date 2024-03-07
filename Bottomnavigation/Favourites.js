import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
    const favorites = useSelector(state => state.favorites.favorites);
    console.log('Favorites:', favorites);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Favorites</Text>
            </View>
            <View style={styles.scrollContainer}>
                <ScrollView vertical={true} contentContainerStyle={styles.scrollContent}>
                    {favorites?.map(item => (
                        <TouchableOpacity style={{ width: '88%' }}>
                            <View key={item.id} style={styles.itemContainer}>
                                <Image style={{ height: 80, width: 110, marginLeft: 0, marginTop: 15 }} source={item.image} />
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemPricetag}>{item.pricetag}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                                <TouchableOpacity style={styles.headercard1} >
                                    <Text style={{ fontSize: 15, alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: 6, color: "white" }}>REMOVE</Text>

                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        borderBottomWidth: 0.5,
        opacity: 0.5,
    },
    headerText: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: '500',
        marginVertical: 15,
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        alignItems: 'center',
    },
    itemContainer: {
        borderWidth: 2,
        borderRadius:2,
        width: '95%',
        height: 200,
        marginVertical: 15,
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 110,
        resizeMode: 'cover',
    },
    itemName: {
        fontSize: 25,
    },
    itemPricetag: {
        fontSize: 18,
        fontWeight: '400',
        color: 'grey',
        marginTop: 0,
        marginLeft: 15,
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 15,
    },

    headercard1: {
        borderWidth: 0,
        width: '39%',
        height: 30,
        backgroundColor: 'black',
        marginTop: 5,
        marginLeft:14,
       
        borderRadius: 5,
        elevation: 15,



    },
});

export default FavoritesScreen;
