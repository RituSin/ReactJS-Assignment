import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import styles from './HomeBody.module.css';

const homebody = () =>
{
    const mystyle ={
        container : {
            width: window.innerWidth - 235,
            height: 800,
            left: 235,
            top: 84
        },

        Company_Detail_Card: {
            // left: 281;
            // top: 317px;
            left: 46,
            top: 222
        },
        Bank_Detail_Card: {
            // left: 281;
            // top: 317px;
            left: 375,
            top: 222
        },
        Document_Detail_Card: {
            // left: 281;
            // top: 317px;
            left: 704,
            top: 222
        },
        Noon_card: {
            left: 46,
            top: 428
        },
        Tredling_card: {
            left: 375,
            top: 428
        },
        Rotana_card: {
            left: 704,
            top: 428
        },

        blur_card: {
            color: '#C0BDBD'
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
                <p className="companyDetail-text">Trade name, license, address, signing authority etc.</p>
                <div className="fillNow">Fill Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>

            <div className="card" style={mystyle.Bank_Detail_Card}>
                <p className="companyDetails"><b>Bank Details</b></p>
                <p className="companyDetail-text">Bank account number, bank name, branch, name.</p>
                <div className="fillNow">Fill Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>

            <div className="card" style={mystyle.Document_Detail_Card}>
                <p className="companyDetails"><b>Documents</b></p>
                <p className="companyDetail-text">Upload trade license, balance sheet etc.</p>
                <div className="fillNow">Fill Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>

            <p className="tell-us-about-your-buyer-platform"><b>Step 2</b> &nbsp;&nbsp; Tell us about your Buyer Platform</p>

            <div className="card" style={mystyle.Noon_card}>
                <p className="companyDetails"><b>Noon</b></p>
                <p className="companyDetail-text">Merchant username, password</p>
                <div className="fillNow">Fill Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>

            <div className="card" style={mystyle.Tredling_card}>
                <p className="companyDetails"><b>Tredling</b></p>
                <p className="companyDetail-text">Merchant username, password</p>
                <div className="fillNow">Fill Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>

            <div className="card" style={mystyle.Rotana_card}>
                <p className="companyDetails"><b>Rotana</b></p>
                <p className="companyDetail-text">Past sales history, invoices etc.</p>
                <div className="fillNow">Fill Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>

            <div>
                <span className="add-Card"></span>
                <span className="plus-icon"><FontAwesomeIcon icon={faPlus}/></span>
                <p className="buyer-plateform-text">Add Buyer Plateform</p>
            </div>

            <p className="verify-your-bank-acc"><b>Step 3</b> &nbsp;Verify your Bank Account</p>
            <div className="Bank-Acc-card">
                <p className="companyDetails" style={mystyle.blur_card}><b>Bank Verification</b></p>
                <p className="companyDetail-text" style={mystyle.blur_card}>We’ve credited a test amount. Please enter it to verify account.</p>
                <div className="verifyNow" >Verify Now  &nbsp; <span> <FontAwesomeIcon icon={faPlay}/></span></div>
            </div>
            
        </div>
    ); 
}

export default homebody;