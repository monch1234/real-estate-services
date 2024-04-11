import React from "react";
import './index.css';

const Service = ({ imageTitel, image, imagePararaph, serviceParagraph, serviceH2, serviceTwoParagraph }) => {
    return (
        <div className="service">
            <div style={{
                backgroundColor:"#fff",
                borderRadius:"8px",
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
            }}>
                <h2>{imageTitel}</h2>
                <img src={image} alt="Изображение" />
                <p style={{fontSize:"30px", textAlign:"center"}}>{imagePararaph}</p>
            </div>
            <div>
                <p>{serviceParagraph}</p>
                <h2>{serviceH2}</h2>
                <p>{serviceTwoParagraph}</p>
            </div>
        </div>
    )
}

export default Service;
