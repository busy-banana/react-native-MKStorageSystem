// import React from 'react';
// import { NavBar, Icon, Popover, Button } from 'antd-mobile';
// import AppContainer from '../../modules/AppContainer';
// import ScanPng from '../../public/scan.png';
// import './style.css';

// export default class NavBars extends AppContainer {
//     constructor(props) {
//         super(props);

//         ['onLeftClick',
//             'onRightClick',
//             'onSelectRightIcon',
//         ].forEach((method) => {
//             this[method] = this[method].bind(this);
//         });


//         this.state = {
//             visible: false,
//         };

//     }

//     onLeftClick() {
//         this.onBack();
//     }

//     onRightClick() {
//         alert('onRightClick')
//     }

//     onSelectRightIcon(opt) {
//         if (opt.props && opt.props.value == 'scan') {
//             this.forward('scanPage');
//         }
//     }

//     render() {
//         const {
//             title
//         } = this.props;

//         const scanIcon = <img src={ScanPng} className="right-icon-scan"/>;
//         const Item = Popover.Item;
//         const rightContent = (
//             <Popover
//                 mask
//                 visible={this.state.visible}
//                 overlay={[
//                     (<Item key="1" value="scan" icon={scanIcon}>扫一扫</Item>),
//                 ]}
//                 onSelect={this.onSelectRightIcon}
//             >
//                 <Icon type="ellipsis" size="md"/>
//                 {/* <Button onClick={this.onRightClick}><Icon type="ellipsis" size="md"/></Button> */}
//             </Popover>
//         );

//         return (
//             <div>
//                 <NavBar
//                     className="navbar"
//                     icon={<Icon type="left" size="md"/>}
//                     rightContent={rightContent}
//                     onLeftClick={this.onLeftClick}
//                 >
//                 {title}
//                 </NavBar>
//             </div>
//         )
//     }
// }