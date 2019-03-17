import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import HomeScreen from './Home'
import ProfileScreen from './Profile'
// import {SelectionList} from '../../common/SelectionList'

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Home',
       defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: 'darkgreen'
         }, 
         headerTintColor: 'white',
         headerTitleStyle: {
             textAlign: 'center',
             flex: 1
         }
        
       }
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}