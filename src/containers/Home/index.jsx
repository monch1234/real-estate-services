import React, { useState, useEffect } from "react";
import './index.css';
import Header from "../../components/header";
import Main from "../../components/main";
import PropertyCard from "../../components/property-card";
import Filter from "../../components/Filter";
import Footer from "../../components/footer";
import { useLanguage } from '../../context/languageContext';
import propertyCardArm from '../../translate-language/property_card_arm.json';
import propertyCardEn from '../../translate-language/property_card_en.json';
import propertyCardRu from '../../translate-language/property_card_ru.json';


const Home = () => {

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
    const [itemsToShow, setItemsToShow] = useState(10); // cucadrvox elementneri tivy

    useEffect(() => {
        // tvyalneri voroshum yst yntrvac lezvi
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
        setItemsToShow(prev => prev + 10); // avelacnel 10 cucadrvox element
    };

    const categories = [...new Set(data.map(property => property.category))];
    const cities = [...new Set(data.map(property => property.city))];
    const prices = [...new Set(data.map(property => property.price))];

    

  const handleFilterChange = (value) => {if (value == null) {
    setFilteredProperties(data); // если фильтр не указан, показываем все свойства
} else if (value.includes('-')) { // если указан диапазон цен
    const [minPrice, maxPrice] = value.split('-').map(parseFloat);
    const filtered = data.filter(property => {
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            return property.price >= minPrice && property.price <= maxPrice;
        }
        return true;
    });
    setFilteredProperties(filtered); // фильтруем свойства по диапазону цен
} else {
    const filtered = data.filter(property => property.category === value || property.city === value);
    setFilteredProperties(filtered); // фильтруем свойства по категории или городу
}
setItemsToShow(10); // сбрасываем количество показываемых элементов

    };
    
    

    return (
        <div className="Home">
            <Header />
            <Main />
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
    );
}

export default Home;
