import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    Icon
} from 'react-native-elements';
import AppContainer from '../../modules/AppContainer';

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