import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
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
        
        // ['onBack',
        // ].forEach((method) => {
        //     this[method] = this[method].bind(this);
        // });
    }

    /*
     *  后期不用该方法，封装一个navbar组件在页面使用 
     */
    static navigationOptions = ({navigation}) => {
        return {
            title: '工厂成品到货',
            headerLeft: (
                <Icon
                    name='arrow-left'
                    type='material-community'
                    size={22}
                    color='#d40511'
                    containerStyle={{paddingLeft: 16}}
                    underlayColor='#fc0'
                    onPress={() => {
                        Alert.alert(
                            '', '请确认流程是否完成',
                            [
                                {text: '未完成', onPress: () => {}},
                                {text: '已完成', onPress: () => navigation.goBack()},
                            ],
                            { cancelable: false }
                        );
                    }}
                >
                </Icon>
            )
        }
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