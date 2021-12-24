import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const handleClick = () => {
        history.goForward();
    }
    return (
        <div>
        <h1>Home Page</h1>

        <button onClick={handleClick}>Forward</button>
            
        </div>
    )
}
