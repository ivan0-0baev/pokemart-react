import React, { useEffect, useState } from "react";

const Header = () => {

    useEffect(() => {
        
        const scrollEvent = () => {
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("header").style.fontSize = "calc(1px + 1vmax)"

            } else {
                document.getElementById("header").style.fontSize = "calc(10px + 1vmax)"

            }
        }
        window.addEventListener('scroll', scrollEvent, {passive: true})
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
    }, [])

    return(
        <div id='header'>
            <img src="..//images/poke.png" set/>
            <h1>[ Lilicove PokeMart ]</h1>
            
        </div>
    )

}

export default Header