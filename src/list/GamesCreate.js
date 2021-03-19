import React, {useState, useEffect} from 'react';
import { Media, Button, Form } from 'reactstrap';
import GamesTable from './GamesTable'

import APIURL from '../helpers/environment'
 /*

 This is submitting data from the API to the data base

 */
const GamesCreate = (props) => {
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [initGenre, setInitGenre] = useState([]);
    const [initPlatform, setInitPlatform] = useState([]);
    const [object, setObject] = useState(props.game)

    const [platform, setPlatform] = useState([]);
    const [genre, setGenre] = useState([]);

    // console.log(object)
   // console.log(initPlatform)
 


    const mapPlatform =  () => {
      return initPlatform.map(item => setPlatform([...initPlatform, item.platform.name]))}


    const mapGenre =  () => {
      return initGenre.map(item => setGenre([...initGenre, item.name]))}

    useEffect(() => {  // HERE I AM ACCESSING THE PROPS OBJECT PASSED FROM THE API REQUEST AND PULLING OUT THE INOFRMATION THAT I NEED.
        setImage(props.game.background_image);
        setTitle(props.game.name);
        setDate(props.game.released);
        // setInitGenre(props.game.genres);
        // setInitPlatform(props.game.platforms)
    }, []);

    const handleSubmit = (e) => {
      // console.log('hi there');
      mapPlatform()
      mapGenre()
      fetch(`${APIURL}/games/create`, {
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
        console.log('hi nick')
        return res.json()
      })
      .then((gameData) => {
        // console.log(gameData)
      })
    }

    return(
      <Button onClick={handleSubmit} >Add to my List</Button>
    )
}

export default GamesCreate;
