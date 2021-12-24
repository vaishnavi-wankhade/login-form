import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Form() {

    const history = useHistory();
    

    const handleclick = () => {
        history.goForward();   
        
    }



    const handleclick =() => {
        history.goBack();
    }

    return (
        <div>

        <b>Name</b>
        <input type="text" />

        <br></br>

        <b>password</b>
        <input type="password" />
        <br></br>




        

        <button onClick={handleclick}>Go Forward</button><br></br>
        <br></br>
        <button onClick= {handleclick}>Previous</button>
            

        </div>
    )
}
