import React, { useState, useEffect } from "react";
import './index.css';

import service1 from '../../assets/img/service1.jpg'
import service2 from '../../assets/img/service2.jpg'
import service3 from '../../assets/img/service3.jpg'
import Service from "../../components/service";
import Header from "../../components/header";
import Footer from "../../components/footer";
import servicesArm from '../../translate-language/services_arm.json';
import servicesEn from '../../translate-language/services_en.json';
import servicesRu from '../../translate-language/services_ru.json';


import { useLanguage } from '../../context/languageContext';


const Services = () => {

    const { translate, language } = useLanguage();
    let data;
    if (language === "arm") {
        data = servicesArm;
    } else if (language === "en") {
        data = servicesEn;
    } else if (language === "ru") {
        data = servicesRu
    }

    const [properties, setProperties] = useState(data);

    useEffect(() => {
        // Определение данных в соответствии с выбранным языком
        if (language === "arm") {
            setProperties(servicesArm);
        } else if (language === "en") {
            setProperties(servicesEn);
        } else if (language === "ru") {
            setProperties(servicesRu);
        }
    }, [language]);

    return (
        <div className="services">
            <Header />
            <h1>{translate("services.title")}</h1>
            {properties.map((property, index) => (
                <Service
                    key={index}
                    imageTitel={property.servicesHeader}
                    image={property.servicesImages}
                    imagePararaph={property.servicesHeaderParagraph}
                    serviceParagraph={property.servicesDetailsParagraphOne}
                    serviceH2={property.servicesDetailsParagraphTwo}
                    serviceTwoParagraph={property.servicesDetailsParagraphThree}
                />
            ))}
            <Footer />
        </div>
    )
}

export default Services;
