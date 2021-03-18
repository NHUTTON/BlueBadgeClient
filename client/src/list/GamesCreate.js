import React, {useState, useEffect} from 'react';
import { Media, Button, Form } from 'reactstrap';
import GamesTable from './GamesTable'
 /*

 This is submitting data from the API to the data base

 */
const GamesCreate = (props) => {
    const [image, setImage] = useState(props.game.background_image)
    const [title, setTitle] = useState(props.game.name);
    const [date, setDate] = useState(props.game.released);
    const [initGenre, setInitGenre] = useState(props.game.genres);
    const [initPlatform, setInitPlatform] = useState(props.game.platforms);
    const [object, setObject] = useState(props.game)
    const [platform, setPlatform] = useState([]);
    const [genre, setGenre] = useState([]);

   // console.log(initPlatform)
 
  //  console.log(image)
  //  console.log(title)
  //  console.log(date)
   console.log(platform)
   console.log(genre)
    const mapPlatform =  () => {
      return initPlatform.map((item, index) => {
          return (
              setPlatform(item.platform.name)
          )
      })
    }

    const mapGenre =  () => {
      return initGenre.map((item, index) => {
          return (
              setGenre(item.name)
          )
      })
    }

    const handleSubmit = (e) => {
      console.log('hi there');
      mapPlatform()
      mapGenre()
      fetch('http://localhost:5002/games/create', {
        method: 'POST',
        body: JSON.stringify({game: {
          image: image, 
          title: title, 
          date: date, 
          genre: genre, 
          platform: platform,
        }}),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
      }).then(res =>{
        res.json()
        console.log('this is nick')
      })
      .then((gameData) => {
        console.log(gameData)
      })
    }

    return(
      <Button onClick={handleSubmit} >Add to my List</Button>
    )
}

export default GamesCreate;