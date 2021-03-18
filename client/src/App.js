import React, { useState, useEffect } from 'react'
import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Auth from './auth/Auth'
import  Index from './list/index'
import TopBar from './topBar/topBar'
import Footer from './footer/footer';

function App() {  
  document.body.style = 'background: #292929'
  const url = 'http://localhost:5002'

  const baseURL = `http://localhost:${process.env.REACT_SERVER_PORT}`
  const [activeList, setActiveList] = useState(0);
  const [listGamesUpdated, setListGamesUpdated] = useState(false);
  const [sessionToken, setSessionToken] = useState(''); 


  /*
    this runs to update sessiontoken to the token found in local storage
  */
  useEffect(() => { //if a session token exists in local storage, set the sessionToken to that value so it can be passed down as a prop
    if (localStorage.getItem('token') !== undefined) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  /*
    this saves the token in localStorage and in sessionToken
  */
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    // console.log(sessionToken);
  }
  
  //this is the Logout functionality
  const clearToken = () =>  {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (localStorage.getItem('token') ?
    <TopBar clickLogout={clearToken}/> : <Auth url={url} updateToken={updateToken}/>)
  }

  return (
    <div>
      {protectedViews()}
      <br/>
      <div style={{height: "8vh"}}></div>
      <br/>
      <Index />
      <br/>
      <br/>
      <Footer />
    </div>
  )
}

export default App;
