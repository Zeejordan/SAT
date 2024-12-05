import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';


// stop stop stop stop 
const EnglishQuizQuestion = ({ description, optionA, optionB, optionC, optionD }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.questionHeading}>
                <Text style={styles.questionText}>Question - 1</Text>
                <TouchableOpacity>
                    <Octicons name='info' color="black" style={styles.infoIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.questionDescription}>
                <Text style={styles.questionDescriptionText}>{description}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.navigateButton}>
                    <Text style={styles.navigateText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigateButton}>
                    <Text style={styles.navigateText}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.optionContainer}>
                <View style={styles.optionBox}>
                    <Text style={styles.optionText}>{optionA}</Text>
                </View>
                <View style={styles.optionBox}>
                    <Text style={styles.optionText}>{optionB}</Text>
                </View>
                <View style={styles.optionBox}>
                    <Text style={styles.optionText}>{optionC}</Text>
                </View>
                <View style={styles.optionBox}>
                    <Text style={styles.optionText}>{optionD}</Text>
                </View>
            </View>

            <View style={styles.submit}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EnglishQuizQuestion

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    questionHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "transparent",
        // paddingVertical: hp('1%'),
        paddingHorizontal: wp('3%'),
        marginTop: hp('2%'),

    },
    questionText: {
        fontSize: hp('2.5%'),
        fontWeight: '600'
    },
    infoIcon: {
        fontSize: hp('2.6%')
    },
    questionDescription: {
        borderWidth: 1,
        borderColor: '#888888',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('6%'),
        marginTop: hp('2%'),
    },
    questionDescriptionText: {
        fontWeight: '500',
        fontSize: hp('1.8%')
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    navigateButton: {
        backgroundColor: "#0470B8",
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('3%'),
        marginTop: hp('1.5%'),
        borderRadius: 10,
        width: hp("15%"),
        height: hp("5%"),
    },
    navigateText: {
        fontSize: hp('2.2%'),
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: '700'
    },
    optionContainer: {
        marginTop: hp('3%'),
        flexDirection: 'column',
        gap: hp('2%'),
    },
    optionBox: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        borderColor: '#D9D9D9',
        backgroundColor: '#fff',
        elevation: 5
    },
    optionText: {
        fontWeight: '500',
        fontSize: hp('1.8%'),
        color: '#7C7C7C',
    },
    submit: {

    },
    submitText: {
        textAlign: "center",
        fontSize: hp('2.5%'),
        color: "#0470B8",
        fontWeight: '600'
    },
    submitButton: {
        backgroundColor: "#C5E6FD",
        marginVertical: hp('4%'),
        paddingVertical: hp('1.8%'),
        marginHorizontal: wp('20%'),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        elevation: 5

    },
})