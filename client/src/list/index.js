import React, {useState, useEffect} from 'react';

// import ListCreate from  './ListCreate'
// import ListEdit from './ListEdit'
import List from './ListComponents/List'
import GamesDisplay from './GamesCreate';
import ApiFetch from './ApiRequest'
import GamesTable from './GamesTable'

const Index = (props) => {
const [games, setGames] = useState('')
 let secret = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MDEwNDUwLCJleHAiOjE2MTYwOTY4NTB9.O5BQjwwNiG27sXKDcw-vy77uR_hH2ZA2a5Qv590K2N8';

 const fetchGames = () => {
    fetch('http://localhost:5002/games', {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': secret
        })
    }).then((res) => res.json())
    .then((logData)=>{
        console.log(logData)
        setGames(logData)
    })
 }

    return(
        <div>
            <ApiFetch />
            {/* <GamesTable fetchGames={fetchGames} games={games} token={secret} /> */}
            {/* <ListCreate />
            <ListEdit /> */}
            {/* <List /> */}
        </div>
    )
}

export default Index;