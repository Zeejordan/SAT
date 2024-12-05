import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EnglishQuizQuestion from '../Components/EnglishQuizQuestion';
import { ENGLISH_MODULE } from '../../config/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EnglishQuiz = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    const baseUrlGet = ENGLISH_MODULE;
    try {
      const response = await axios.get(baseUrlGet, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      console.log("yaha pe dekh", response.data)
    } catch (error) {
      console.log("An Error Occured", error)
    }
  }

  const dummyData = [
    {
      id: "1",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat id veritatis nisi beatae nobis totam quisquam saepe quaerat cupiditate cumque consequuntur mollitia recusandae autem impedit voluptates ipsum, tempore velit soluta incidunt possimus, illum esse! Omnis aut perspiciatis doloremque veniam officia reprehenderit dignissimos a numquam cupiditate aperiam ipsum, obcaecati temporibus magni voluptates ut cum, quam deserunt nobis? Harum soluta fuga sunt, est accusamus voluptas quia.",
      OptionA: "A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionB: "B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionC: "C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionD: "D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",

    },
    {
      id: "2",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat id veritatis nisi beatae nobis totam quisquam saepe quaerat cupiditate cumque consequuntur mollitia recusandae autem impedit voluptates ipsum, tempore velit soluta incidunt possimus, illum esse! Omnis aut perspiciatis doloremque veniam officia reprehenderit dignissimos a numquam cupiditate aperiam ipsum, obcaecati temporibus magni voluptates ut cum, quam deserunt nobis? Harum soluta fuga sunt, est accusamus voluptas quia.",
      OptionA: "A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionB: "B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionC: "C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionD: "D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
    },
    {
      id: "3",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat id veritatis nisi beatae nobis totam quisquam saepe quaerat cupiditate cumque consequuntur mollitia recusandae autem impedit voluptates ipsum, tempore velit soluta incidunt possimus, illum esse! Omnis aut perspiciatis doloremque veniam officia reprehenderit dignissimos a numquam cupiditate aperiam ipsum, obcaecati temporibus magni voluptates ut cum, quam deserunt nobis? Harum soluta fuga sunt, est accusamus voluptas quia.",
      OptionA: "A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionB: "B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionC: "C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionD: "D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
    },
    {
      id: "4",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat id veritatis nisi beatae nobis totam quisquam saepe quaerat cupiditate cumque consequuntur mollitia recusandae autem impedit voluptates ipsum, tempore velit soluta incidunt possimus, illum esse! Omnis aut perspiciatis doloremque veniam officia reprehenderit dignissimos a numquam cupiditate aperiam ipsum, obcaecati temporibus magni voluptates ut cum, quam deserunt nobis? Harum soluta fuga sunt, est accusamus voluptas quia.",
      OptionA: "A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionB: "B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionC: "C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
      OptionD: "D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id inventore voluptate nulla minus odit molestiae optio voluptas rem nisi!",
    }
  ];

  const renderItem = ({ item }) => {
    return (
      <EnglishQuizQuestion description={item.question} optionA={item.OptionA} optionB={item.OptionB} optionC={item.OptionC} optionD={item.OptionD} />
    )
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Unit-1 Test-1</Text>
          <Text style={styles.topText}>Questions-20</Text>
          <Text style={styles.topText}>Time-1hr30min</Text>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={dummyData}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContent}
        />


      </View>
    </SafeAreaView>
  )
}

export default EnglishQuiz

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    elevation: 5,
  },

  topText: {

  },
  flatListContent: {},
})