import React from "react";
import './index.css';

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";

import { Link } from 'react-router-dom';

import { useLanguage } from '../../context/languageContext';


const Footer = () => {

    const { translate } = useLanguage();


    return (
        <div className="footer">
            <div>
                <p>{translate('footer.paragraph.home')}</p>
                <p>{translate('footer.paragraph.land')}</p>
                <p>{translate('footer.paragraph.appartment')}</p>
                <p>{translate('footer.paragraph.komercions')}</p>
                <br />
                <p>{translate('footer.two.paragraph')}</p>
                <p>{translate("footer.three.paragraph")}</p>
                
                
            </div>
            <div className="logo">
                <Link to="/"
                style={{
                    fontSize:"150px",
                    color:"#fff"
                }}>
                    
                <MdMapsHomeWork/>
                </Link>
            </div>
            <div>
                <p className="telephon_number" style={{
                    fontSize:"20px"
                }}> <span>+374 10 27 93 93</span> <br /> <span>+374 10 52 93 93</span> <br /> <span>+374 10 66 99 96</span></p>
                <div className="follow">
                    <FaInstagram className="iconsNetworks" />
                    <FaFacebook className="iconsNetworks" />
                </div>
            </div>
        </div>
    )
}

export default Footer