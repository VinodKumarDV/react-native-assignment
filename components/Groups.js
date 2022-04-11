import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import SubjectList from './SubjectList';


const Groups = () => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="bar-chart-2" size={40} color={'#4C0B5F'} style={{ transform: [{ rotate: '90deg' }] }} />
          <Text style={styles.text1}>NDPS</Text>
      </View>
        <SubjectList />
    </View>
  )
}

export default Groups

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7eb',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 16,
    alignItems: 'center',
    backgroundColor: '#f1da99'
  },
  text1: {
    color: '#4C0B5F',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5
  },
})