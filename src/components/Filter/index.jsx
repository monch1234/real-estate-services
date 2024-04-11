import React from 'react';
import './index.css';

import { useLanguage } from '../../context/languageContext';

const Filter = ({ categories, cities, onFilterChange }) => {
    const { translate } = useLanguage();
  
    const citiesArray = Object.entries(cities).map(([key, value]) => ({ key, value }));

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        onFilterChange(value == "" ? null : value); // ete yntrvac e datark filtr talis enq null vorpesi filtry zroyana
    };

    const handleCityChange = (e) => {
        const value = e.target.value;
        onFilterChange(value == "" ? null : value); // ete yntrvac e datark filtr talis enq null vorpesi filtry zroyana
    };

    //datark arjeqneri filtracum
    const filteredCategories = categories.filter(category => category && category.trim() !== '');
    const filteredCities = cities.filter(city => city && city.trim() !== '');

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
            </div>
        </div>
    );
}

export default Filter;
