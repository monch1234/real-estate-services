import React, { createContext, useState, useContext, useEffect } from 'react';
import translationsEn from '../translate-language/messages_en.json';
import translationsArm from '../translate-language/messages_arm.json';
import translationsRu from '../translate-language/messages_ru.json';

const LanguageContext = createContext(); // languageContext-y stexcvum e createContexti mijocov
//ays contect-y ogtagorcvum e yntrac lezvi tvyalnery componentnerin poxancelu hamar

export const useLanguage = () => useContext(LanguageContext); //ays hooky ogtagorcvum e vorpesi stananq
//mutq languageContexcti arjeqnerin

const LanguageProvider = ({ children }) => { // barcr makardaki cnox contect vory tuyl e talis 
  // componentnerin stanal mutq LanguageContext 
  const storedLanguage = localStorage.getItem('language');
  const defaultLanguage = storedLanguage || 'en';  //  defaultLanguage popoxakany petq e stexcvi  storedLanguage stanaluc heto

  const [language, setLanguage] = useState(defaultLanguage);

  const translations = language === 'en' ? translationsEn : language === 'arm' ? translationsArm : translationsRu;

  const translate = (key) => {
    return translations[key] || key;
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
