import React, { useState, useEffect } from "react";
import data from "./data.json";

const Body = ({setCategory, setSortCondition}) => {
    const [message, setMessage] = useState("Price Asc");

    useEffect(() => {
        const scrollEvent = () => {
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("orderConditions").style.paddingTop = "2vmax"

            } else {
                

            }
        }
        window.addEventListener('scroll', scrollEvent, {passive: true})
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
    }, [])

    return ( 
        <div className="conditions">
            <div className="orderConditions" id="orderConditions">
                <label>Category:</label>
                <select className="select">
                    <option onClick={() => setCategory('All')}>All</option>
                    <option onClick={() => setCategory('Pokeball')}>Pokeball</option>
                    <option onClick={() => setCategory('Potion')}>Potion</option>
                    <option onClick={() => setCategory('Heal')}>Heals</option>
                    <option onClick={() => setCategory('TM')}>TM</option>
                </select>
                
                <label>Order By:</label>
                <select className="select">
                    <option onClick={() => setSortCondition("Price Asc")}>Price Asc</option>
                    <option onClick={() => setSortCondition("Price Desc")}>Price Desc</option>
                    <option onClick={() => setSortCondition("Name A-Z")}>Name A-Z</option>
                    <option onClick={() => setSortCondition("Name Z-A")}>Name Z-A</option>
                </select>
            </div>
        </div>
    )
    
}

export default Body