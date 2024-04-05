import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Keyboard
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

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
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    // function handelSubmit() {
    //     const userData = {
    //         name: name,
    //         email,
    //         password,
    //       };
    //     axios
    //     .post("http://192.168.1.12:5001/register",userData)
    //     .then(res =>console.log(res.data))
    //     .catch(e => console.log(e.response));
    // }

 


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {!isKeyboardVisible && (
                    <ImageBackground source={require('../assets/blurbg.jpeg')} style={styles.backgroundImage}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                            <Image source={require('../assets/back.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <Image source={require('../assets/originallogo.png')} style={styles.logo} />
                        <View style={{ marginTop: 18 }}>
                            <Text style={styles.heading}>Sign up</Text>
                            <Text style={styles.subHeading}>Enter your credentials to continue</Text>
                        </View>
                    </ImageBackground>
                )}
                <View style={styles.formContainer}>

                    <Text style={styles.label}>Username</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your username"
                            placeholderTextColor="black"
                            maxLength={10}
                            onChangeText={handleName}
                        />
                        {name.length > 0 && (nameVerify ? (
                            <Image
                                source={require('../assets/checkmark.png')}
                                style={styles.icon}
                            />
                        ) : (
                            <Image
                                source={require('../assets/deleteicon.png')}
                                style={styles.icon}
                            />
                        ))}
                    </View>
                    {name.length > 0 && !nameVerify && (
                        <Text style={styles.errorText}>Name should be more than 1 character.</Text>
                    )}

                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="black"
                            maxLength={50}
                            onChangeText={handleEmail}
                        />
                        {email.length > 0 && (emailVerify ? (
                            <Image
                                source={require('../assets/checkmark.png')}
                                style={styles.icon}
                            />
                        ) : (
                            <Image
                                source={require('../assets/deleteicon.png')}
                                style={styles.icon}
                            />
                        ))}
                    </View>
                    {email.length > 0 && !emailVerify && (
                        <Text style={styles.errorText}>Enter a valid email address.</Text>
                    )}

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="white"
                            maxLength={10}
                            secureTextEntry={!showPassword}
                            onChange={handlePassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordButton}>
                            <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.termsLink}>
                    <Text style={styles.termsText}>By continuing you agree to our<Text style={styles.termsHighlight}>Terms of Service</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.termsLink}>
                    <Text style={styles.termsText}>and <Text style={styles.termsHighlight}>Privacy Policy</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} 
                onPress={()=>registerUser()}
                >
                    <Text style={styles.signupButtonText}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Already have an account?</Text>
                    <TouchableOpacity onPress={Signup}>
                        <Text style={styles.signInLink}>Sign in</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        backgroundImage: {
            flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%', // Ensure the background image covers the entire width
        height: '100%' // Ensure the background image covers the entire height
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
            position: 'absolute',
            top: 80,
            left: 20,
            zIndex: 1
        },
        logo: {
            width: 180,
            height: 60,
            marginLeft:15,
            alignSelf: 'center',
            marginTop: 180,
            resizeMode: "contain"
        },
        
        heading: {
            color: 'black',
            fontSize: 27,
            marginBottom: 12,
            marginHorizontal: 45,
            fontWeight: "500",
            textAlign: 'center'
        },
        subHeading: {
            color: 'grey',
            fontSize: 14,
            marginHorizontal: 40,
            marginBottom: 12,
            textAlign: 'center'
        },
        formContainer: {
            paddingHorizontal: 20,
            marginTop: '20%',
            paddingBottom: 20, // Added paddingBottom to accommodate for the button
        },
        
        label: {
            color: 'black',
            fontSize: 15,
            marginBottom: 5
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderColor: '#01326f',
            marginBottom: 10 // Increased marginBottom for better spacing between inputs
        },
        input: {
            flex: 1,
            color: 'black',
            height: 40
        },
        icon: {
            width: 20,
            height: 20
        },
        errorText: {
            color: 'red',
            // marginLeft: 5,
            marginTop: 4,
            marginBottom:8
        },
        showPasswordButton: {
            position: 'absolute',
            right: 10
        },
        showPasswordText: {
            color: 'black',
            fontSize: 14
        },
        termsLink: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            paddingHorizontal: 25
        },
        termsText: {
            color: 'black',
            fontSize: 14
        },
        termsHighlight: {
            color: 'green',
            fontWeight: 'bold'
        },
        signupButton: {
            backgroundColor: '#00c559',
            borderRadius: 5,
            paddingVertical: 15,
            marginHorizontal: 25,
            alignItems: 'center',
            marginTop: 20
        },
        signupButtonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18
        },
        signInContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20
        },
        signInText: {
            color: 'black',
            fontSize: 14
        },
        signInLink: {
            color: 'green',
            fontWeight: 'bold',
            fontSize: 14,
            paddingBottom:85
        },
    });
    






export default Profile;

