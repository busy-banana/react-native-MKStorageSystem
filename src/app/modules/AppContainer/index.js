import React from 'react';
import { ToastAndroid } from 'react-native';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        ['forward',
            'goBack',
            'goHome',
            'showToast',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    showToast(content) {
        ToastAndroid.show(content, ToastAndroid.LONG, ToastAndroid.TOP);
    }

    //页面跳转-前进
    forward(path, params) {
        debugger
        let pa = {};
        if (params && Object.keys(params).length != 0) {
            Object.assign(pa, params);
        }
        this.props.navigation.navigate(path, pa);
    }

    //页面跳转-后退
    goBack() {
        this.props.navigation.goBack();
    }

    //页面跳转至首页
    goHome() {
        this.props.navigation.popToTop();
    }

    /**
     * 页面传参-获取参数
     * Object
     */
    getParam() {
        this.props.navigation.state.params();
    }
}