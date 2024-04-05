import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from '../config/firebase';

const Signin = () => {
    const handleConfirmButtonPress = () => {
        // Navigate to the next page or perform other actions
        navigation.navigate('OTPscreen');
      };
      const OTP = () => {
        // Navigate to the previous page or perform other actions
        navigation.navigate('OTPscreen');
      };
    const navigation = useNavigation();
    const Route = () => {
        navigation.navigate("Router")
    }
const [visiblity,setvisiablity]=useState(true)


    return (
        <View style={styles.container}>
            {visiblity==true?<View>
                <ImageBackground source={require('../assets/signinbg.png')}
                    style={styles.backgroundImage}>
                </ImageBackground>
            </View>:null}
            <View style={{ height: 1000, backgroundColor: '#011a37', borderRadius: 15, marginTop: 10 }}>
            <View style={{ marginTop:-280 }}>
                <Text style={{ color: 'black', fontSize: 28, fontWeight: '400', marginHorizontal: 20, marginBottom: 5 }}>Get your groceries </Text>
                <Text style={{ color: 'black', fontSize: 28, fontWeight: '400', marginLeft: 20, marginBottom: 15 }}>with nectar </Text>
            </View>
            <View style={{ flexDirection: 'row', borderBottomWidth: 0.8, borderBottomColor: '#A2A2A2 ',width:'90%',marginLeft:20 }}>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                        <Image source={require('../assets/UK.png')} style={{ height: 20, width: 40 }} />
                    </View>
                    <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', fontWeight: "350", marginVertical: 15 }}>+44    </Text>
                    
                        <TextInput style={{ marginVertical: 15 }}
                        placeholder='Enter your phone no.'

                        placeholderTextColor='grey'
                        maxLength={12}
                        keyboardType='numeric'
                        onSubmitEditing={handleConfirmButtonPress}
                        onPress={()=>{setvisiablity(!visiblity)}} >


                    </TextInput>
                    <TouchableOpacity style={styles.button4} onPress={OTP}>

                    <Image source={require('../assets/rightarrow1.png')} style={{ height: 15, width: 8 }} />
                    </TouchableOpacity>

                </View>


            </View>
            <View>

                <Text style={{ color: 'grey', fontSize: 12, alignSelf: 'center', fontWeight: "350", marginVertical: 22 }}>
                    or connect with social media</Text>

            </View>
            <View>
                <TouchableOpacity style={styles.buttonView} onPress={Route} >
                    <Image source={require('../assets/googleicon.png')} style={{ height: 20, width: 20, marginHorizontal: 25, marginTop: 20 }} />
                    <Text style={styles.buttontext}> Continue with Google</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonView1} onPress={Route} >
                    <Image source={require('../assets/facebookicon.png')} style={{ height: 22, width: 12, marginLeft: 25,marginRight:28, marginTop: 18 }} />
                    <Text style={styles.buttontext}> Continue with Facebook</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        height: '80%',
        // width: '100%',


    },

    button: {
        borderRadius: 2,
        height: 48,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    buttonView: {
        width: '88%',
        height: 65,
        backgroundColor: '#5383EC',
        marginTop: 15,
        borderRadius: 15,
        alignSelf: "center",
        // alignItems: 'center',
        // justifyContent: "center",
        // textAlignVertical: 'center',
        zIndex: 2,
        flexDirection: 'row'




    },
    buttonView1: {
        width: '88%',
        height: 65,
        backgroundColor: '#4A66AC',
        marginTop: 15,
        borderRadius: 15,
        alignSelf: "center",
        // alignItems: 'center',
        // justifyContent: "center",
        // textAlignVertical: 'center',
        zIndex: 2,
        flexDirection: 'row'




    },
    button4: {
        height: 35,
        width: 50,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: '#ebecf0',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',      
        marginBottom: 2,
        marginLeft: 45,
        marginTop:15
       

    },
    buttontext: {
        color: 'white',
        fontWeight: '350',
        fontSize: 15,
        alignSelf: 'center',
        marginLeft: 35


    },


});

export default Signin;