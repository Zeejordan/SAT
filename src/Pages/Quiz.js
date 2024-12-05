import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";

const Quiz = ({ navigation }) => {

    const data = [
        {
            id: '#0001',
            title: 'SAT Test 1',
            time: '1hr 30min',
            status: 'Incomplete',
            section: 'Section-3',
            testDetails: "Test Details - Math's , English (reading - writing)"
        },
        {
            id: '#0002',
            title: 'SAT Test 2',
            time: '1hr 30min',
            status: 'Incomplete',
            section: 'Section-2',
            testDetails: "Test Details - Math's , English (reading - writing)"
        },
        {
            id: '#0003',
            title: 'SAT Test 1',
            time: '1hr 30min',
            status: 'Incomplete',
            section: 'Section-3',
            testDetails: "Test Details - Math's , English (reading - writing)"
        },
        {
            id: '#0004',
            title: 'PSAT Test 1',
            time: '1hr 30min',
            status: 'Incomplete',
            section: 'Section-4',
            testDetails: "Test Details - Math's , English (reading - writing)"
        },
        {
            id: '#0005',
            title: 'PSAT Test 1',
            time: '1hr 30min',
            status: 'Incomplete',
            section: 'Section-4',
            testDetails: "Test Details - Math's , English (reading - writing)"
        },
    ];

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleNavigation = () => {
        navigation.navigate('English-Quiz');
    };
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.singleList} onPress={toggleModal}>
                <View style={styles.firstBox}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View style={styles.time}>
                        <MaterialCommunityIcons name="timer" color={"grey"} size={17} />
                        <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                </View>
                <View style={styles.secondBox}>
                    <Text style={styles.idText}>{item.id}</Text>
                    <Text style={styles.sectionText}>{item.section}</Text>
                    <Text style={styles.blankText}></Text>
                </View>
                <View style={styles.hr} />
                <View>
                    <Text style={styles.detailsText}>{item.testDetails}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (

        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text style={styles.quizText}>Quiz</Text>
                    <View style={styles.leftSubBar}>
                        <TouchableOpacity>
                            <AntDesign name='filter' color="grey" style={styles.filterIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Octicons name='info' color="black" style={styles.infoIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.flatListContent}
                />

                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.topBarModal}>
                            <Text style={styles.testText}>Test Instructions</Text>
                            <TouchableOpacity onPress={toggleModal}><Text>❌</Text></TouchableOpacity>
                        </View>
                        <View style={styles.instructionsContainer}>
                            <TouchableOpacity onPress={handleNavigation}>
                                <Text>continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>
        </SafeAreaView>
    )
}

export default Quiz

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 15
    },
    topBar: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent: 'space-between'
    },
    leftSubBar: {
        flexDirection: "row",
        gap: wp('2%'),
        justifyContent: "center",
        alignItems: 'center'
    },
    quizText: {
        color: '#46557B',
        fontSize: hp('3.4%'),
        fontWeight: '600'
    },
    filterIcon: {
        fontSize: hp('2.5%'),
    },
    infoIcon: {
        fontSize: hp('2.5%'),
    },
    secondContainer: {

    },
    flatListContent: {
        marginTop: hp('3%'),
        flexDirection: 'column',
        gap: 20
    },
    time: {
        // color: '#ED2024'
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusContainer: {
        borderWidth: 1,
        borderColor: "#ED2024",
        borderRadius: 10,
        paddingHorizontal: wp('2%'),
        backgroundColor: '#FC9C99'
    },
    firstBox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent: 'space-between',
        marginBottom: hp('1%')
    },
    statusText: {
        color: '#ED2024',
        fontWeight: '600',

    },
    timeText: {
        color: 'grey',
        fontSize: hp('1.6%')
    },
    singleList: {
        borderWidth: 2,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },  // Only vertical shadow
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
        borderColor: '#ECECEC'

    },
    secondBox: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent: 'space-between',
    },
    hr: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: '100%',
    },
    titleText: {
        fontSize: hp('2%'),
        fontWeight: '600'
    },
    detailsText: {
        color: '#5D5D5D'
    },
    idText: {
        color: '#737373',
        fontSize: hp('1.6%')
    },
    sectionText: {
        color: '#737373',
        fontSize: hp('1.6%')
    },
    blankText: {
        paddingHorizontal: wp('2%'),
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#FC9C99',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
    },
    modalContainer: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 8,
        margin: 10
    },
    topBarModal: {
        flexDirection: 'row',
        gap: wp('50%'),
        marginTop: hp('1%'),
        paddingHorizontal: wp('1%')
    },
    instructionsContainer: {
        marginTop: hp('2%')
    },
    testText: {
        fontSize: hp('2%'),
        // padding: 5
    }
})
//5d5d5d