import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import AppContainer from '../../modules/AppContainer';

export default class FactoryProductArrive extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
        };
        
        // ['clickLoginBtn',
        //     'onChangeUserName',
        //     'onChangePwd'
        // ].forEach((method) => {
        //     this[method] = this[method].bind(this);
        // });
    }

    static navigationOptions = {
        title: '工厂成品到货',
    }

    componentWillMount() {
        this.getInitData();
    }

    getInitData() {
        const params = this.getParam() || {};
    }

    render() {
    
        return (
            <View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

});