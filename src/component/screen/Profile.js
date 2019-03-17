import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList } from 'react-native';
import { Button } from 'native-base'

export default class ProfileScreen extends Component {
  static navigationOptions = {
     title: 'Profile'
  }

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <SectionList
                    renderItem = {(item, index)}
                /> */}

                <Text>Details Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}