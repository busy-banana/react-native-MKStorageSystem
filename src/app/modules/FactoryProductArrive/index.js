import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Button,
    Icon,
    ListItem,
    Overlay,
    Input,
} from 'react-native-elements';
import AppContainer from '../../modules/AppContainer';

const {
    width,
    height
}  = Dimensions.get('window');

export default class FactoryProductArrive extends AppContainer {
    constructor(props) {
        super(props);

        this.data = {};
        this.state = {
            LPNCodeArr: [], // LPN列表扫码数组
            LPNPlaceArr: [], // LPN列表库位数组
            isVisible: false,
        };
        
        ['clickLPNListCallBack',
            'closeOverlayScreen',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
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
        // this.data.ASNResult = params.ASNScanResult;
    }

    clickLPNListCallBack(index) {
        this.setState({isVisible: true});
    }

    //关闭遮罩层
    closeOverlayScreen() {
        this.setState({isVisible: false});
    }

    //生成LPN列表
    getLPNList() {
        // const readyReceiveNum = this.data.ASNResult.readyReceiveNum;
        const readyReceiveNum = 6;
        // const {
        //     LPNCodeArr,
        //     LPNPlaceArr,
        // } = this.state;
        const LPNCodeArr = ['LBJ002917371135','LBJ002917371135','LBJ002917371135'];
        const LPNPlaceArr = ['库位1','库位2','库位3'];
        let readyReceiveArr = [];
        for (let i = 0; i < readyReceiveNum; i++) {
            readyReceiveArr.push('');
        };
        return readyReceiveArr.map((item, i) => {
            return (
                <ListItem
                    key={'LPNList-'+i}
                    title={LPNCodeArr[i] || '待扫描'}
                    subtitle='(PalletLPN码)'
                    rightTitle={LPNPlaceArr[i] || '待分配'}
                    rightSubtitle='(库位)'
                    onPress={() => this.clickLPNListCallBack(i)}
                    containerStyle={{height: 60}}
                    titleStyle={styles.LPNListTitle}
                    rightTitleStyle={styles.LPNListTitle}
                    subtitleStyle={styles.LPNListSubtitle}
                    rightSubtitleStyle={styles.LPNListSubtitle}
                    // contentContainerStyle={r{color: 'red'}}
                    // rightContentContainerStyle={{color: 'red'}}
                />
            )
        })
    }

    render() {
        const {
            isVisible
        } = this.state;
        const LPNListDOM = this.getLPNList();
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{marginTop: 10, marginBottom: 10}}>
                    <ListItem
                        key="ASN-result"
                        title="ASN扫码结果"
                        subtitle="(待收货数据/已收货数量)"
                        rightTitle="6/8"
                        titleStyle={styles.LPNListTitle}
                        rightTitleStyle={styles.LPNListTitle}
                        subtitleStyle={styles.LPNListSubtitle}
                    />
                </View>
                <ScrollView>
                    <Text style={{fontSize: 15, color: '#969696', textAlign: 'center'}}>PalletLPN列表</Text>
                    {LPNListDOM}
                    <View style={styles.bottomBtn}>
                        <Button
                            title="库位分配"
                            buttonStyle={{
                                backgroundColor: "#d40511",
                                height: 45,
                                width: 20,
                                borderColor: '#fff',
                                borderRightWidth: 2,
                                borderStyle: 'solid',
                                width: width/3-2,
                                borderRadius: 0
                            }}
                            titleStyle={{fontSize: 14}}
                            onPress={this.distributePlace}
                        />
                        <Button
                            title="扫描查询"
                            buttonStyle={{
                                backgroundColor: "#d40511",
                                height: 45,
                                borderColor: '#fff',
                                borderRightWidth: 2,
                                borderStyle: 'solid',
                                width: width/3,
                                borderRadius: 0
                            }}
                            titleStyle={{fontSize: 14}}
                            onPress={this.distributePlace}
                        />
                        <Button
                            title="收货完成"
                            buttonStyle={{
                                backgroundColor: "#d40511",
                                height: 45,
                                width: width/3-2,
                                borderRadius: 0
                            }}
                            titleStyle={{fontSize: 14}}
                            onPress={this.distributePlace}
                        />
                    </View>    
                </ScrollView>
                <Overlay
                    isVisible={isVisible}
                    windowBackgroundColor="rgba(0, 0, 0,0.7)"
                    overlayBackgroundColor='#fff'
                    width={280}
                    height={280}
                    overlayStyle={{position:'absolute', top:100}}
                    onBackdropPress={this.closeOverlayScreen}
                >
                    <View style={{alignItems: 'center'}}>
                        <Input
                            placeholder='库位1'
                            // onChangeText={this.onChangeUserName}
                            containerStyle={{marginTop: 30}}
                            // inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={{color: '#d3d3d3',fontSize: 14}}
                            selectionColor={'#d40511'}
                            editable={false}
                            leftIcon={
                                <Text style={{color: '#d3d3d3',fontSize: 13}}>库位</Text>
                            }
                        />
                        <Button
                            title="扫描LPN码"
                            titleStyle={{fontSize: 14}}
                            buttonStyle={{
                                backgroundColor: "#d40511",
                                height: 45,
                                width: 220,
                                marginTop: 50
                            }}
                        />
                        <Button
                            title="修改库位"
                            titleStyle={{fontSize: 14}}
                            buttonStyle={{
                                backgroundColor: "#d40511",
                                width: 220,
                                height: 45,
                                marginTop: 20
                            }}
                        />
                    </View>
                </Overlay>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
    },
    LPNListTitle: {
        fontSize: 15,
        color: '#333',
    },
    LPNListSubtitle: {
        fontSize: 12,
        color: '#969696'
    },
    bottomBtn: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
        // position: 'absolute',
        // bottom: 0
    },
});