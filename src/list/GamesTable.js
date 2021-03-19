import React from 'react';
import {Table, Button} from 'reactstrap';

import APIURL from '../helpers/environment'

const GamesTable = (props) => {
    const deleteTable = (game) => {
        fetch(`${APIURL}/games/delete${game}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchGames())
    }

    const gameMapper = () => {
        return props.game.map((game, index) => {
            return(
                <tr key={index}>
                    <td><img src={game.image} /></td>
                    <td>{game.title}</td>
                    <td>{game.date}</td>
                    <td>{game.genres}</td>
                    <td>{game.platforms}</td>
                    <td>
                        <Button>Delete</Button>
                    </td>
                </tr>
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

