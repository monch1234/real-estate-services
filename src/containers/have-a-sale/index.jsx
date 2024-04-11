import React from "react";
import { useLanguage } from '../../context/languageContext';
import Footer from "../../components/footer";
import Header from "../../components/header"

const HaveSale = () => {
    const { translate } = useLanguage();

    return(
        <div className="HaveSale"
            style={{

                width:"100%",
                height:"100vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
            }}
        >
            <Header />
            <h1 style={{margin:"50px"}}>{translate("comming.soom")}</h1>
            <Footer />
        </div>
    )
}

export default HaveSale;