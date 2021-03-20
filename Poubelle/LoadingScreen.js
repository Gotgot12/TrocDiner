import * as Font from "expo-font";
import React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native'
import BottomTabNav from "./BottomTabNav";

export default function LoadingScreen({ navigation }) { 
    useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        ScopeOne: require("../assets/fonts/Scope_One/ScopeOne.ttf"),

        OpenSans: require("../assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
        "OpenSansLight": require("../assets/fonts/Open_Sans/OpenSans-Light.ttf"),
        "OpenSansBold": require("../assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
        "OpenSansItalic": require("../assets/fonts/Open_Sans/OpenSans-Italic.ttf"),

        DancingScript: require("../assets/fonts/Dancing_Script/DancingScript.ttf"),
      })
        .then((res) => {
            console.log("FONTS LOADED!");
            <BottomTabNav/>
        })
        .catch((Err) => {
          console.log(Err);
        });
    }
    loadFonts();
  }, []);
  return(
    <View><Text>Loading</Text></View>
  )
}