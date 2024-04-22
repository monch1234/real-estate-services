import React from "react";

import Header from '../../components/header/index'
import './index.css';
import Footer from "../../components/footer";

import { useLanguage } from '../../context/languageContext';


const Contact = () => {

    const { translate } = useLanguage();

    return (
        <div className="Contact"
            style={{
                
                width:"100%",
                height:"100vh",
            }}
        >
            <Header />
            <h1>{translate("contact")}</h1>
            <section className="contact-info">
                <div className="form">
                    <div className="input_form">
                        <div className="name_lastname_e-mail">
                            <label for="name">
                                <input type="text" placeholder= {translate("name.LastName")} />
                            </label>
                            <label for="E-mail">
                                <input type="text" placeholder={translate("e.mail")} />
                            </label>
                        </div>
                        <div className="topic_mobile">

                            <label for="topic">
                                <input type="text" placeholder={translate("topic")} />
                            </label>
                            <label for="Her">
                                <input type="text" placeholder={translate("your.telephon")} />
                            </label>
                        </div>
                        <div className="messages">
                            <textarea name="messages" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="button">
                            <button>{translate("send")}</button>
                        </div>
                    </div>
                    <div className="contact_form">
                        <h3>{translate("contact.paragraph")}</h3>
                        <h4>{translate("tell")} +374 10 27 93 93 | +374 91 27 93 93 | +374 77 97 00 10</h4>
                        <span>
                            <p>Viber: +374 91 27 93 93
                                <br />
                                WhatsApp: +374 77 97 00 10
                            </p>
                            <p>
                            {translate("faqs")} +374 10 27 93 93
                                <br />
                                {translate("E-mail")} info@yerkir-real.com
                            </p>
                        </span>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d48762.85512000425!2d44.536509!3d40.193969!3m2!1i1024!2i768!4f13.1!2m1!1syerkir%20real%20estate!5e0!3m2!1sru!2sus!4v1710874821565!5m2!1sru!2sus"
                        width="100%" height="450"
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;