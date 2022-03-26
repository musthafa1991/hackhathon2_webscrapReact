import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';



export function Mobile() {
    const [mobiles, setmobiles] = useState([]);
    useEffect(async () => {
        const resdata = await axios.get("https://scrapshoping.herokuapp.com/mobiles");
        setmobiles(resdata.data);
    }, []);

    return (
        <div className='phone-list-container'>
            {
                mobiles.map(mobile => {
                    return <div className="phone-container">
                        <img className="phone-picture" src={mobile.img} alt={mobile.model}></img>
                        <h2 className="phone-name">{mobile.model}</h2>
                        <p className="phone-company">Rating: 4</p>
                        <h3> Original Price:</h3>
                        <h2> Offer Price:</h2>
                    </div>
                })
            }
        </div>

    )

}




