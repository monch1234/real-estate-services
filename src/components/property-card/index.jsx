import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePropertyContext } from '../../context/propertyContext';
import './index.css';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLanguage } from '../../context/languageContext';

import propertyCardArm from '../../translate-language/property_card_arm.json';
import propertyCardEn from '../../translate-language/property_card_en.json';
import propertyCardRu from '../../translate-language/property_card_ru.json';
import HouseDetail from '../house-detail';



const PropertyCard = ({ image, title, description, code, location, phone, price, id, category }) => {
    const { translate, language } = useLanguage();
    const [none, setNone] = useState(false);
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const displayNone = () => {
        setNone(!none)
    }


    const toggleImageExpansion = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const { updatePropertyData } = usePropertyContext();
    const [isFavorite, setIsFavorite] = useState(false);
    const handleAddToFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...favorites, { id, title, image, description, price }]));
        setIsFavorite(true);
    };

    const handleClick = () => {
        updatePropertyData({
            image,
            title,
            description,
            code,
            location,
            phone,
            price,
            id,
        });
    };


    const handleCloseImage = () => {
        setIsImageExpanded(false);
    };
    return (
        <div className="property-card">
            <div className={`property-image ${isImageExpanded ? 'expanded' : ''}`} onClick={toggleImageExpansion}>
                <img src={image} alt={title} />
                {isImageExpanded && (
                    <button className="close-button" onClick={handleCloseImage}>✖</button>
                )}
            </div>
            <div className="property-details">
                <h2 className="property-title">
                    {title}
                    <div className="property-price">${price}</div>
                </h2>
                <p>{description}</p>
                <div className="property-info">{code}</div>
                <div className="property-info">{location}</div>
                <hr style={{ width: "50%", border: "1px solid #26366B" }} />
                <div className="property-info">{phone}</div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div className={`${none ? "block" : "none"}`} >
                        <button style={{
                            width: "100%",
                            fontSize: "20px",
                            border: "1px solid #26366B",
                            backgroundColor: " #fff",
                            color: "#26366B",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            marginLeft: "22px",
                            cursor: "pointer",
                        }}>{translate("calling")}: +374 10 27 93 93 | +374 10 52 93 93 </button>

                    </div>
                    <button onClick={handleClick} className="reset-button" onClickCapture={displayNone}>{translate("more.details")}</button>
                    <div onClick={handleAddToFavorite}>
                        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                    </div>

                </div>
            </div>

        </div >
    );
}

export default PropertyCard;
