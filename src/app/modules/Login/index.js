import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import AppContainer from '../../modules/AppContainer';
import DHLLogo from '../../public/dhlLogo.png';
import loginBackground from '../../public/loginBackground.png';
import {
    Button,
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
            userName: 'admin',
            password: '123456',
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

    componentWillMount() {
        this.initApp();
    }

    //初始化app
    initApp() {
        
    }

    clickLoginBtn() {
        if (!this.state.userName) {
            this.showToast('用户名不能为空');
        } else if (!this.state.password) {
            this.showToast('密码不能为空');
        } else if (this.state.userName != 'admin') {
            this.showToast('用户名不存在');
        } else if (this.state.password != '123456') {
            this.showToast('密码错误');            
        } else {
            this.replace('Home',{
                userName: this.state.userName
            });
        }
    }

    onChangePwd(value) {
        const password = value;
        this.setState({
            password
        });
    }

    onChangeUserName(value) {
        const userName = value;
        this.setState({
            userName
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.loginBackground}
                    source={loginBackground}
                    blurRadius={3}
                />
                <View style={styles.loginContainer}>
                    <Image
                        source={DHLLogo}
                        style={styles.DHLLogo}
                    />
                    <Input
                        // placeholder='请输入用户名'
                        placeholder='admin'
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
                        // placeholder='请输入密码'
                        placeholder='******'
                        onChangeText={this.onChangePwd}
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
                    {/* <Text style={styles.bottomTips}>v1.0.0</Text> */}
                    {/* <Text style={styles.bottomTips}>Copyright © 2018</Text> */}
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
        height:50,
    },
    bottomTips: {
        color: '#737373',
    }
});