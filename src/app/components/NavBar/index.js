import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppContainer from '../../modules/AppContainer';
import ScanPng from '../../public/scan.png';

export default class NavBar extends AppContainer {
    constructor(props) {
        super(props);

        // ['onLeftClick',
        //     'onRightClick',
        //     'onSelectRightIcon',
        // ].forEach((method) => {
        //     this[method] = this[method].bind(this);
        // });

        // this.state = {
        //     visible: false,
        // };

    }

    render() {
        const {
            title
        } = this.props;

        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}