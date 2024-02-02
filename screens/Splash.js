import { useEffect } from 'react';
import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("Onboard");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container} >
      {/* <ImageBackground blurRadius={8} source={require('../assets/Groceries.jpg')} style={styles.backgroundImage} > */}
        <View>
          <Image source={require('../assets/logo.png')} style={{ height: 72, width: 280 ,alignSelf:'center',marginVertical:380}} />
        </View>

      {/* </ImageBackground> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#00c559',
    flex: 1,



  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
})

export default Splash;
