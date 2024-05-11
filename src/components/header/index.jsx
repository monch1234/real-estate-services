import React, { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import './index.css';
import { MdMenu, MdMapsHomeWork } from 'react-icons/md';
import { useLanguage } from '../../context/languageContext';
import armFlag from "../../assets/img/Armenian Flag.jpeg";
import engFlag from '../..//assets/img/United Kingdom.jpeg';
import ruFlag from "../../assets/img/File_Flag of Russia_svg - Wikimedia Commons.jpeg"

const Header = () => {
    const { translate, setLanguage, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);


    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
        setIsOpen(false); 
    };

    const options = [
        { value: 'en', label: 'English', icon: engFlag },
        { value: 'ru', label: 'Russian', icon: ruFlag },
        { value: 'arm', label: 'Armenian', icon: armFlag }
    ].filter(option => option.value !== language); 

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'fixed' : ''}>
            <div className="logo">
                <Link to="/" style={{
                    
                fontSize: "100px",
                color: "#26366B",
                }}>
                    <MdMapsHomeWork/>
                </Link>
            </div>
            <div className="burger-menu" onClick={toggleNav}>
                <MdMenu size={30} />
            </div>
            <nav>
                <ul className={isOpen ? 'open' : ''}>
                    <li>
                        <Link to="/sale">{translate('header.sile')}</Link>
                    </li>
                    <li><Link to="/hire">{translate('Header.rent')}</Link></li>
                    <li><Link to="/services"> {translate('Services')} </Link></li>
                    <li><Link to="/AboutUs">{translate('About.us')} </Link></li>
                    <li><Link to='/Contact'>{translate('Contacts')}</Link></li>
                </ul>
            </nav>
            <div className="favorite_language">
                <span>
                    <Link to="/favorites"><MdFavoriteBorder style={{fontSize:"25px"}} /></Link>
                </span>
                <div className="custom-select">
                    <div className="selected-value" onClick={() => setIsOpen(!isOpen)}>
                        {language === 'en' && <img src={engFlag} alt="English" />}
                        {language === 'ru' && <img src={ruFlag} alt="Russian" />}
                        {language === 'arm' && <img src={armFlag} alt="Armenian" />}
                    </div>
                    {isOpen && (
                        <div className="options">
                            {options.map(option => (
                                <div key={option.value} onClick={() => handleLanguageChange(option.value)}>
                                    <img src={option.icon} alt={option.label} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
