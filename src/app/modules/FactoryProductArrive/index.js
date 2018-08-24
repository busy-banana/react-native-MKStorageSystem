// import React from 'react';
// import {List, Icon, Button, InputItem } from 'antd-mobile';
// import NavBar from '../../components/NavBar';
// import AppContainer from '../../modules/AppContainer';
// import './style.css';

// export default class FactoryProductArrive extends AppContainer {
//     constructor(props) {
//         super(props);

//         this.state = {
//         };
        
//         // ['clickLoginBtn',
//         //     'onChangeUserName',
//         //     'onChangePwd'
//         // ].forEach((method) => {
//         //     this[method] = this[method].bind(this);
//         // });
//     }

//     render() {
//         const Item = List.Item;
//         const Brief = Item.Brief;
//         const ASNScanResult = '0/10';
//         const PalletLPNList = 'PalletLPN列表';
    
//         return (
//             <div className="productArrive-container">
//                 <NavBar title="工厂成品到货" />
//                 <List className="ASNScan-result">
//                     <Item multipleLine extra={ASNScanResult}>
//                         ASN扫码结果
//                         <Brief>(待收货数量/已收货数量)</Brief>
//                     </Item>
//                 </List>
//                 <p className="productArrive-list-title">PalletLPN列表</p>

//                 {PalletLPNList}

//             </div>
//         )
//     }
// }