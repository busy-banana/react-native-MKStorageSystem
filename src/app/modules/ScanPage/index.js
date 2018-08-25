import React from 'react';
import AppContainer from '../../modules/AppContainer';
import { RNCamera } from 'react-native-camera';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Dimensions,
} from 'react-native';
const {
    width,
    height
}  = Dimensions.get('window');

export default class ScanPage extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            // scannerRunning: false,
            flashStatus: false,
        };
        
        ['onBarCodeReadCallback','changeFlashStatus'].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    static navigationOptions = {
        title: '扫一扫',
    };

    componentWillMount() {
    }

    onBarCodeReadCallback(result) {
        console.log(result)
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

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.RNCamera}
                    flashMode={this.state.flashStatus ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                    // barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
                    onBarCodeRead={this.onBarCodeReadCallback}
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
        height: 80,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    boxBetweenRectangle: {
        backgroundColor:'rgba(0,0,0,0.5)',
        width: 55,
        height: width-60,
    },
    rectangleContainer: {
        width: width-60,
        height: width-60,
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
    bottomContainer: {
        width: width,
        height: height-width+60-80,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    
});