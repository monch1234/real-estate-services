import React from "react";
import './index.css'
import Appartments_card from "../appartments-card";
import { useLanguage } from '../../context/languageContext';


const Main = () => {

    const { translate } = useLanguage();

    return (
        <main>
            <section className="properties">
                <h1>{translate('Best.Offers')}</h1>
            </section>
        </main>
    )
};

export default Main;