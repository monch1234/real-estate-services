import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePropertyContext } from '../../context/propertyContext';
import './index.css';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLanguage } from '../../context/languageContext';

const PropertyCard = ({ image, title, description, code, location, phone, price, id, category, removeFromFavorites }) => {
    const { translate } = useLanguage();
    const [none, setNone] = useState(false);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteLink, setFavoriteLink] = useState(true);


    const displayNone = () => {
        setNone(!none);
    };

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(id);
    };

    const toggleImageExpansion = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const { updatePropertyData } = usePropertyContext();

    const handleAddToFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...favorites, { id, title, image, description, price }]));
        setIsFavorite(true);
        console.log(123);
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
    const locationFavorite = useLocation();
    const favoriteLinkIsActive = locationFavorite.pathname === '/favorites';

    const favoriteLinkHandler = () => {
        if (favoriteLinkIsActive) {
            setFavoriteLink(false);
        }
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
                    <div onClick={favoriteLinkIsActive ? handleRemoveFromFavorites : handleAddToFavorite}>
                    {favoriteLinkIsActive ? <MdFavorite /> : (isFavorite ? <MdFavorite /> : <MdFavoriteBorder />)}
                    </div>
                </div>
            </div>

        </div >
    );
}

export default PropertyCard;
