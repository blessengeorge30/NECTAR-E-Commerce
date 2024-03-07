import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Router from "./Router";





const Onboard = () => {
    const navigation = useNavigation();
    const Homescreen = () => {
        navigation.navigate("Signin")
    }

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={18} source={require('../assets/Onboardbg.png')}
                style={styles.backgroundImage}>
                    <View style={{marginTop:450,marginBottom:5,marginHorizontal:180}}>
                        <Image source={require('../assets/mainlogo.png')} style={{ height:60, width: 50}} />
                    </View>

                <View style={{ marginTop: 20, alignItems: 'center', alignSelf: 'center' }}>
                    <View >
                        <Text style={{ color: 'white', fontSize: 42,fontWeight: 'bold' , marginHorizontal: 10, marginBottom: -5 }}>Welcome  </Text>
                        <Text style={{ color: 'white', fontSize: 42, fontWeight: 'bold' ,marginLeft: -5, marginBottom: 15 }}>to our store </Text>
                       

                    </View>

                    <View >

                        <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', fontWeight: "300" }}>Get your groceries in as fast as one hour</Text>

                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonView} onPress={Homescreen}>
                        <Text style={styles.buttontext}> Get Started </Text>
                    </TouchableOpacity>
                </View>






            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,

        flex: 1
    },
    backgroundImage: {
        height: '100%',
        width: '100%',


    },
    logo: {
        height: 350,
        width: 350,
        marginBottom: 80,
        resizeMode: "contain",
        // marginLeft:45,

        alignSelf: "center"

    },
    logo1: {
        height: 15,
        width: 15,



    },
    inputView: {
        width: '70%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 25,
        marginLeft: 10


    },
    inputView1: {
        width: '15%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 10,
        marginLeft: 25


    },
    logo2: {
        height: 20,
        width: 20,




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
        zIndex: 2,




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
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20


    },


})
export default Onboard;