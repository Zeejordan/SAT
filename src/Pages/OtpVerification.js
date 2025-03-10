import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    ActivityIndicator,
} from "react-native";
import axios from 'axios';
import { LOGIN, VERIFY_OTP } from '../../config/api';
import { COLORS, FONTS } from '../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const OtpVerification = ({ route, navigation }) => {

    const { email } = route.params;

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [isVerified, setIsVerified] = useState(false);
    const [resendOtp, setResendOtp] = useState(false);

    const [loadingVerify, setLoadingVerify] = useState(false);
    const [loadingResend, setLoadingResend] = useState(false);


    const handleInputChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;

        setOtp(newOtp);

        if (text && index < 5) {
            inputs[index + 1]?.focus();
        }

        if (text === "" && index > 0) {
            inputs[index - 1]?.focus();
        }
    };

    const baseUrlVerifyOtp = VERIFY_OTP;
    const verifyOtp = async () => {
        const stringOtp = otp.join("");

        const payload = {
            email: email,
            otp: stringOtp
        }

        console.log("yeh hai email: ", email);
        console.log("yeh hai otp: ", otp);

        setLoadingVerify(true)

        try {
            const response = await axios.post(baseUrlVerifyOtp, payload);
            // console.log("verify otp wala dekho", response.data.message);
            // console.log("yeh hai accesss token ", response.data.meta.loginData.tokens.access)
            // console.log("yeh hai user id", response.data.meta.loginData.user.user_id)

            AsyncStorage.setItem('token', response.data?.meta?.loginData?.tokens?.access);
            // setUserId(response.data.meta.loginData.user.user_id)
            AsyncStorage.setItem('userId', response.data?.meta?.loginData?.user?.user_id);


            if (response.data.message === "Login successful") {
                Alert.alert("Success", "OTP verified! you are logged in.");
                navigation.navigate('HomeScreen')
                if (response.data.meta.loginData.user.profile_verified) {
                    navigation.navigate('HomeScreen')
                }
                else {
                    navigation.navigate('ProfileDetails')
                }
            }
            else {
                Alert.alert('Invalid OTP', 'The OTP you entered is incorrect , please try again.');
            }

        } catch (error) {
            Alert.alert("Error", "Something went wrong while verifying the OTP. Please try again.");
            console.error("Error during OTP verification:", error);
        }
        finally {
            setLoadingVerify(false);
        }
    };

    const baseUrlLogin = LOGIN;

    const handleResendOtp = async () => {
        setLoadingResend(true);

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
            setLoadingResend(false);
        }
    };

    const inputs = [];
    console.log("yeh hai inputs array", inputs)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.firstBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name='left' color={"black"} style={styles.backIcon} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.changeEmailText}>Change Email</Text></TouchableOpacity>
                </View>

                <View style={styles.enterOtpContainer}>
                    <Text style={styles.enterAuthText}>Enter Authentication Code</Text>
                    <Text style={styles.enterCodeText}>Enter the 4-digit OTP that we have sent via{'\n'}the email abc@gmail.com</Text>
                </View>

                <View style={styles.otpContainer}>
                    {otp.map((_, index) => (
                        <TextInput
                            key={index}
                            ref={(input) => (inputs[index] = input)}
                            style={styles.otpInput}
                            keyboardType="numeric"
                            maxLength={1}
                            value={otp[index]}
                            onChangeText={(text) => handleInputChange(text, index)}
                        />
                    ))}
                </View>
                <View>
                    {
                        loadingVerify ? (<ActivityIndicator color={COLORS.blueColor} size={"large"} style={styles.verifyLoader} />) : (<TouchableOpacity
                            style={[
                                styles.continueButton,
                                otp.join("").length < 6 && styles.disabledButton,
                            ]}
                            onPress={verifyOtp}
                            disabled={otp.join("").length < 6}
                        >
                            <Text style={styles.continueText}>
                                {isVerified ? "Verified" : "Verify"}
                            </Text>
                        </TouchableOpacity>)
                    }
                    {loadingResend ? (<ActivityIndicator color={COLORS.blueColor} size={"large"} style={styles.resendLoader} />) : (<TouchableOpacity style={styles.resendContainer} onPress={handleResendOtp}>
                        <Text style={styles.resendText}>resend code</Text>
                    </TouchableOpacity>)}

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer: {
        flexDirection: 'column',
        paddingHorizontal: wp('5%'),
        marginTop: hp('2%'),
        backgroundColor: 'white'
    },
    backIcon: {
        fontSize: hp('1.6%'),
    },
    enterOtpContainer: {
        gap: hp('2%'),
        marginTop: hp('4%')
    },
    enterAuthText: {
        textAlign: 'center',
        fontSize: hp('2.5%'),
        fontWeight: '700'
    },
    enterCodeText: {
        textAlign: 'center'
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp('80%'),
        marginTop: hp('4%'),
        alignSelf: 'center'
    },
    otpInput: {
        width: 45,
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        textAlign: "center",
        fontSize: 18,
        borderRadius: 26,
        color: "#333",
        backgroundColor: "white",
        padding: 5
    },
    verifyButton: {
        backgroundColor: "#0651C6",
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 8,
    },
    disabledButton: {
        backgroundColor: "#ccc",
    },
    verifyButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    resendContainer: {
        marginTop: hp('2%'),
    },
    resendText: {
        color: "#0651C6",
        fontWeight: "500",
    },
    firstBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    changeEmailText: {
        color: 'black',
        fontSize: hp('1.8%'),
        color: '#1389BE',
        fontWeight: '500'
    },
    continueText: {
        color: 'white',
        textAlign: 'center',
        fontSize: hp('2%'),
        fontWeight: '700'

    },
    continueButton: {
        backgroundColor: '#0470B8',
        marginHorizontal: wp('8%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginTop: hp('10%'),
        paddingVertical: hp('1%')
    },
    resendText: {
        textAlign: 'center',
        color: '#1389BE'
    },
    resendLoader: {
        marginTop: hp('2%')
    },
    verifyLoader: {
        marginTop: hp('10%')
    }
});

export default OtpVerification;

//-------------------------------------------------------------------------
// import React, { useState } from "react";
// import {
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     Alert,
//     ActivityIndicator,
// } from "react-native";
// import axios from 'axios';
// import { LOGIN, VERIFY_OTP } from '../../config/api';
// import { COLORS, FONTS } from '../theme';


// const OtpVerification = ({ route, navigation }) => {

//     const { email } = route.params;

//     const [otp, setOtp] = useState(new Array(6).fill(""));
//     const [isVerified, setIsVerified] = useState(false);
//     // const [newOtp, setNewOtp] = useState('');

//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (text, index) => {
//         const newOtp = [...otp];
//         newOtp[index] = text;

//         // console.log("yeh hai bheja hua otp:",newOtp)
//         setOtp(newOtp);

//         if (text && index < 5) {
//             inputs[index + 1]?.focus();
//         }

//         if (text === "" && index > 0) {
//             inputs[index - 1]?.focus();
//         }
//     };

//     const baseUrlVerifyOtp = VERIFY_OTP;
//     const verifyOtp = async () => {
//         // console.log('now you are inside verifyotp function')
//         // console.log("yeh hai verifytop wala email",email)
//         // console.log("email yeh hai- ",email);
//         // console.log("otp yeh hai- ", otp);
//         const stringOtp = otp.join("");
//         // setNewOtp(stringOtp);

//         const payload = {
//             email: email,
//             otp: stringOtp
//         }

//         console.log("yeh hai email: ", email);
//         console.log("yeh hai otp: ", otp);

//         setLoading(true)

//         try {
//             const response = await axios.post(baseUrlVerifyOtp, payload);
//             // console.log("verify otp wala dekho", response.data.message);
//             console.log(response)
//             if (response.data.message === "Login successful") {
//                 Alert.alert("Success", "OTP verified! you are logged in.");
//                 navigation.navigate('HomeScreen')
//             }
//             else if(response.data.message === "No OTP found for this user."){
//                 Alert.alert('Invalid OTP', 'The OTP you entered is incorrect , please try again.');
//             }

//         } catch (error) {
//             Alert.alert("Error", "Something went wrong while verifying the OTP. Please try again.");
//             console.error("Error during OTP verification:", error);
//         }
//         finally {
//             setLoading(false);
//         }
//     };

//     const inputs = [];

//     return (
//         <SafeAreaView style={styles.container}>

//             <Text style={styles.title}>OTP Verification</Text>
//             <Text style={styles.subtitle}>
//                 Enter the 6-digit code sent to your Email
//             </Text>

//             <View style={styles.otpContainer}>
//                 {otp.map((_, index) => (
//                     <TextInput
//                         key={index}
//                         ref={(input) => (inputs[index] = input)}
//                         style={styles.otpInput}
//                         keyboardType="number-pad"
//                         maxLength={1}
//                         value={otp[index]}
//                         onChangeText={(text) => handleInputChange(text, index)}
//                     />
//                 ))}
//             </View>

//             {loading ? (<ActivityIndicator color={COLORS.blueColor} size={"large"} />) : (<TouchableOpacity
//                 style={[
//                     styles.verifyButton,
//                     otp.join("").length < 6 && styles.disabledButton,
//                 ]}
//                 onPress={verifyOtp}
//                 disabled={otp.join("").length < 6}
//             >
//                 <Text style={styles.verifyButtonText}>
//                     {isVerified ? "Verified" : "Verify"}
//                 </Text>
//             </TouchableOpacity>)}

//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//         paddingHorizontal: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 10,
//         color: "#333",
//     },
//     subtitle: {
//         fontSize: 16,
//         color: "#666",
//         marginBottom: 30,
//         textAlign: "center",
//     },
//     otpContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width: "90%",
//         marginBottom: 30,
//     },
//     otpInput: {
//         width: 45,
//         height: 50,
//         borderWidth: 1,
//         borderColor: "#ddd",
//         textAlign: "center",
//         fontSize: 18,
//         borderRadius: 8,
//         color: "#333",
//         backgroundColor: "#f9f9f9",
//     },
//     verifyButton: {
//         backgroundColor: "#0651C6",
//         paddingVertical: 12,
//         paddingHorizontal: 60,
//         borderRadius: 8,
//     },
//     disabledButton: {
//         backgroundColor: "#ccc",
//     },
//     verifyButtonText: {
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "bold",
//     },
//     resendContainer: {
//         marginTop: 20,
//     },
//     resendText: {
//         color: "#0651C6",
//         fontWeight: "500",
//     },
// });




