import React from 'react';
import styles from './HomeBody.module.css';

const homebody = () =>
{
    const mystyle ={
        container : {
            width: window.innerWidth - 235,
            height: 695,
            left: 235,
            top: 84
        },

        Company_Detail_Card: {
            // left: 281;
            // top: 317px;
            left: 46,
            top: 233
        },
        Bank_Detail_Card: {
            // left: 281;
            // top: 317px;
            left: 375,
            top: 233
        },
        Document_Detail_Card: {
            // left: 281;
            // top: 317px;
            left: 704,
            top: 233
        }
    };

    return(
        <div className="conatiner" style={mystyle.container}>
            <div className="body-title">
                <span className="box"></span>
                <p className="body-title-text">Welcome to Funder.ai</p>
                <p className="title-text">Please complete the steps below for quick verification of your profile. 
                    Once your profile is verified, you can immediately start factoring.</p>
            </div>

            <p className="tell-us-about-your-company"><b>Step 1</b> &nbsp;&nbsp; Tell us about your Company</p>

            <div className="card" style={mystyle.Company_Detail_Card}>
                <p className="companyDetails"><b>Company Details</b></p>
                <p>Trade name, license, address, signing authority etc.</p>
            </div>

            <div className="card" style={mystyle.Bank_Detail_Card}>

            </div>

            <div className="card" style={mystyle.Document_Detail_Card}>

            </div>
        </div>
    ); 
}

export default homebody;