// Favorite.js
import React, { useState } from "react";
import PropertyCard from "../../components/property-card";
import Header from "../../components/header";
import { useLanguage } from '../../context/languageContext';

const Favorite = () => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
    const { translate } = useLanguage();

    const removeFromFavorites = (indexToRemove) => {
        const updatedFavorites = favorites.filter((_, index) => index !== indexToRemove);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites); 
    };
    

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",

            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Header />
            <h1>{translate("favorites")}</h1>
            <div style={{ width: "90%" }}>
                {favorites.map((favorite, index) => (
                    <PropertyCard
                        key={index}
                        title={favorite.title}
                        description={favorite.description}
                        image={favorite.image}
                        id={favorite.id}
                        price={favorite.price}
                        removeFromFavorites={() => removeFromFavorites(index)}
                        style={{
                            width: "90%"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorite;
