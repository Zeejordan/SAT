import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
// import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, FONTS } from '../theme';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../../config/api';
import FastImage from 'react-native-fast-image';

// stop stop stop stop 

const LoginPage = () => {

    const navigation = useNavigation();

    const baseUrlLogin = LOGIN;
    const [email, setEmail] = useState('');

    const [loading, setLoading] = useState(false);

    // console.log('focus here') [WORKING]

    const handleGetOtp = async () => {
        if (!email) {
            Alert.alert("Error", "Please Enter Your Email!");
            return;
        }
        setLoading(true);

        try {
            const response = await axios.post(baseUrlLogin, { email });
            console.log("Response from server:", response.data.message);
            if (response.data.message) {
                Alert.alert("Otp has sent to your email.");
                navigation.navigate('OtpVerification', { email });
            }
        } catch (error) {
            console.error("An Error Occurred:", error);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[COLORS.linearGradientColor1, COLORS.linearGradientColor2]}
                style={styles.gradientContainer}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <View style={styles.container}>
                    <View style={styles.loginGifContainer}>
                        <FastImage
                            source={require('../../assets/images/login.gif')}
                            style={styles.loginGif}
                        />
                    </View>

                    <View style={styles.secondBox}>
                        <View style={styles.secondSemi}>
                            <View>
                                <Text style={styles.loginText}>Log in</Text>
                            </View>
                            <View style={styles.orContainer}>
                                <TextInput
                                    placeholder='abc@gmail.com'
                                    style={styles.emailInput}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    value={email}
                                    onChangeText={(text) => {
                                        console.log("input text: ", text);
                                        setEmail(text);
                                    }}
                                />
                                {/* <Text style={styles.orText}>or SIGN UP WITH EMAIL</Text> */}
                            </View>
                        </View>
                        <View style={styles.getOtpContainer}>
                            {loading ? (<ActivityIndicator color="white" size={'large'} />) : (<TouchableOpacity style={styles.getOtpButton} onPress={() => {
                                console.log('get otp button pressed');
                                handleGetOtp();
                            }}><Text style={styles.getOtpText}>Get OTP</Text></TouchableOpacity>)}
                            {/* <TouchableOpacity style={styles.getOtpButton}><Text style={styles.getOtpText}>Get OTP</Text></TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    gradientContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingVertical: hp(''),
        // backgroundColor: 'pink',
        // marginVertical:hp('5%')
    },
    emailContainer: {
        paddingHorizontal: hp('1%')
    },
    emailInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        paddingLeft: hp('2%')
    },
    loginText: {
        color: "#D1EFFF",
        fontSize: hp('4%'),
        alignSelf: 'center',
        fontWeight: '800'
    },
    loginPage: {
        gap: hp('4%'),
        marginTop: hp('30%'),
        marginHorizontal: wp('2%')
    },
    bottomButtonsNext: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: hp('1.3%')
    },
    nextText: {
        color: COLORS.blueColor,
        // color: '#26A5E6',
        fontSize: hp('2%'),
        fontWeight: '500',
        textAlign: 'center'
    },
    getButtonContainer: {
        marginHorizontal: wp('25%')
    },
    loginGifContainer: {
        // backgroundColor: 'green',
        alignSelf: 'center',
        marginTop: hp('2%')

    },
    loginGif: {
        // backgroundColor: 'orange',
        height: hp("32%"),
        width: hp("40%"),
        alignSelf: 'center'
    },
    secondBox: {
        marginHorizontal: wp('12%'),
        gap: hp('20%')
    },
    secondSemi: {
        gap: hp('5%')
    },
    orText: {
        color: 'white',
        textAlign: 'center'
    },
    orContainer: {
        gap: hp('2%')
    },
    getOtpText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    getOtpButton: {
        backgroundColor: "#0470B8",
        borderWidth: 1,
        borderColor: '#0470B8',
        borderRadius: 10,
        paddingVertical: hp('1.2%'),
        // paddingHorizontal:wp('3%')
    }
})

//-----------------------------------------------------------------------------------------------

// import React from 'react';
// import { useState } from 'react';
// import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
// // import FastImage from 'react-native-fast-image';
// import LinearGradient from 'react-native-linear-gradient';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { COLORS, FONTS } from '../theme';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LOGIN } from '../../config/api';

// // stop stop stop stop

// const LoginPage = () => {

//     const navigation = useNavigation();

//     const baseUrlLogin = LOGIN;
//     const [email, setEmail] = useState('');

//     const [loading, setLoading] = useState(false);

//     // console.log('focus here') [WORKING]

//     const handleGetOtp = async () => {
//         console.log("function k andar aa gaye hai aap")
//         if (!email) {
//             Alert.alert("Error", "Please Enter Your Email!");
//             console.log("No email entered");
//             return;
//         }
//         setLoading(true);

//         // console.log("Payload being sent:", email);[WORKING]

//         try {
//             const response = await axios.post(baseUrlLogin, { email });
//             console.log("Response from server:", response.data.message);
//             if (response.data.message) {
//                 Alert.alert("Otp has sent to your email.");
//                 // AsyncStorage.setItem('token',response.data.meta.loginData.tokens.access);
//                 // console.log("yeh hai loginData",response.data.meta.loginData)
//                 navigation.navigate('OtpVerification', { email });
//             }
//         } catch (error) {
//             console.error("An Error Occurred:", error);
//         }
//         finally {
//             setLoading(false);
//         }
//     };
//     return (
//         <SafeAreaView style={styles.mainContainer}>
//             <LinearGradient
//                 colors={[COLORS.linearGradientColor1, COLORS.linearGradientColor2]}
//                 style={styles.gradientContainer}
//                 start={{ x: 0.5, y: 0 }}
//                 end={{ x: 0.5, y: 1 }}
//             >
//                 <View style={styles.container}>
//                     <View style={styles.loginPage}>
//                         <View style={styles.loginHeading}>
//                             <Text style={styles.loginText}>Login</Text>
//                         </View>
//                         {/* <View>
//                             <Text>Enter Your Email</Text>
//                         </View> */}
//                         <View style={styles.emailContainer}>
//                             <TextInput
//                                 style={styles.emailInput}
//                                 placeholder='Enter Your Email'
//                                 keyboardType='email-address'
//                                 autoCapitalize='none'
//                                 autoCorrect={false}
//                                 value={email}
//                                 onChangeText={(text) => {
//                                     console.log("input text: ", text);
//                                     setEmail(text);
//                                 }}
//                             />
//                         </View>
//                         <View style={styles.getButtonContainer}>
//                             {loading ? (<ActivityIndicator color="white" size={'large'} />) : (<TouchableOpacity style={styles.bottomButtonsNext} onPress={() => {
//                                 console.log("Get Otp Button Pressed");
//                                 handleGetOtp();
//                             }}><Text style={styles.nextText}>Get OTP</Text></TouchableOpacity>)}

//                         </View>
//                     </View>
//                 </View>
//             </LinearGradient>
//         </SafeAreaView>
//     )
// }

// export default LoginPage

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1
//     },
//     gradientContainer: {
//         flex: 1
//     },
//     container: {
//         flex: 1,
//     },
//     emailContainer: {
//         paddingHorizontal: hp('1%')
//     },
//     emailInput: {
//         backgroundColor: 'white',
//         borderWidth: 1,
//         borderRadius: 5,
//         borderColor: 'white'
//     },
//     loginText: {
//         color: "white",
//         fontSize: hp('4%'),
//         alignSelf: 'center',
//         fontWeight: '800'
//     },
//     loginPage: {
//         gap: hp('4%'),
//         marginTop: hp('30%'),
//         marginHorizontal: wp('2%')
//     },
//     bottomButtonsNext: {
//         backgroundColor: 'white',
//         borderWidth: 1,
//         borderColor: 'white',
//         borderRadius: 10,
//         paddingVertical: hp('1.3%')
//     },
//     nextText: {
//         color: COLORS.blueColor,
//         // color: '#26A5E6',
//         fontSize: hp('2%'),
//         fontWeight: '500',
//         textAlign: 'center'
//     },
//     getButtonContainer: {
//         marginHorizontal: wp('25%')
//     }
// })