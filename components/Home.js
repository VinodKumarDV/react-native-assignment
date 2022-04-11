import { View, Text, StyleSheet, FlatList, Image, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';


const purple = "#4C0B5F";
const size = 34;
const image = require('../images/bg.png')

const IMAGES = {
    image1: require('../images/maths.jpg'),
    image2: require('../images/scince.jpg'),
    image3: require('../images/ss.jpg'),
}

const Home = () => {
    const [items, setItems] = React.useState([
        { id: 1,  que: '17 Questions',name: 'Maths', image: IMAGES.image1 },
        { id: 2,  que: '15 Questions',name: 'Science', image: IMAGES.image2 },
        { id: 3,  que: '15 Questions',name: 'Social Science', image: IMAGES.image3 },
        { id: 4,  que: '17 Questions',name: 'Maths', image: IMAGES.image1 },
        { id: 5,  que: '15 Questions',name: 'Science', image: IMAGES.image2 },
        { id: 6,  que: '15 Questions',name: 'Social Science', image: IMAGES.image3 },
        { id: 7,  que: '17 Questions',name: 'Maths', image: IMAGES.image1 },
        { id: 8,  que: '15 Questions',name: 'Science', image: IMAGES.image2 },
        { id: 9,  que: '15 Questions',name: 'Social Science', image: IMAGES.image3 },
        { id: 10, que: '17 Questions', name: 'Maths', image: IMAGES.image1 },
        { id: 11, que: '15 Questions', name: 'Science', image: IMAGES.image2 },
        { id: 12, que: '15 Questions', name: 'Social Science', image: IMAGES.image3 },
        { id: 13, que: '17 Questions', name: 'Maths', image: IMAGES.image1 },
        { id: 14, que: '15 Questions', name: 'Science', image: IMAGES.image2 },
        { id: 15, que: '15 Questions', name: 'Social Science', image: IMAGES.image3 },
        { id: 16, que: '17 Questions', name: 'Maths', image: IMAGES.image1 },
        { id: 17, que: '15 Questions', name: 'Science', image: IMAGES.image2 },
        { id: 18, que: '15 Questions', name: 'Social Science', image: IMAGES.image3 },
        { id: 19, que: '17 Questions', name: 'Maths', image: IMAGES.image1 },
        { id: 20, que: '15 Questions', name: 'Science', image: IMAGES.image2 },
        { id: 21, que: '15 Questions', name: 'Social Science', image: IMAGES.image3 },
    ]);
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Feather name="bar-chart-2" size={40} color={purple} style={{ transform: [{ rotate: '90deg' }] }} />
        </View>
        <View style={styles.headertext}>
            <Text style={styles.text1}>NDPS</Text>
            <Text style={styles.text2}>Switch Account</Text>
        </View>
              <Image
              style={styles.coverImage}
              source={image}
              />    
        <View style={styles.welcome}>
            <Text style={styles.wt1}>Welcome</Text>
            <Text style={styles.wt2}>Amrita!</Text>
          </View>
          <Text style={styles.p1}>Create questions & Assign HW to students</Text>
          <View style={styles.para}>
            <Text style={styles.p2}>by creating groupe</Text>
            <Text style={styles.p3}>how it works</Text>
              <AntDesign name="arrowright" size={16} color={'#0B610B'} style={{padding: 3}} />
          </View>
          <View style={styles.button}>
              <Text style={styles.bt1}>Assign{'\n'}<Text style={styles.bt2}>Homework</Text></Text> 
              <AntDesign name="arrowright" size={22} color={'#4C0B5F'} style={styles.bico} />
          </View>
          <Text style={styles.h1}>Homework</Text>
          <View style={styles.homeworkrow}>
            <View style={styles.wbutton1}>
                <Text style={styles.wbn}>1{'\n'}<Text style={styles.wbt}>Open</Text></Text>
                  <AntDesign name="arrowright" size={22} color={'#4C0B5F'} style={styles.bico} />
                  <Fontisto name="minus-a" size={40} color={'#D3D3D3'} style={{ marginLeft: -80, marginRight: -36, transform: [{ rotate: '90deg' }] }} />
              </View>
            <View style={styles.wbutton2}>
                <Text style={styles.wbn}>1{'\n'}<Text style={styles.wbt}>Pending for{'\n'}Checking</Text></Text>
                <AntDesign name="arrowright" size={22} color={'#4C0B5F'} style={styles.bico} />
                  <Text style={styles.wbnote}>1</Text>
            </View>
          </View>
          <View style={styles.homeworkrow}>
              <Text style={styles.h1}>Subject{'\n'}<Text style={styles.p1}>Click on the subjects to assign Homework</Text></Text>
              <AntDesign name="filter" size={20} color={'#045F5F'} style={styles.filterico} />
              <Text style={styles.filtertxt}>Filter</Text>
          </View>
          <View style={styles.homeworkassign}>
              <Text style={styles.class}>6th</Text>
              <Text style={styles.seeall}>See All</Text>
          </View>
          <View>
              <FlatList
                  itemDimension={80}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={items}
                  style={styles.gridView}
                  key={items.id}
                  spacing={10}
                  renderItem={({ item }) => (
                      <View>
                          <ImageBackground
                              style={styles.itemPhoto}
                              source={item.image}>
                              <View style={styles.que}>
                                  <Text style={styles.name}>{item.que}</Text>
                              </View>
                              <Text style={styles.itemName}>{item.name}</Text></ImageBackground>
                      </View>
                  )}
              />
          </View>
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F8E0F7',
        backgroundColor: '#f8f7eb',
    },
    header: {
        flexDirection: 'row',
        marginTop: 35,
        paddingLeft: 16,
        
    },
    headertext: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -35
    },
    text1: {
        color: '#4C0B5F',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingLeft: 70,
    },
    text2: {
        color: '#045F5F',
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 10
    },
    welcome: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -110
    },
    wt1: {
        color: '#4C0B5F',
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 5
    },
    wt2: {
        color: '#4C0B5F',
        fontSize: 20,
        fontWeight: 'bold',
    },
    coverImage: {
        width: 170,
        height: 102,
        marginLeft: 218,
        marginTop: 40
    },
    para: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    p1: {
        fontSize: 13,
        fontWeight: '100',
        color: 'black',
        paddingLeft: 20,
        marginTop: 15
    },
    p2: {
        fontSize: 12,
        color: 'black',
        paddingLeft: 20,
    },
    p3: {
        fontSize: 12,
        color: '#045F5F',
        marginLeft: 4,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#045F5F'
    },
    button: {
        width: '90%',
        marginTop: 28,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#045F5F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '5%',
        padding: 15
    },
    bt1: {
        color: 'white',
        fontSize: 20,
        marginTop: -5
    },
    bt2: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500'
    },
    bico: {
        backgroundColor: '#F3E2A9',
        width: 35,
        height: 35,
        borderRadius: 18,
        paddingLeft: 6,
        paddingTop: 6,
    },
    h1: {
        color: '#4C0B5F',
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 20,
        marginTop: 20
    },
    homeworkrow: {
        flexDirection: 'row'
    },
    wbutton1: {
        width: '45%',
        marginTop: 10,
        height: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '5%',
        padding: 15,
        elevation: 10,
        shadowColor: 'black'
    },
    wbutton2: {
        width: '45%',
        marginTop: 10,
        height: 100,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        elevation: 10,
        shadowColor: 'black'
    },
    wbn: {
        color: '#4C0B5F',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -5,
    },
    wbt: {
        color: '#4C0B5F',
        fontSize: 15,
        fontWeight: '500'
    },
    wbnote: {
        backgroundColor: '#FFBF00',
        fontSize: 10,
        width: 15,
        height: 15,
        borderRadius: 7.5,
        textAlign: 'center',
        marginLeft: -45,
        marginTop: -30
    },
    filterico: {
        marginTop: 29,
        marginLeft: '13%',
    },
    filtertxt: {
        fontSize: 15,
        color: '#045F5F',
        marginTop: 28,
    },
    homeworkassign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    class: {
        color: '#4C0B5F',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        borderBottomWidth: 4,
        borderRadius: 2,
        borderBottomColor: '#4C0B5F'

    },
    seeall: {
        color: '#045F5F',
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 25
    },
    gridView: {
        margin: 10,
    },
    itemPhoto: {
        borderRadius: 5,
        margin: 5,
        height: 150,
        width: 150,
    },
    itemName: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 80,
        color: 'black',
        fontWeight: 'bold',
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        width: '100%'
    },
    que: {
        width: 90,
        backgroundColor: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 10,
        borderRadius: 15,
        marginTop: 10
    }
});
 