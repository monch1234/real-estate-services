import React from "react";
import './index.css';

import { Link } from "react-router-dom";
const Appartments_card = ({img}) => {
    return (
        <div className="property-card-mini">
            <img src={img} alt="Property" />
                <h3>Просторная квартира в центре города</h3>
                <p>3 комнаты, 120 кв.м., $200,000</p>
                <hr style={{
                    marginBottom:"20px"
                }}/>
                <Link to="/house" className="reset-button">Մանրամասն</Link>

        </div>
    )
}

export default Appartments_card;