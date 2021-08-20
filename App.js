import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import {useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins'

import Routes from './src/routes/routes'

export default function App(){
  const[fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
    <Routes/>
    </>
  )
}




