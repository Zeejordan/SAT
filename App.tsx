// import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SplashScreen from './src/Pages/SplashScreen'
// import LevelScreenV2 from './src/Pages/LevelScreenV2'
// import TestQuestion from './src/Pages/TestQuestion'
// import LevelComplete from './src/Pages/LevelComplete'
// import QuizComplete from './src/Pages/QuizComplete'
// import GoogleSplashScreen from './src/Pages/SplashScreen2'
// import LoginPage from './src/Pages/LoginPage'
// import HomeScreen from './src/Pages/HomeScreen'
// import OtpVerification from './src/Pages/OtpVerification'
// import GoogleAuth from './src/Pages/GoogleAuth';
// import ProfileDetails from './src/Pages/ProfileDetails';
// import Infinite from './src/Pages/Infinite';
// import Footer from './src/Components/Footer';
// import Levels from './src/Pages/Infinite';
// import Quiz from './src/Pages/Quiz';
// import EnglishQuiz from './src/Pages/EnglishQuiz';
// import EnglishQuizQuestion from './src/Components/EnglishQuizQuestion';

// // const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       {/* <SplashScreen /> */}
//       {/* <GoogleSplashScreen/> */}
//       {/* <TestQuestion /> */}
//       {/* <LevelComplete /> */}
//       {/* <QuizComplete /> */}
//       {/* <LoginPage/> */}
//       {/* <HomeScreen/> */}
//       {/* <OtpVerification/> */}
//       {/* <GoogleAuth/> */}
//       {/* <ProfileDetails /> */}
//       {/* <Levels /> */}
//       {/* <Quiz /> */}
//       <EnglishQuiz />
//       {/* <EnglishQuizQuestion /> */}
//       {/* <Footer /> */}
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1
//   }
// })

//-------------------------------------------------------------------------------------------------------------------
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SplashScreen from './src/Pages/SplashScreen'
import LevelScreenV2 from './src/Pages/LevelScreenV2'
import TestQuestion from './src/Pages/TestQuestion'
import LevelComplete from './src/Pages/LevelComplete'
import QuizComplete from './src/Pages/QuizComplete'
import GoogleSplashScreen from './src/Pages/SplashScreen2'
import LoginPage from './src/Pages/LoginPage'
import HomeScreen from './src/Pages/HomeScreen'
import OtpVerification from './src/Pages/OtpVerification'
import ProfileDetails from './src/Pages/ProfileDetails';
import Levels from './src/Pages/Infinite';
import Quiz from './src/Pages/Quiz';
import EnglishQuiz from './src/Pages/EnglishQuiz';

const Stack = createNativeStackNavigator();

const App = () => {
  const initialRoute = 'SplashScreen';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="GoogleLogin" component={GoogleSplashScreen} />
        <Stack.Screen name="TestQuestion" component={TestQuestion} />
        <Stack.Screen name="LevelComplete" component={LevelComplete} />
        <Stack.Screen name="QuizComplete" component={QuizComplete} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="Levels" component={Levels} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="English-Quiz" component={EnglishQuiz} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})
