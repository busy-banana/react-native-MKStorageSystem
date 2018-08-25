import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    findNodeHandle,
} from 'react-native';
import AppContainer from '../../modules/AppContainer';
import DHLLogo from '../../public/dhlLogo.png';
import loginBackground from '../../public/loginBackground.png';
import { BlurView } from 'react-native-blur';
import {
    Button,
    Avatar,
    Input,
} from 'react-native-elements';
const {
    width,
    height
}  = Dimensions.get('window');

export default class Login extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            viewRef: null
        };
        
        ['clickLoginBtn',
            'onChangeUserName',
            'onChangePwd',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    static navigationOptions = {
        header:null,
    };

    clickLoginBtn() {
        // if (!this.state.userName) {
        //     this.showToast('用户名不能为空');
        // } else if (!this.state.password) {
        //     this.showToast('密码不能为空');
        // } else if (this.state.userName != 'admin') {
        //     this.showToast('用户名不存在');
        // } else if (this.state.password != '123456') {
        //     this.showToast('密码错误');            
        // } else {
        //     this.forward('home');
        // }

        this.forward('home');

    }

    onChangePwd(value) {
        const password = value;
        this.setState({
            password
        });
    }

    onChangeUserName(value) {
        const userName = value;
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.loginBackground}
                    source={loginBackground}
                    onLoadEnd={this.imageLoaded.bind(this)}
                    ref={(img) => { this.backgroundImage = img}}
                />
                <BlurView
                    style={styles.loginBackground}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={12}
                />
                <View style={styles.loginContainer}>
                    <Image
                        source={DHLLogo}
                        style={styles.DHLLogo}
                    />
                    <Input
                        placeholder='请输入用户名'
                        onChangeText={this.onChangeUserName}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        selectionColor={'#d40511'}
                        leftIcon={
                            <Text style={styles.leftText}>用户名</Text>
                        }
                    />
                    <Input
                        placeholder='请输入密码'
                        containerStyle={styles.containerStyle}
                        inputStyle={styles.inputStyle}
                        selectionColor={'#d40511'}
                        inputContainerStyle={styles.inputContainerStyle}
                        secureTextEntry={true}
                        leftIcon={
                            <Text style={styles.leftText}>密码</Text>
                        }
                    />
                    <Button
                        title="登  录"
                        onPress={this.clickLoginBtn}
                        buttonStyle={styles.loginButtonStyle}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:height,
    },
    waitconfirm: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    loginBackground: {
        width: width,
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    DHLLogo: {
        marginBottom: 50,
    },
    leftText: {
        color: '#d3d3d3',
        fontSize: 16,
        width: 50,
        marginBottom: 5,
    },
    containerStyle: {
        marginTop: 10
    },
    inputContainerStyle: {
    },
    inputStyle: {
        color: '#d3d3d3',
        fontSize: 16,
    },
    loginButtonStyle: {
        backgroundColor: '#d40511',
        marginTop: 100,
        width: width*0.8,
    }
});