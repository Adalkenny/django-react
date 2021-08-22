import React from 'react'
import { useRouteMatch, useLocation } from "react-router-dom";


const RegistarPet = () => {

    let match = useRouteMatch();
    let local = useLocation();
    let currenturl = window.location.hostname;

    const print =()=>{
        let ayam = `http//${currenturl}/8000`;
        alert(ayam)
    }


    return (
        <div>
            <p>no sta pa li</p>
            <p>Yheap</p>
            <button onClick={print}>CLICK-ME</button>
        </div>
    )
}

export default RegistarPet;
