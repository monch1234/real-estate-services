import React, { useState } from 'react';
import { usePropertyContext } from '../../context/propertyContext';
import './index.css';
import Header from '../header';
import Footer from '../footer';

const HouseDetail = ({image, title, description, code, location, phone, price, id, category }) => {

    
    return (
        <div className='houseDetail' style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }} >
            <Header />
            <h1>{title}</h1>
            <div id="house_details" style={{
                display: "flex",
                margin:"50px",
                width: "80%",
                color: "#26366B",
                marginBottom: "70px"
            }}>
                <img src={image} alt="home" style={{
                    width: "50%",
                    borderRadius: "8px"
                }} />
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    marginLeft: "20px",
                    width: "100%"
                }}>
                    <p style={{
                        fontSize: "35px",
                        marginLeft: "20px",
                        width: "100%"
                    }}>Տարածք: {location}</p>
                    <p style={{ fontSize: "25px", marginTop: "20px", width: "100%" }}>Բնութագիր: {description}</p>
                    <p style={{
                        fontSize: "25px",
                        marginTop: "20px",
                        marginLeft: "20px",
                        width: "100%"
                    }}>Գին: {price}</p>
                    <button style={{ width: "100%", fontSize:"20px"}}>Զանգահարել: +374 10 27 93 93 | +374 10 52 93 93 | +374 10 66 99 96</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HouseDetail;
