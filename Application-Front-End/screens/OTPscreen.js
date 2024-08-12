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
// import Icon from 'react-native-vector-icons/AntDesign';
// import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";



const Profile = () => {
    const handleConfirmButtonPress = () => {
        // Navigate to the next page or perform other actions
        navigation.navigate('Selectlocation');
      };
       const navigation = useNavigation();
       const Register = () => {
           navigation.navigate("Selectlocation")
       }

    return (
        <View style={styles.container}>
            

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/signinbg.png')}
                    style={styles.backgroundImage}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
          <Image source={require('../assets/back.png')} style={{ height: 20, width: 20, marginVertical: 25 }} />
        </TouchableOpacity>
                
                    <View style={{ marginTop:235}}>
                    <Text style={{ color: 'black', fontSize: 30, alignSelf: 'center', fontWeight: "500" }}>Enter 4 -digit code</Text>
                    <Text style={{ color: 'grey', fontSize: 15, alignSelf: 'center',marginBottom:10 }}>Please type the verification code sent to</Text>
                    {/* <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center',marginBottom:10 ,fontWeight: "bold"}}>+91 8137066525</Text> */}

          
                    </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{ height: 1000, backgroundColor: '#011a37', borderRadius: 15, marginTop: -145 }}>
                <View style={{ flexDirection: 'row', marginTop: 25,marginLeft:30 }}>
                    <TextInput style={[styles.inputView1, { color: 'white', textAlign: 'center' }]}

                         
                        placeholderTextColor='white'
                        keyboardType='numeric'
                        maxLength={1}
                    >
                    </TextInput>
                    <TextInput style={[styles.inputView1, { color: 'white', textAlign: 'center' }]}

                        
                        placeholderTextColor='white'
                        keyboardType='numeric'
                        maxLength={1}
                    >
                    </TextInput>
                    <TextInput style={[styles.inputView1, { color: 'white', textAlign: 'center' }]}

                         
                        placeholderTextColor='white'
                        keyboardType='numeric'
                        maxLength={1}
                    >
                    </TextInput>
                    <TextInput style={[styles.inputView1, { color: 'white' , textAlign: 'center'}]}

                         
                        placeholderTextColor='white'
                        keyboardType='numeric'
                        maxLength={1}
                        onSubmitEditing={handleConfirmButtonPress}>
                    </TextInput>
                    

                 
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonView} 
                    onPress={Register} >
                        <Text style={styles.buttontext}> Submit</Text>
                    </TouchableOpacity>
                    
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center',marginTop:10,opacity:0.5 }}>resend after 30s</Text>
                </View>
                <View style={{marginTop:25,alignSelf:'center'}}>
                <TouchableOpacity style={{flexDirection: 'row'}} >
                <Image source={require('../assets/dial.png')}
                        style={styles.logo2}/>

                        <Text style={styles.buttontext1}> Contact us</Text>
                    </TouchableOpacity>
                </View>







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
        height: '80%',
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
        marginTop:60,
        marginBottom:55,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor:'black'

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
        width: '15%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#01326f',
        backgroundColor: '#001631',
        marginTop: 25,
        marginHorizontal:15,
        alignSelf:"center"
       


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
        justifyContent:"center",
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
       alignSelf:'center'


    },
    buttontext1: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
       alignItems:'center',
       alignSelf: "center",



    },

    txtView: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
       alignSelf:'center',
       
       

    }


})
export default Profile;
