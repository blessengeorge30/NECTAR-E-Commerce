import React, { useState }  from "react";
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
import CustomAlert from '../screens/Location';
import Location from "../screens/Location";
// import Icon from 'react-native-vector-icons/AntDesign';
// import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";



const Profile = () => {
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [marginTop,setMarginTop] = useState(-195);
    const [country,setCountry] = useState('Select Country')

    const position = () =>{
        console.log('asddasdas')
        setMarginTop(-100)
    }
    const showAlert = () => {
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const settingCountry = (value)=>{
            setCountry(value)
    }
    


    const navigation = useNavigation();
    const Register = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>


            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../assets/blurbg.jpeg')}
                        style={styles.backgroundImage}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                            <Image source={require('../assets/back.png')} style={{ height: 20, width: 20, marginVertical: 25 }} />
                        </TouchableOpacity>
                        <Image source={require('../assets/illustration.png')} style={{ height: 160, width: 200, alignSelf: 'center' }} />
                        <View style={{ marginTop: 55 }}>
                            <Text style={{ color: 'black', fontSize: 30, alignSelf: 'center', marginBottom: 12, fontWeight: "500" }}>Select Your Location</Text>
                            <Text style={{ color: 'grey', fontSize: 15, alignSelf: 'center', marginBottom: 2 }}>Switch on your location to stay in tune with</Text>
                            <Text style={{ color: 'grey', fontSize: 15, alignSelf: 'center', marginBottom: 10 }}>what’s happening in your area</Text>



                        </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{ height: 1000, backgroundColor: '#011a37', borderRadius: 15, marginTop }}>
            
                   <TouchableOpacity onPress={showAlert} style={{
            width: '90%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 100,
            marginBottom:15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            borderWidth:2,
            backgroundColor:'white'
          }}>
                        <Text style={{color:'black'}}>{country}</Text>
                   
                   </TouchableOpacity>
                   <Location
                       visible={isAlertVisible}
                       message="This is a custom alert!"
                       onClose={hideAlert}
                       country={settingCountry}
                   />
                {/* <View style={{ marginTop: 25 }}>
                    <Text style={{ color: 'white', fontSize: 15, marginLeft: 40,margin }}>District</Text>
                    <TextInput style={[styles.inputView1, { color: 'white', paddingHorizontal: 25 }]}

                        placeholderTextColor='white'
                        maxLength={10}>
                    </TextInput>
                </View> */}

             
                
                    <TouchableOpacity style={styles.buttonView}
                        onPress={Register} >
                        <Text style={styles.buttontext}> Submit</Text>
                    </TouchableOpacity>


                
             








            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        flex: 1
    },
    backgroundImage: {
        height: '85%',
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
        marginVertical: 68,
        marginHorizontal: 25

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
        width: '70%',
        height: 65,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 25,
        marginLeft: 10


    },
    inputView1: {
        width: '85%',
        height: 60,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#01326f',
        backgroundColor: '#001631',
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
        // marginTop: 25,
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
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        alignSelf: "center",



    },

    txtView: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',



    }


})
export default Profile;
