import React from 'react';
// import NavBars from '../../components/NavBars';
import AppContainer from '../../modules/AppContainer';
import { RNCamera } from 'react-native-camera';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ScanPage extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            // scannerRunning: false,
        };
        
        // ['onBarCodeReadCallback'].forEach((method) => {
        //     this[method] = this[method].bind(this);
        // });
    }

    componentWillMount() {
    }

    onBarCodeReadCallback(data) {
        this.showToast('扫码结果：'+data)
    }

    takePicture = async function() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                    this.camera = ref;
                    }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                    onBarCodeRead={this.onBarCodeReadCallback.bind(this)}
                    permissionDialogTitle={'提示'}
                    permissionDialogMessage={'请开启摄像头权限'}
                />
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style = {styles.capture}
                >
                    <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
        preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
        capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
});