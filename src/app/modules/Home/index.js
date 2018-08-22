// import React from 'react';
// import { Drawer, List, Icon,Button } from 'antd-mobile';
// import AppContainer from '../../modules/AppContainer';
// import './style.css';

// export default class Home extends AppContainer {
//     constructor(props) {
//         super(props);


//         ['goGCDH',
//         ].forEach((method) => {
//             this[method] = this[method].bind(this);
//         });
//     }

//     goGCDH() {
//         this.forward('factoryProductArrive');
//     }

//     render() {
//         const Item = List.Item;

//         return (
//             <div className="home-container">
//                 <p className="home-title">RFID收货管理系统</p>
//                 <p className="home-list-tips">请选择收货入库流程</p>
//                 <List>
//                     <Item
//                         onClick={this.goGCDH}
//                         className="home-list-item"
//                         arrow="horizontal"
//                     >
//                         <p className="home-list-text">工厂成品到货</p>
//                     </Item>
//                     <Item
//                         onClick={() => {}}
//                         className="home-list-item"
//                         arrow="horizontal"
//                     >
//                         <p className="home-list-text">RDC退货</p>
//                     </Item>
//                     <Item
//                         onClick={() => {}}
//                         className="home-list-item"
//                         arrow="horizontal"
//                     >
//                         <p className="home-list-text">包材收货</p>
//                     </Item>
//                     <Item
//                         onClick={() => {}}
//                         className="home-list-item"
//                         arrow="horizontal"
//                     >
//                         <p className="home-list-text">OEM</p>
//                     </Item>
//                     <Item
//                         onClick={() => {}}
//                         className="home-list-item"
//                         arrow="horizontal"
//                     >
//                         <p className="home-list-text">原料收货</p>
//                     </Item>
//                 </List>
//             </div>
//         )
//     }
// }