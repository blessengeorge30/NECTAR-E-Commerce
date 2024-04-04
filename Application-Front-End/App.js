import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {firebase } from "./config/firebase"

import Router from './screens/Router';
import Homescreen from "./Bottomnavigation/Shop";
import Splash from './screens/Splash';
import Onboard from './screens/Onboard';
import SignIn from './screens/Signin';
import OTPscreen from './screens/OTPscreen';
import Selectlocation from './screens/Selectlocation';
import Login from './screens/Login';
import Signup from './screens/Signup';
import FoodDetails from './screens/FoodDetails';
import Beverages from './screens/Beverages';
import Location from './screens/Location';
import Qrcode from './screens/Qrcode';
import AccountID from './screens/AccountID';
import Successpage from './screens/Successpage';
import CartAdded from './screens/CartAdded';
import store from './Redux/store';
import { Provider } from 'react-redux';





const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        /> 
          <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        /> 
          <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="OTPscreen"
          component={OTPscreen}
          options={{ headerShown: false }}
        /> 
            <Stack.Screen
          name="Selectlocation"
          component={Selectlocation}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Router"
          component={Router}
          options={{ headerShown: false }}
        /> 
         
            {/* <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{ headerShown: false }}
        />  */}
            <Stack.Screen
          name="FoodDetails"
          component={FoodDetails}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Beverages"
          component={Beverages}
          options={{ headerShown: false }}
        /> 
            <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="Qrcode"
          component={Qrcode}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="AccountID"
          component={AccountID}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="Successpage"
          component={Successpage}
          options={{ headerShown: false }}
        /> 
          <Stack.Screen
          name="CartAdded"
          component={CartAdded}
          options={{ headerShown: false }}
        /> 
            
        
      </Stack.Navigator>
   
    </NavigationContainer>
    </Provider>
  );
};

export default App;
