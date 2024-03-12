import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const cartScreen = () => {
    const cart = useSelector(state => state.cart.cart);
    console.log('cart:', cart);

    const [Value, setValue] = useState(1);

    const add = () => {
        setValue(Value + 1);
    }

    const sub = () => {
        if (Value > 0) {
            setValue(Value - 1);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> MY CART </Text>
            </View>
            <View style={styles.scrollContainer}>
                <ScrollView vertical={true} contentContainerStyle={styles.scrollContent}>
                    {cart?.map(item => (
                        <TouchableOpacity style={{ width: '110%' }}>
                            <View key={item.id} style={styles.itemContainer}>
                                <View style={{ flexDirection: 'row',marginTop:5 }}>
                                    <Image style={{ height: 80, width: 110, marginLeft: 20, marginTop: 35 }} source={item.image} />

                                    <View>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemPricetag}>{item.pricetag}</Text>
                                        <View style={{marginTop:15,marginLeft:25}}>
                                        <View style={{ borderRadius: 12, backgroundColor: '#eeeee4', flexDirection: 'row',width:'52%', elevation:14 }}>
                                            <TouchableOpacity style={styles.button} onPress={sub}>
                                                <Image source={require('../assets/minus.png')} style={{ height: 15, width: 15 }} />
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: 22, color: 'black', marginVertical: 6 }}>{Value}</Text>
                                            <TouchableOpacity style={styles.button2} onPress={add}>
                                                <Image source={require('../assets/plus.png')} style={{ height: 15, width: 15 }} />
                                            </TouchableOpacity>
                                            <Text style={styles.itemPrice}>${item.price * Value}</Text>
                                        </View>
                                    </View>
                                    </View>
                                    
                                   
                                    </View>

                               

                                

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
        color:'black',
        marginVertical: 15,
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        marginTop:15

    },
    itemContainer: {
        borderWidth: 2,
        borderRadius: 2,
        width: '95%',
        height: 180,
        marginVertical: 10,
        backgroundColor: 'white'
    },
    image: {
        height: 80,
        width: 110,
        resizeMode: 'cover',
    },
    itemName: {
        fontSize: 22,
        marginTop: 25,
        marginLeft: 35
    },
    itemPricetag: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey',
        marginTop: 0,
        marginLeft: 32

    },
    itemPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 25,
    },

    headercard1: {
        borderWidth: 0,
        width: '39%',
        height: 30,
        backgroundColor: 'black',
        marginTop: 5,
        marginLeft: 14,

        borderRadius: 5,
        elevation: 15,



    },
    button: {
        height: 35,
        width: 40,
        borderColor: 'grey',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        // paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1,
        marginRight: 20,
    },
    button2: {
        height: 35,
        width: 40,
        borderColor: 'grey',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        // paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1,
        marginLeft: 20,

    },
});

export default cartScreen;
