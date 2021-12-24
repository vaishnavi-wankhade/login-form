import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Profile() {

    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    }
    return (
        <div>
            <h1>Profile</h1>

            <button onClick={handleClick}>Back</button>
        </div>
    )
}
