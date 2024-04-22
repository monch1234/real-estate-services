import React, { useState } from 'react';
import './index.css';
import { useLanguage } from '../../context/languageContext';

const Filter = ({ categories, cities, prices, onFilterChange }) => {
    const { translate } = useLanguage();
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        onFilterChange(value === '' ? null : value);
    };

    const handleCityChange = (e) => {
        const value = e.target.value;
        onFilterChange(value === '' ? null : value);
    };

    const handlePriceChange = () => {
        const priceRange = `${minPrice}-${maxPrice}`;
        onFilterChange(priceRange);
    };

    

    const filteredPrices = prices.filter(price => price !== undefined);
    const filteredCategories = categories.filter(category => category !== undefined);
    const filteredCities = cities.filter(city => city !== undefined);

    return (
        <div className="filter">
            <div className="filter-options">
                <select className="filter-select" onChange={handleCategoryChange}>
                    <option value="">{translate('select.the.category')}</option>
                    {filteredCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <select className="filter-select" onChange={handleCityChange}>
                    <option value="">{translate('select.the.city')}</option>
                    {filteredCities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
                <input
                    className='filter-select'
                    type="number"
                    placeholder={translate('min.price')}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    className='filter-select'
                    type="number"
                    placeholder={translate('max.price')}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button className='button-filter' onClick={handlePriceChange}>{translate('filter.apply')}</button>
            </div>
        </div>
    );
};

export default Filter;
