import React from "react";
import './index.css';

import { FaFacebook, FaInstagram } from "react-icons/fa";


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
                {/* <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="41" viewBox="0 0 301 41" fill="none">
                        <path
                            d="M301 38.2908C290.875 35.6097 280.363 33.2203 269.535 31.119L256.908 16.1639H258.499V16.1358C262.59 15.8125 265.812 12.3337 265.812 8.08193C265.812 3.83013 262.59 0.347875 258.499 0.0281111V0H225.802V24.425C223.977 24.2142 222.145 24.0139 220.306 23.8171V0H214.055V23.1846C211.896 22.9773 209.729 22.784 207.556 22.5978L196.196 12.0597L209.198 0H201.298L191.114 9.44883H172.855V0H166.604V20.3735C163.475 20.2997 160.335 20.2435 157.193 20.2119L152.908 15.1765C156.951 15.0921 160.208 11.7293 160.208 7.58999C160.208 3.45063 156.868 0 152.753 0H120.056V20.8022C117.672 20.9041 115.298 21.0236 112.928 21.1501H81.6079V15.5735H105.767V10.4152H81.6079V5.15838H113.905V0H75.3569V24.2423C66.3427 25.2508 57.4664 26.4455 48.7626 27.8229L72.1038 0H64.5074L52.6402 14.1293L38.2684 0H29.8992L48.6557 18.8731L39.9001 29.2953C26.0872 31.7058 12.74 34.9596 0 38.2873L0.683056 41C44.923 29.4534 96.4799 22.9667 149.772 22.9667C189.524 22.9667 228.261 26.3612 263.736 32.8724L263.811 32.9637H264.232C276.693 35.2618 288.753 37.9429 300.307 41L301 38.2908V38.2908ZM232.053 5.15838H256.915C258.499 5.15838 259.782 6.46555 259.782 8.07842C259.782 9.69129 258.499 10.9985 256.915 10.9985H232.053V5.15838V5.15838ZM172.855 14.6072H191.038L198.921 21.9196C190.321 21.3012 181.624 20.8444 172.855 20.5527V14.6072V14.6072ZM126.31 5.15838H152.001C153.318 5.15838 154.388 6.24769 154.388 7.58999C154.388 8.93229 153.318 10.0216 152.001 10.0216H126.31V5.15838ZM126.31 20.5633V15.18H145.632L149.879 20.1662C149.845 20.1662 149.81 20.1662 149.776 20.1662C141.91 20.1662 134.086 20.3032 126.314 20.5633M232.06 25.17V16.1568H249.633L260.907 29.5096C251.499 27.844 241.867 26.3963 232.06 25.17"
                            fill="#fff" />
                    </svg>
                </Link> */}
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