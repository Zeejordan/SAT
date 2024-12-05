import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { COLORS, FONTS } from '../theme';

const TestQuestion = () => {
    
    const progress = 0.6
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[COLORS.linearGradientColor1, COLORS.linearGradientColor2]}
                style={styles.gradientContainer}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}>

                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <Progress.Bar progress={progress} style={styles.progressBar} useNativeDriver={true}/>

                        <View style={styles.heartAndScore}>
                            <Image
                                source={require('../../assets/images/heart.png')}
                                style={styles.heartImage}
                            />
                            <Text style={styles.score}>10</Text>
                        </View>
                    </View>

                    <View style={styles.speakerContainer}>
                        <Image
                            source={require('../../assets/images/speaker.png')}
                            style={styles.speaker}
                        />
                    </View>

                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>What is the value of xxx in the equation 3x-7=113x-7={'\n'}113x-7=11?</Text>
                    </View>

                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.singleOption}>
                            <Text style={styles.optionText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singleOption}>
                            <Text style={styles.optionText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singleOption}>
                            <Text style={styles.optionText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singleOption}>
                            <Text style={styles.optionText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </SafeAreaView>
    )
}

export default TestQuestion

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    gradientContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: wp('4%')
    },
    heartImage: {
        height: hp('2.3%'),
        width: hp('2.3%')
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        marginTop: hp('4.5%')
    },
    progressBar:{
        width:150,
        height:8,
        backgroundColor:'white'
    },
    heartAndScore: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:wp('1%')
    },
    score: {
        color: 'white',
        fontSize:hp('2%')
    },
    speaker: {
        height: hp('3%'),
        width: hp('3%')
    },
    speakerContainer: {
        marginTop: hp('2%')
    },
    questionText: {
        color: 'white',
        fontSize: hp('2.5%')

    },
    questionContainer: {
        marginTop: hp('5%'),
    },
    optionsContainer: {
        flexDirection: 'column',
        gap: hp('2.8%'),
        marginTop: hp('3.5%')
    },
    singleOption: {
        backgroundColor: 'white',
        paddingVertical: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 7,
        marginHorizontal: wp('3.5%')
    },
    optionText: {
        fontSize: hp('3%'),
        fontWeight: '600',
    },
    continueButton: {
        backgroundColor: 'white',
        paddingVertical: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 7,
        marginHorizontal: wp('3.5%'),
        marginTop: hp('13%'),
        elevation: 10

    },
    continueText: {
        color: COLORS.lightText,
        textAlign: 'center',
        fontSize: hp('3%'),
        fontWeight: '600'
    }
})