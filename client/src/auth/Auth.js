import React, {useState} from 'react';

import Login from  './Login';
import Register from  './Register';

const Auth = (props) => {
    const [currentUser, setCurrentUser] = useState('');

    /*
        Need to add logic for displaying the modal
            a useState variable (boolean) to switch between on/off (when user pushes login/signup and the submit button)
            
            if not, modal will open on refresh, we only want it to fire when the login/register
    */

    return(
        <div>
            <Login url={props.url}/>
            <Register url={props.url} currentUser={currentUser} updateToken={props.updateToken}/>
        </div>
    )
}

export default Auth;