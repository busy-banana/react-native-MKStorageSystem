import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import AppContainer from '../../modules/AppContainer';
import {
    ListItem,
    Button,
} from 'react-native-elements';

export default class Home extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
        };
        
        ['pressListCallback',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    static navigationOptions = {
        header:null,
    };

    pressListCallback(path) {
        this.forward(path);
    }

    render() {
        const list = [
            {
                title: '工厂成品到货',
                forwardPath: 'ScanPage',
            },
            {
                title: 'RDC退货',
                forwardPath: 'ScanPage',
            },
            {
                title: '包材收货',
                forwardPath: 'ScanPage',
            },
            {
                title: 'OEM',
                forwardPath: 'ScanPage',
            },
            {
                title: '原料收货',
                forwardPath: 'ScanPage',
            },
        ];
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={{fontSize: 28,color: '#d40511'}}>RFID收货管理系统</Text>
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.subTitleText}>请选择收货入库流程</Text>
                        {
                            list.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    chevron
                                    onPress={() => this.pressListCallback(item.forwardPath)}
                                    containerStyle={styles.containerStyle}
                                    contentContainerStyle={styles.contentContainerStyle}
                                />
                            ))
                        }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        backgroundColor: '#fc0',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        marginTop: 60
    },
    containerStyle: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#d3d3d3'
    },
    contentContainerStyle: {
        // borderTopWidth: 1,
        // borderStyle: 'solid'
    },
    subTitleText: {
        paddingBottom: 10,
        fontSize: 15,
        color: '#bdbdbd',
        textAlign: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        borderStyle:'solid',
    }
});