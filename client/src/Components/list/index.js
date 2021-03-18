import React, {useState, useEffect} from 'react';

// import ListCreate from  './ListCreate'
// import ListEdit from './ListEdit'
import List from './ListComponents/List'
import GamesDisplay from './GamesDisplay';
import ApiFetch from './ApiRequest'

const Index = (props) => {
const [game, setGame] = useState('')
 let secret = 'Bearer ' + props.token;

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
        setGame(logData)
    })
 }

    return(
        <div>
            {/* <GamesDisplay fetchGames={fetchGames} token={secret} /> */}
            {/* <ListCreate />
            <ListEdit /> */}
            {/* <List /> */}
            <ApiFetch />
        </div>
    )
}

export default Index;