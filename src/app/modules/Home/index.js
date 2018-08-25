import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import AppContainer from '../../modules/AppContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
    ListItem,
    Button,
} from 'react-native-elements';
import Drawer from 'react-native-drawer';
import DHLLogo from '../../public/dhlLogo.png';

export default class Home extends AppContainer {
    constructor(props) {
        super(props);

        this.data = {};
        this.state = {
        };
        
        ['pressListCallback',
            'viewUserInfo',
            'openControlPanel',
            'closeControlPanel',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    static navigationOptions = {
        header:null,
    };

    componentWillMount() {
        this.getInitData();
    }

    //获取初始化数据
    getInitData() {
        const params = this.getParam() || {};
        this.data.userName = params.userName || 'test';
    }

    pressListCallback(path) {
        this.forward(path);
    }

    viewUserInfo() {
        
    }

    //关闭左侧抽屉
    closeControlPanel() {
        this._drawer.close()
    };
    
    //打开左侧抽屉
    openControlPanel() {
        this._drawer.open()
    };

    render() {
        const homeList = [
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
        //主页列表
        const homeListDOM = homeList.map((item, i) => (
            <ListItem
                key={item.title}
                title={item.title}
                chevron
                onPress={() => this.pressListCallback(item.forwardPath)}
                containerStyle={styles.containerStyle}
                contentContainerStyle={styles.contentContainerStyle}
            />
        ));
        const drawerList = [
            {
                title: '设置',
                forwardPath: '',
                leftIcon: <Feather name='settings' size={18} />,
            },
            {
                title: '个人信息',
                forwardPath: '',
                leftIcon: <Feather name='user' size={18} />,
            },
            {
                title: '退出登录',
                forwardPath: '',
                leftIcon: <Feather name='log-out' size={18} />,
            }
        ];
        //左侧抽屉列表
        const drawerListDOM = drawerList.map((item, i) => (
            <ListItem
                key={item.title}
                title={item.title}
                onPress={() => this.pressListCallback(item.forwardPath)}
                containerStyle={styles.containerStyle}
                contentContainerStyle={styles.contentContainerStyle}
                leftIcon={item.leftIcon}
            />
        ));
        const drawerPanel = (
            <View style={styles.drawerPanel}>
                <View style={{height: 160,backgroundColor: '#fc0'}}>
                <Image
                    source={DHLLogo}
                    style={styles.DHLLogo}
                /></View>
                
                <Text>{this.data.userName}</Text>
                {drawerListDOM}
            </View>
        );

        return (
            <View style={styles.container}>
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="static"
                content={drawerPanel}
                openDrawerOffset={0.3}
                tapToClose={true}
                styles={styles.drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >
                <View style={styles.titleContainer}>
                <TouchableOpacity onPress={this.openControlPanel}>
                    <Icon name="user" color="#515151" size={22}/>
                </TouchableOpacity>
                    <Text style={{fontSize: 22,color: '#d40511'}}>RFID收货管理系统</Text>
                    <Text></Text>
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.subTitleText}>请选择收货入库流程</Text>
                    {homeListDOM}
                </View>
                </Drawer>
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
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    },
    drawerStyles: {

    },
    drawerPanel: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    DHLLogo: {
        marginBottom: 50,
    },
});