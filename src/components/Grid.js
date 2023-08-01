import React, { useEffect, useState } from "react";
import data from "./data.json";
import '../Alert.css';

const Grid = ({category, sortCondition, priceRange, rating}) => {
    const [numElements, setNumElements] = useState(3);
    const [showAlert, setShowAlert] = useState(false);

    const pokeballs = data.products[0].pokeballs
    const potions = data.products[1].potions
    const heals = data.products[2].heals
    const tms = data.products[3].TMs
    
    const all = [].concat(pokeballs, potions, heals, tms)
    var item = []
    const sortBy = sortCondition
    
    
    if (category === "Pokeball") {
        item = pokeballs
        document.getElementById("categoryDescription").textContent = "item for catching Pokemon"
    } else if (category === "Heal") {
        item = heals
        document.getElementById("categoryDescription").textContent = "item to heal status effects"
    } else if (category === "Potion") {
        item = potions
        document.getElementById("categoryDescription").textContent = "item to restore health"
    } else if (category === "TM") {
        item = tms
        document.getElementById("categoryDescription").textContent = "item to teach Pokemon a move"
    } else if (category === "All") {
        item = all
    }

    useEffect(()=>{
        if (category === "All") {
            document.getElementById("categoryDescription").textContent = "all items available"
        }
    })

    const loadMore = () => {
        if(numElements < item.length){ 
            setNumElements(numElements + 3);
        }
    }
    const itemBought = (e) => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
          }, 2000);
    }
        
    
    if (sortBy === 'Price Asc') {
        item.sort((a, b) => a.cost - b.cost)
    } else if (sortBy === 'Price Desc') {
        item.sort((a, b) => b.cost - a.cost)
    } else if (sortBy === 'Name A-Z') {
        item.sort((a, b) => a.name > b.name ? 1 : -1)
    } else if (sortBy === 'Name Z-A') {
        item.sort((a, b) => a.name > b.name ? -1 : 1)
    }

    const interim = item.filter(obj => obj.cost >= priceRange.min)
                        .filter(obj => obj.cost <= priceRange.max)
                        .filter(obj => obj.rating >= rating)

    const slice = item.filter(obj => obj.cost >= priceRange.min)
                    .filter(obj => obj.cost <= priceRange.max)
                    .filter(obj => obj.rating >= rating)
                    .slice(0, numElements);
    return (
        <div>
            <h1 id="categoryName">{category}: <span id="categoryDescription"></span></h1>
        <div className="productGrid">
            
            <section className="section">
                
                <div className="container">
                    {slice.map((item, index) => {
                        return (
                            <div className="fullCard">
                                <div className="card" >
                                    <h2 id="itemName" >{item.name}</h2> 
                                    <img src={item.img} id="img" set/>                          
                                    <div className="card-body" id="card-body">
                                        <p className="itemRating">Rated: [ {item.rating} / 6 ]</p>
                                        <p>{item.description}</p>
                                        
                                    </div>
                                      
                                </div>  
                                
                                <h3 className="buyButton" id="buyButton" onClick={(e)=>itemBought(e)}>[ Buy: {item.cost}$ ]</h3>
                            </div>
                        )
                    })}
                {showAlert && <div className="alert success">[ Added To Cart ]</div>} 
                </div>
                <button className="loadMore" onClick={ () => loadMore() }>
                    [ Load More: {slice.length} / {interim.length} ]
                </button>
            </section>
        </div>
        </div>
    )    
}
export default Grid;