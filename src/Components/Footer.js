import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})