import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const navigation = useNavigation();

    const Register = () => {
        navigation.navigate("Login");
    };

    const Signup = () => {
        navigation.navigate("Login");
    };

    const [name, setName] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    const [email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('');
    const [secretText, setSecretText] = useState('');

    function handleName(text) {
        setName(text);
        setNameVerify(text.length > 1);
    }

    function handleEmail(text) {
        setEmail(text);
        setEmailVerify(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(text));
    }
    function handlePassword(e) {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
          setPassword(passwordVar);
          setPasswordVerify(true);
        }
      }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../assets/blurbg.jpeg')} style={styles.backgroundImage}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                            <Image source={require('../assets/back.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <Image source={require('../assets/originallogo.png')} style={{ height: 60, width: 50, alignSelf: 'center' }} />
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: 'black', fontSize: 27, marginBottom: 12, marginHorizontal: 45, fontWeight: "500" }}>Sign up</Text>
                            <Text style={{ color: 'grey', fontSize: 14, marginHorizontal: 40, marginBottom: 12 }}> Enter your credentials to continue</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{ marginTop: -354 }}>
                <View style={{ marginTop: -184 }}>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: 45 }}>Username</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={[styles.inputView1, { marginLeft: 45, color: 'black' }]}
                            placeholderTextColor="black"
                            maxLength={10}
                            onChangeText={handleName}
                        />
                        {name.length > 0 && (nameVerify ? (
                            <Image
                                source={require('../assets/checkmark.png')}
                                style={{ height: 26, width: 26, position: 'absolute', right: 50 }}
                            />
                        ) : (
                            <Image
                                source={require('../assets/deleteicon.png')}
                                style={{ height: 20, width: 20, position: 'absolute', right: 50 }}
                            />
                        ))}
                    </View>
                    {name.length > 0 && !nameVerify && (
                        <Text style={{ marginLeft: 45, marginTop: 5, color: 'red' }}>Name should be more than 1 character.</Text>
                    )}

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 50 }}>Email</Text>
                        <View style={[styles.inputView1, { flexDirection: 'row', alignItems: 'center' }]}>
                            <TextInput
                                style={{ flex: 1, color: 'black' }}
                                placeholderTextColor='black'
                                maxLength={50}
                                onChangeText={handleEmail}
                            />
                            {email.length > 0 && (emailVerify ? (
                                <Image
                                    source={require('../assets/checkmark.png')}
                                    style={{ height: 26, width: 26, marginRight: 2 }}
                                />
                            ) : (
                                <Image
                                    source={require('../assets/deleteicon.png')}
                                    style={{ height: 20, width: 20, marginRight: 2 }}
                                />
                            ))}
                        </View>
                    </View>
                    {email.length > 0 && !emailVerify && (
                        <Text style={{ marginLeft: 50, marginTop: 6, color: 'red' }}>Enter a valid email address.</Text>
                    )}

                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 50, marginTop: 10 }}>Password</Text>
                        <TextInput style={[styles.inputView1, { color: 'black' }]}

                            placeholderTextColor='white'
                            maxLength={10}>
                        </TextInput>
                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 35, marginTop: 15 }}>
                            <Text style={styles.buttontext2}> By continuing you agree to our </Text>
                            <Text style={styles.buttontext1}>Terms of Service </Text>


                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                            <Text style={styles.buttontext2}>and</Text>
                            <Text style={styles.buttontext1}>Privacy Policy</Text>
                        </View>

                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonView}
                            onPress={Register} >
                            <Text style={styles.buttontext}> Signup </Text>
                        </TouchableOpacity>


                    </View>
                    <View style={{ marginTop: 18, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={Signup} >

                            <Text style={styles.buttontext2}> Already have an account?</Text>
                            <Text style={styles.buttontext1}> Sign in</Text>
                        </TouchableOpacity>
                    </View>




                </View>


            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
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
        marginTop: 68,
        marginBottom: 25,
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
        width: '75%',
        height: 60,
        borderBottomWidth: 0.5,
        // marginLeft: 45 ,
        borderColor: '#01326f',

        marginTop: -5,
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
        fontWeight: 'bold',
        height: 25,
        marginLeft: 2,
        fontSize: 15,
        alignItems: 'center',
        alignSelf: "center",
    },
    buttontext2: {
        color: 'black',
        fontWeight: '400',
        fontSize: 14,
    },

    txtView: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',



    }


})
export default Profile;





