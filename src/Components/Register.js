import React from 'react';
import { Link , useHistory} from 'react-router-dom';

export default function Register() {

    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    return (
        <div>

        <h1>Register Here</h1>

        <b>Name</b> <input type="text"/><br></br>
        <b>Email</b> <input type="email"/>
        <br></br>
        <b>password</b> <input type="password"/>
        <br></br>



        <br></br>
        <br></br>

        <button onClick={handleClick}>Go Back</button>
            
        </div>
    )
}
