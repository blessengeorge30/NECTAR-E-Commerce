import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_HOME } from "../Components/DiscoverFood";
import { PRODUCT_ITEMS } from "../Components/Discoverveggies";
import { PRODUCT_MEAT } from "../Components/DiscoverMeat";
import { PRODUCT_PRODUCTS } from "../Components/DiscoverProducts";
import { PRODUCT_GROCERIES } from "../Components/Discovergroceries";






const Homescreen = () => {

    const navigation = useNavigation();

    const Fooditems = () => {
        navigation.navigate("Beverages")
    }


    const renderitem1 = (item) => {

        return (
            <TouchableOpacity style={styles.discovercards} onPress={Fooditems}>

                <View style={{ marginVertical: 15, flexDirection: 'row', alignSelf: "center" }}>
                    <Image style={{ height: 80, width: 100, marginHorizontal: 5, marginVertical: 5 }} source={item.image} />
                </View>
                <View style={{ position: 'absolute', borderRadius: 30, marginTop: 85, alignSelf: "center", overflow: 'hidden' }}>
                    <Text style={{ marginLeft: 12, marginTop: 25, fontSize: 17, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>




                </View>



            </TouchableOpacity>
        )
    }



    return (
        <ScrollView style={styles.container}>


            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../assets/blurbg.jpeg')}
                        style={styles.backgroundImage}>
                            <View style={{ marginHorizontal:15}}>
                        <View style={{ marginTop: 75, flexDirection: 'row' }}>
                            <Image source={require('../assets/originallogo.png')} style={{ height: 40, width: 35, marginLeft: 175 }} />
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                                <Image source={require('../assets/cart.png')} style={{ height: 25, width: 25 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>

                            <Text style={{ color: 'black', fontSize: 22, marginBottom: 12, alignSelf: "center", marginLeft: 120, fontWeight: "500" }}>Find Products</Text>


                        </View>
                        <View>
                            <TextInput style={styles.inputView}

                                placeholder='Search store'

                                placeholderTextColor='grey'
                                maxLength={12}></TextInput>
                        </View>



                        <View style={{ marginVertical: 25, marginHorizontal: 0 }}>
                            <FlatList

                                data={PRODUCT_PRODUCTS}

                                renderItem={({ item }) => renderitem1(item)}
                                numColumns={2} // Display 2 items per row
                            />
                        </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 2000,
        backgroundColor: 'white',
        flex: 1
    },
    backgroundImage: {
        height: '100%',
        // width: '100%',


    },
    button3: {
        height: 40,
        width: 50,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 2,
        marginHorizontal: 95,



    },
    logo: {

        width: 150,
        height: 80,
        marginTop: 60,
        marginBottom: 55,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: 'black'

    },
    logo1: {
        height: 200,
        width: 200,
        marginBottom: 10,
        resizeMode: "contain",
        alignSelf: "center"
    },
    logo2: {

        width: 15,
        height: 15,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: "green"

    },
    inputView: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 25,
        marginRight: 15,
        height: 40,
        width: 340,

        color: 'black',
        marginTop: 10,
        marginLeft: 10

    },

    inputView1: {
        width: '75%',
        height: 60,
        borderBottomWidth: 0.5,
        borderColor: '#01326f',
        marginTop: 10,
        marginHorizontal: 15,
        alignSelf: "center"



    },

    cardtext: {
        marginTop: 12,
        marginLeft: 24,
        color: 'white',
        fontSize: 18,
        marginRight: 110
    },

    buttonView: {
        width: '88%',
        height: 65,
        backgroundColor: '#00c559',
        marginTop: 25,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        textAlignVertical: 'center',




    },
    buttonView1: {
        width: '80%',
        height: 35,
        backgroundColor: '#ebecf0',
        marginTop: 22,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 40,
        flexDirection: "row",


    },


    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'


    },
    buttontext1: {
        color: 'green',
        fontWeight: '500',
        height: 25,
        marginLeft: 72,
        fontSize: 16,

        alignSelf: "center",



    },
    buttontext2: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15,
        alignItems: 'center',
        alignSelf: "center",



    },

    txtView: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',



    },
    discoverFooditems: {
        borderWidth: 0,
        borderColor: 'white',
        width: 173,
        height: 255,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },
    discovergros: {
        borderWidth: 0.8,
        borderColor: 'white',
        width: 203,
        height: 85,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#E2FFEC'
    },
    discovercards: {
        borderWidth: 0,
        borderColor: 'white',
        width: 165,
        height: 190,
        borderRadius: 20,
        marginTop: 5,

        marginLeft: 12,
        marginVertical: 15,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },





})
export default Homescreen;

