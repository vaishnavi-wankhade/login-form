import React from 'react';
import { useHistory } from 'react-router-dom';

export default function About() {

    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    const handleclick = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>About </h1>

            <button onClick={handleClick}>Back</button>
            <button onClick={handleclick}>Next</button>
            
        </div>
    )
}
