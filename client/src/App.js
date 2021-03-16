import './App.css';

import {useState, useEffect} from 'react';

import Auth from './auth/Auth'
import  Index from './list/index'

function App() {
  const url = 'http://localhost:5002'

  const [sessionToken, setSessionToken] = useState(''); 

  /*
    this runs to update sessiontoken to the token found in local storage
  */
  useEffect(() => { //if a session token exists in local storage, set the sessionToken to that value so it can be passed down as a prop
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  /*
    this saves the token in localStorage and in sessionToken
  */
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  //this is the Logout functionality
  const clearToken = () =>  {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div>
    <Auth url={url} updateToken={updateToken}/>
    <Index />
    </div>
  )
}

export default App;
