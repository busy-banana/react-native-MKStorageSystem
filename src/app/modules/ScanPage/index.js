import React from 'react';
import AppContainer from '../../modules/AppContainer';
import { RNCamera } from 'react-native-camera';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScanLine from '../../public/scan_line.png';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert,
    Animated,
    Image,
    Easing,
} from 'react-native';
const {
    width,
    height
}  = Dimensions.get('window');

export default class ScanPage extends AppContainer {
    constructor(props) {
        super(props);

        this.data = {};
        this.state = {
            scannerStatus: true,
            flashStatus: false,
            scanResultCode: '',
            scanLineHeight: new Animated.Value(5), //扫描线动画高度初始值
        };
        
        ['onBarCodeReadCallback',
            'changeFlashStatus',
            'confirmScan',
            'restartScan',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('scanTitle', '扫一扫'),
        }
    }

    componentWillMount() {
        this.getInitData();
    }

    getInitData() {
        const params = this.getParam() || {};
        this.data.nextPath = params.nextPath;
    }

    componentDidMount() {
        this.startScanLineAnimated();
    }

    //启动扫描线动画
    startScanLineAnimated() {
        if (this.state.scannerStatus) {
            Animated.timing(
                this.state.scanLineHeight,
                {
                toValue: width-85,
                duration: 2000,
                easing: Easing.linear,
                }
            ).start(() => {
                this.state.scanLineHeight.setValue(5)
                this.startScanLineAnimated();
            });
        } else {
            return;
        }
    }

    //扫码成功回调函数
    onBarCodeReadCallback(result) {
        if (result.data) {
            this.setState({
                scannerStatus: false
            });
            Alert.alert(
                '请确认条码是否正确', result.data,
                [
                    {text: '重新扫描', onPress: () => this.restartScan()},
                    {text: '确定', onPress: () => this.confirmScan(result)},
                ],
                { cancelable: false }
            );
        }
    }

    //确认扫描结果正确
    confirmScan(result) {
        if (this.data.nextPath == 'FactoryProductArrive') {
            this.replace('FactoryProductArrive')
        } else {
            this.setState({
                scanResultCode: result.data,
                scannerStatus: true
            });
        }
    }

    //扫描有误，重新扫描
    restartScan() {
        this.setState({scannerStatus: true})
    }

    changeFlashStatus() {
        this.setState({
            flashStatus: !this.state.flashStatus,
        });
    }
    
    render() {
        // const PendingView = (
        //     <View
        //         style={styles.pendingViewStyle}
        //     >
        //         <Text>准备中，请确认已开启摄像头权限。</Text>
        //     </View>
        // );
        const {
            scanResultCode,
            flashStatus,
            scannerStatus,
            scanLineHeight,
        } = this.state;

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.RNCamera}
                    flashMode={flashStatus ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                    // barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
                    onBarCodeRead={scannerStatus ? this.onBarCodeReadCallback : null}
                    // ratio={}
                    // barcodeScannerEnabled={true}
                    // aspect={Camera.constants.Aspect.fill}
                    // aspect={RNCamera.constants.Aspect.fill}
                    permissionDialogTitle={'提示'}
                    permissionDialogMessage={'请开启摄像头权限'}
                >
                        <View style={styles.topContainer}></View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.boxBetweenRectangle}></View>

                            <View style={styles.rectangleContainer}>
                                <Animated.View style={{position: 'absolute',top: scanLineHeight}}>
                                    <Image source = {ScanLine} style={{width: width-80}}/>
                                </Animated.View>
                                <View style={styles.rectangleTopLeft}></View>
                                <View style={styles.rectangleTopRight}></View>
                                <View style={styles.rectangleBottomLeft}></View>
                                <View style={styles.rectangleBottomRight}></View>
                            </View>
                            <View style={styles.boxBetweenRectangle}></View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <TouchableOpacity onPress={this.changeFlashStatus}>
                                <View style={styles.flash}>
                                    <Icon name="flashlight" size={30} color='#fff'></Icon>
                                    <Text style={styles.text}>
                                        手电筒
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </RNCamera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    RNCamera: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width,
        height: height,
    },
    topContainer: {
        width: width,
        height: 100,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    bottomContainer: {
        width: width,
        height: height-width+80-50,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boxBetweenRectangle: {
        backgroundColor:'rgba(0,0,0,0.5)',
        width: 40,
        height: width-80,
    },
    rectangleContainer: {
        width: width-80,
        height: width-80,
        backgroundColor: 'transparent',
    },
    rectangleTopLeft: {
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#fc0',
        width: 40,
        height: 40,
    },
    rectangleTopRight: {
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: '#fc0',
        width: 40,
        height: 40,
        position: 'absolute',
        right: 0,
        top: 0
    },
    rectangleBottomLeft: {
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#fc0',
        width: 40,
        height: 40,
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    rectangleBottomRight: {
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderColor: '#fc0',
        width: 40,
        height: 40,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    text: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
    flash: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    pendingViewStyle: {
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanLineAnimated: {

    }
});