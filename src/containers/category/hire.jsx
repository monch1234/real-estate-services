import React, { useState, useEffect } from "react";
import './index.css';
import Header from "../../components/header";
import PropertyCard from "../../components/property-card";
import Filter from "../../components/Filter";
import Footer from "../../components/footer";
import propertyCardArm from '../../translate-language/property_card_arm.json';
import propertyCardEn from '../../translate-language/property_card_en.json';
import propertyCardRu from '../../translate-language/property_card_ru.json';

import { useLanguage } from '../../context/languageContext';


const Hire = () => {
  
    const { translate, language } = useLanguage();
    let data;
    if (language === "arm") {
        data = propertyCardArm;
    } else if (language === "en") {
        data = propertyCardEn;
    } else if(language === "ru"){
        data = propertyCardRu
    }
    
    const [properties, setProperties] = useState(data);
    const [filteredProperties, setFilteredProperties] = useState(data);
    const [itemsToShow, setItemsToShow] = useState(10); 

    useEffect(() => {
        if (language === "arm") {
            setProperties(propertyCardArm);
        } else if (language === "en") {
            setProperties(propertyCardEn);
        } else if(language === "ru"){
            setProperties(propertyCardRu);
        }
        setFilteredProperties(data);
    }, [language]);

    const handleShowMore = () => {
        setItemsToShow(prev => prev + 10); 
    };

    const categories = [...new Set(data.map(property => property.category))];
    const cities = [...new Set(data.map(property => property.city))];
    const prices = [...new Set(data.map(property => property.price))];

    const handleFilterChange = (value) => {
        if (value == null) {
            setFilteredProperties(data); 
        } else {
            const filtered = data.filter(property => property.category === value || property.city === value || property.price === value);
            setFilteredProperties(filtered); 
        }
        setItemsToShow(10); 
    };


   

    return (
        <div className="hire">
            <Header />
            <h1>{translate("Header.rent")}</h1>
            <Filter categories={categories} cities={cities} prices={prices} onFilterChange={handleFilterChange} />
            <div className="property-list">
            {filteredProperties.slice(0, itemsToShow).map((property) => (
                    <PropertyCard
                        key={property.id}
                        title={property.title}
                        description={property.description}
                        price={property.price}
                        location={property.location}
                        image={property.image}
                        id={property.id}
                    />
                ))}
            </div>
            {itemsToShow < filteredProperties.length && (
                <div className="show-more">
                    <button onClick={handleShowMore} style={{ marginBottom: "20px" }}>{translate("show.more")}</button>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Hire;