import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    Button,
    Icon,
} from 'react-native-elements';
import AppContainer from '../../modules/AppContainer';


export default class FactoryProductArrive extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
        };
        
        ['onBack',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    static navigationOptions = {
        title: '工厂成品到货',
        headerLeft: (
            <Icon
                name='arrow-left'
                type='material-community'
                size={22}
                color='#d40511'
                containerStyle={{paddingLeft: 16}}
                onPress={() => this.onBack.bind(this)}
            >
            </Icon>
        ),
    }

    componentWillMount() {
        this.getInitData();
        
    }

    getInitData() {
        const params = this.getParam() || {};
    }

    //监听返回事件，需弹框让用户确认
    onBack() {
        this.showToast('123')
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