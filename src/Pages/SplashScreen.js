import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, FONTS } from '../theme';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    const handleEntry = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[COLORS.linearGradientColor1, COLORS.linearGradientColor2]}
                style={styles.gradientContainer}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <View style={styles.Container}>
                    <View style={styles.imageContainer}>
                        <View style={styles.globeContainer}>
                            <FastImage
                                source={require('../../assets/images/globe.gif')}
                                style={styles.globeImage}
                            />
                        </View>

                        <View style={styles.booksContainer}>
                            <FastImage
                                source={require('../../assets/images/books.gif')}
                                style={styles.booksImage}
                            />
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>Welcome to <Text style={styles.satText}>SAT exam Preparation!</Text></Text>
                        <Text style={styles.playText}>Play, Learn, and Explore with Exciting{'\n'}Quizzes?</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleEntry}>
                        <Text style={styles.getText}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    gradientContainer: {
        flex: 1,
    },
    Container: {
        flex: 1,
        // backgroundColor: 'pink',
        padding: hp('3%')
    },
    imageContainer: {
        gap: hp('4%'),
        marginTop: hp('4%')
    },
    globeContainer: {
        justifyContent: 'center',
        alignItems: "center",

    },
    globeImage: {
        width: hp('23%'),
        height: hp('23%'),
        marginBottom: 10,
    },
    booksContainer: {
        justifyContent: 'center',
        alignItems: "center",
        height: hp('22%')
    },
    booksImage: {
        width: wp('35%'),
        height: hp('35%'),
        marginBottom: 20,
    },
    textContainer: {
        marginTop: hp('7%'),
        gap: hp('2%')
    },
    welcomeText: {
        color: 'white',
        fontSize: hp('2%'),
        textAlign: 'center'
    },
    playText: {
        color: 'white',
        fontSize: hp('1.9%'),
        textAlign: 'center'
    },
    satText: {
        fontWeight: 600,
        fontSize: hp('2.5%')
    },
    buttonContainer: {
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: wp('3%'),
        paddingVertical: hp('2%'),
        marginTop: hp('7%'),
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        elevation: 5
    },
    getText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: hp('2%'),
    },
});
