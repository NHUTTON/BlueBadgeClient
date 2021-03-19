import React, {useState, useEffect} from 'react';

// import ListCreate from  './ListCreate'
// import ListEdit from './ListEdit'
import List from './ListComponents/List'
import GamesDisplay from './GamesCreate';
import ApiFetch from './ApiRequest'
import GamesTable from './GamesTable'

const Index = (props) => {
    console.log(props, "index.js")
const [games, setGames] = useState('')
 let secret = `Bearer ${props.token}`;

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

            <ApiFetch token={secret} url={props.url} games={games} fetchGames={fetchGames}  />
            {/* <GamesTable fetchGames={fetchGames} games={games} token={secret} url={props.url} /> */}
            {/* <ListCreate />
            <ListEdit /> */}
            {/* <List /> */}
        </div>
    )
}

export default Index;