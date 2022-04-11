// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, } from 'react-native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const FirstPage = ({ navigation }) => {
    const [items, setItems] = React.useState([
        {id: 1,  swc: 'Maths class 6th A', ts: 5, gc: 5478,},
        {id: 2,  swc: 'Maths class 7th B', ts: 4, gc: 5478,},
        { id: 3, swc: 'Maths class 6th C', ts: 0, gc: 5478,},
    ]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f7eb' }}>
            <View>
                <FlatList
                    itemDimension={80}
                    showsVerticalScrollIndicator={false}
                    data={items}
                    style={styles.gridView}
                    key={items.id}
                    spacing={10}
                    renderItem={({ item }) => (
                        <View style={styles.main}>
                                <View style={styles.que}>
                                <Text style={styles.itemName}>{item.swc}</Text>
                                <Text style={styles.wbnote}>{item.id + 2}</Text>
                                <SimpleLineIcons name="options-vertical" size={12} color={'black'} style={styles.ico} />
                                </View>
                            <Text style={styles.gname}><Text style={styles.heading}>Groupe Code: </Text>{item.gc}</Text>
                                {item.ts > 0 && <Text style={styles.name}><Text style={styles.heading}>Total Students: </Text>{item.ts}</Text>}
                                
                            {item.ts === 0 && <Text style={styles.errormgs}>No Students Yet </Text>}
                            {item.ts === 0 && <Text style={styles.errorlink}>Click here to share the link.</Text>}

                                
                                
                        </View>
                    )}
                />
                <View style={styles.button}>
                    <Text style={styles.bt2}>Homework</Text>
                    <AntDesign name="arrowright" size={22} color={'#4C0B5F'} style={styles.bico} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        margin: 15,
        marginBottom: 5,
        borderRadius: 7,
        height: 100,
        backgroundColor: 'white',
        
    },
    itemName: {
        fontSize: 20,
        marginLeft: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    heading: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D3D3D3',
    },
    ico: {
        marginLeft: 100,
        marginTop: 10
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
        width: '100%'
    },
    que: {
        marginTop: 10,
        flexDirection: 'row'
    },
    gname: {
        marginTop: 10,
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
        width: '100%'
    },
    wbnote: {
        backgroundColor: '#FFBF00',
        fontSize: 10,
        color: 'white',
        width: 25,
        height: 25,
        paddingTop: 4,
        borderRadius: 12.5,
        textAlign: 'center',
        marginLeft: '10%',
        marginTop: -5,
    },
    errorlink: {
        marginLeft: 10,
        fontSize: 10,
        color: '#045F5F',
        fontWeight: 'bold',
        borderBottomColor: '#045F5F',
        borderBottomWidth: 2,
        width: 125,
        marginTop: -16,
        marginLeft: '28%',
        height: 14,
    },
    errormgs: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D3D3D3',
    },
    button: {
        width: '90%',
        marginTop: 150,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#045F5F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '5%',
        padding: 15
    },
    bt2: {
        color: 'white',
        fontSize: 25,
        marginTop: -2,
        marginLeft: 10,
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
});
export default FirstPage;