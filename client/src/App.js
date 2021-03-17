import React, { useState, useEffect } from 'react'
import './App.css';

import Auth from './auth/Auth'
import  Index from './list/index'

function App() {  
  const [sessionToken, setSessionToken] = useState('');
  const [activeList, setActiveList] = useState(0);
  const [listGamesUpdated, setListGamesUpdated] = useState(false);
  const baseURL = `http://localhost:${process.env.REACT_SERVER_PORT}`

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

 
    const updateToken = (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken)
      console.log(sessionToken)
    }

    const clearToken = () => {
      localStorage.clear();
      setSessionToken('')
    }
 

  return (
    <div>
    <Auth />
    <Index />
    </div>
  )
}

export default App;
