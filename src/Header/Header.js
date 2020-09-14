import React from 'react';
import styles from './Header.module.css';
import { faBell, faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const header = () => {
    const mystyle = {
        headerstyle : {
            width: window.innerWidth 
        },
        namestyle: {
            left: window.innerWidth - 150
        },
        solidcircle: {
            left: window.innerWidth - 210
        },
        bell: {
            left: window.innerWidth - 280
        }

    };
    

    return (
        <div className="header" style={mystyle.headerstyle}>
            <div className="top-left-title">FUNDER.AI</div>
            <div className="bell" style={mystyle.bell}> 

                <FontAwesomeIcon icon={faBell} />                
            </div>
            <div className="circle" style={mystyle.solidcircle}>
                <FontAwesomeIcon icon={faCircleSolid}/>            
            </div>
            <div className= "reg-circle">
            <FontAwesomeIcon icon={faCircleRegular}/>
            </div>

            <div className="name" style={mystyle.namestyle}>
                Siddharth<br/>
                <p className="sub-name">Prestige Electricals</p>
            </div>
        </div>

    )
}

export default header;