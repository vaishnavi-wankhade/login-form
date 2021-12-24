import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Uselocation() {

    const location = useLocation();


    return (
        <div>

        {
            location.pathname === '/uselocation/vaishnavi' ? 
            <p>Hii vaishnavi good to see you again</p> :
            <p>Login to see your files</p>}

            <p>hi your location is {location.pathname}</p>
            
        </div>
    )
}
