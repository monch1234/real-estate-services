import React, { createContext, useContext, useState } from 'react';

const PropertyContext = createContext(); // properyContext, tuyl e talis poxancel tvyalner komponentneri michev

export const usePropertyContext = () => { // talis e mutq depi contexti arjeq
  return useContext(PropertyContext); //ogtagorcvum e componentnerum depi tvyalneri arjeqner mutq unenalu hamar ev tarmacman functionneri hamar
};

export const PropertyProvider = ({ children }) => {
  const [propertyData, setPropertyData] = useState({
    image: '',
    title: '',
    description: '',
    code: '',
    location: '',
    phone: '',
    price: '',
    id: '',
  });

  const updatePropertyData = (data) => {
    setPropertyData(data);
  };

  return (
    // cnox komponent vory tuyl e talis ir mej exac komponenterin unenal mutq depi context
    //ayn uni nayev propertyData vory uni info updatePropertyDatai masin vory tuyl e talis tarmacnel ayd vijaky
    //«PropertyData»-n tarmacnelis ogtagorcelov updatePropertyData,
    // nor arjeqy poxancvum e bolor componentnerin,
    // voronq ogtagorcum en usePropertyContext():
    <PropertyContext.Provider value={{ propertyData, updatePropertyData }}> 
      {children}
    </PropertyContext.Provider>
  );
};


// aystex stexcvum e propertyContext
//  vory tuyl e talis unenal mutq
//   depi tvyalner ev functionner nranc tarmacman hamar