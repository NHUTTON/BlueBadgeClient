import React, {useState, useEffect} from 'react';
import { Media, Button, Form } from 'reactstrap';
import GamesTable from './GamesTable'
 /*

 This is submitting data from the API to the data base

 */
const GamesCreate = (props) => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState(props.game.name);
    const [date, setDate] = useState(props.game.released);
    const [genre, setGenre] = useState([props.game.genres]);
    const [platform, setPlatform] = useState([props.game.platforms]);
    const [object, setObject] = useState(props.game)
    console.log(platform)

    const mapPlatform =  () => {
      return object.map((item, index) => {
        console.log(item.platforms)
          return (
              item.platform.name
          )
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:5002/games/create', {
        method: 'POST',
        body: JSON.stringify({game: {image: image, title: title, date: date, genre: genre, platform: platform}}),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
      }).then((res) => res.json())
      .then((gameData) => {
        console.log(gameData)
        mapPlatform()
      })
    }

    return(
      <Button onClick={handleSubmit} >Add to my List</Button>
    )
}

export default GamesCreate;