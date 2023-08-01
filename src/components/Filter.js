import React, { useEffect, useState } from "react";

const Filter = ({setPriceRange, setRating}) => {

    const [currRange, setCurrRange] = useState({min: 0, max: 10000})
    const [currRate, setCurrRate] = useState(0)


    const minChange = (p) => {
        
        if (isNaN(p.target.valueAsNumber)){
            setCurrRange({ min: 0, max: currRange.max })
        } else if (p.target.valueAsNumber > currRange.max){
            setCurrRange({ min: currRange.max, max: p.target.valueAsNumber })
        } else {
            setCurrRange({ min: p.target.valueAsNumber, max: currRange.max })
        }
        
    }
    const maxChange = (p) => {
        
        if (isNaN(p.target.valueAsNumber)){
            setCurrRange({ min: currRange.min, max: 10000 })
        } else if (p.target.valueAsNumber < currRange.min){
            setCurrRange({ min: p.target.valueAsNumber, max: currRange.min })
        } else {
            setCurrRange({ min: currRange.min, max: p.target.valueAsNumber })
        }
    }

    const filterApply = () => {
        document.getElementById("min").valueAsNumber = currRange.min
        document.getElementById("max").valueAsNumber = currRange.max
        setPriceRange({ min: currRange.min, max: currRange.max })
        setRating(currRate)

    }

    return (
        <div className="filter">
            <nav className="filterElement" >
                
                <label className="label">[ Price ]</label>
                
                <label className="mmLabel">min:</label>
                <input id="min" className="filterInput" type="number" min="0" step="10" placeholder="min" onChange={(p)=>minChange(p)}></input>
                <label className="mmLabel">max:</label>
                <input id="max" className="filterInput" type="number" min="100" step="10" placeholder="max" onChange={(p)=>maxChange(p)}></input>
                
                <label className="label">[ Rating ]</label>
                <input className="filterInput" type="number" min="1" max="6" step="1" placeholder="rating" onChange={(r)=>setCurrRate(r.target.valueAsNumber)}></input>

                <button className="filterButton" onClick={()=>filterApply()}>Apply Filter</button>
            </nav>
        </div>
    )
}

export default Filter;