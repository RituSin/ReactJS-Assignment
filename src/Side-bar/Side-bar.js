import React from 'react';
import styles from './Side-bar.module.css';
import { faHome, faListAlt, faWallet } from "@fortawesome/free-solid-svg-icons";
//import { faCircle as faCircleRegular} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faWallet} from "@fortawesome/pro-regular-svg-icons";
import HomeBody from '../home-body/HomeBody';

const Sidebar = () => {
    const mystyle = {
        container: { width: window.innerWidth, height: window.innerHeight+100},
        requestContainer : {top: 158    },
        paymentContainer : {top: 218   }
    }
    return (
        <div className="container" style={mystyle.container}>
            <div className="dashboard-container">
                <span className="side-rect-dashboardSection"></span>
                <span  className="home-icon" > <FontAwesomeIcon icon={faHome} /></span>
                <p className="dashboard-text">Dashboard</p>
            </div>

            <div className="request-container" style={mystyle.requestContainer}>

                <div  className="req-icon" > <FontAwesomeIcon icon={faListAlt} /></div>
                <p className="request-text">Requests</p>
            </div>
            <div className="request-container" style={mystyle.paymentContainer}>
                <div  className="req-icon" > <FontAwesomeIcon icon={faWallet} /></div>
                <p className="request-text">Payments</p>
            </div>

            <div className="footer">
            (c) Protected by Law. Sanctioned under Companies Act. Sanctioned under Companies Act.
            </div>

            <HomeBody />
           



           
        </div>
    )
}





export default Sidebar;