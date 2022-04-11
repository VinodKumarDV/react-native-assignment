import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/Secondpage';
import ThirdPage from './pages/ThirdPage';
import Groups from './Groups';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#FF8000',
                inactiveTintColor: 'black',
                style: {
                    backgroundColor: '#f8f7eb',
                    marginBottom: 20,
                },
                labelStyle: {
                    textAlign: 'center',
                    fontWeight: 'bold',
                },
                indicatorStyle: {
                    borderBottomColor: '#FF8000',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                    tabBarLabel: 'Active',
                    // tabBarIcon: ({ color, size }) => (
                    //   <MaterialCommunityIcons name="home" color={color} size={size} />
                    // ),
                }} />
            <Tab.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    tabBarLabel: 'Inactive',
                    // tabBarIcon: ({ color, size }) => (
                    //   <MaterialCommunityIcons name="settings" color={color} size={size} />
                    // ),
                }} />
            <Tab.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    tabBarLabel: 'Request',
                    // tabBarIcon: ({ color, size }) => (
                    //   <MaterialCommunityIcons name="settings" color={color} size={size} />
                    // ),
                }} />
        </Tab.Navigator>
    );
}


function SubjectList() {
    return (
        <NavigationContainer>
            <TabStack />
        </NavigationContainer>
    );
}


// function SubjectList() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName="Active"
//                 tabBarOptions={{
//                     headerStyle: { backgroundColor: '#633689' },
//                     headerTintColor: '#fff',
//                     headerTitleStyle: { fontWeight: 'bold' }
//                 }}>
//                 <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Stack' }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

export default SubjectList;