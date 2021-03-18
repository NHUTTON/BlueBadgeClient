import React, {useState, useEffect} from 'react';

import {Table, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, CardImg, CardHeader, Container, Row, Col} from 'reactstrap';

const GamesTable = (props) => {
    const [gamesList, setGamesList] = useState([]);

    const deleteTable = (game) => {
        fetch(`http://localhost:5002/games/delete${game}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchGames())
    }

    const fetchGames = () => {
        let url = props.baseURL + '/games/mine'
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) .then((res) => res.json())
        .then((json) => {
            setGamesList(json)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const gameMapper = () => {
        return gamesList.map((game, index) => {
            return(
                <div>
                    placeholder text
        </div>
            )
        })
    }

    return (
        <>
        <h3>Your Favorite Games</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Release Date</th>
                    <th>Genres</th>
                    <th>Available Platforms</th>
                </tr>
            </thead>
            <tbody>
                {gameMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default GamesTable;

