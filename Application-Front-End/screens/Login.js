import { Keyboard} from "react-native";
import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

import { FIREBASE_AUTH } from "../config/firebase";

const Profile = () => {
    const navigation = useNavigation();

    const Login = () => {
        navigation.navigate("Router");
    };

    const Signup = () => {
        navigation.navigate("Signup");
    };

    const [visibility, setVisibility] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setVisibility(false);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setVisibility(true);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <KeyboardAvoidingView
            style={[styles.container, { paddingBottom: 500 }]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground
                            source={require('../assets/blurbg.jpeg')}
                            style={styles.backgroundImage}
                        >
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                                <Image source={require('../assets/back.png')} style={{ height: 20, width: 20, marginVertical: 25 }} />
                            </TouchableOpacity>
                            <View style={{ marginTop: 60 }}>
                                <Image source={require('../assets/originallogo.png')} style={{ height: 60, width: 50, alignSelf: 'center' }} />
                                {visibility == true ? (
                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ color: 'black', fontSize: 27, marginBottom: 8, alignSelf: 'center', fontWeight: "500" }}>Login</Text>
                                        <Text style={{ color: 'grey', fontSize: 13, alignSelf: 'center', marginBottom: 2 }}> Enter your emails and password</Text>
                                    </View>
                                ) : null}
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                <View>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ marginTop: -140 }}>
                            <Text style={{ color: 'black', fontSize: 15, marginLeft: 55 }}>Email</Text>
                            <TouchableOpacity onPress={() => { setVisibility(!visibility) }}>
                                <TextInput
                                    style={[styles.inputView1, { color: 'black' }]}
                                    value={email}
                                    autoCapitalize="none"
                                    placeholderTextColor='white'
                                    maxLength={10}
                                    onChangeText={(text) => setEmail(text)}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: 'black', fontSize: 15, marginLeft: 55 }}>Password</Text>
                            <TextInput
                                style={[styles.inputView1, { color: 'black' }]}
                                autoCapitalize="none"
                                value={password}
                                placeholderTextColor='white'
                                maxLength={10}
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 12, marginTop: 5, marginLeft: 255, opacity: 0.5 }}>    Forgot password? </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonView} onPress={Login} >
                                <Text style={styles.buttontext}> Login </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 25, alignSelf: 'center', }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={Signup} >
                                <Text style={styles.buttontext2}> Don't have an account?</Text>
                                <Text style={styles.buttontext1}> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        flex: 1
    },
    backgroundImage: {
        height: '95%',
        width: '100%',
    },
    button3:
    {
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
    inputView1: {
        width: '75%',
        height: 60,
        borderBottomWidth: 0.5,
        borderColor: '#01326f',
        marginTop: 5,
        marginHorizontal: 15,
        alignSelf: "center"
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
        textAlignVertical: 'center'
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
        fontSize: 16,
        alignItems: 'center',
        alignSelf: "center"
    },
    buttontext2: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15,
        alignItems: 'center',
        alignSelf: "center"
    },
});

export default Profile;

