import React, {useState, useEffect} from 'react';
import { Media, Button, Form } from 'reactstrap';
import GamesTable from './GamesTable'
 /*

 This is submitting data from the API to the data base

 */
const GamesCreate = (props) => {
  console.log(props)
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
 
   console.log(image)
   console.log(title)
   console.log(date)
   console.log(platform)
   console.log(genre)

    const mapPlatform =  () => {
      return initPlatform.map(item => setPlatform([...initPlatform, item.platform.name]))}
      console.log(initPlatform)

    const mapGenre =  () => {
      return initGenre.map(item => setGenre([...initGenre, item.name]))}

    useEffect(() => {
        setImage(props.game.background_image);
        setTitle(props.game.name);
        setDate(props.game.released);
        // setInitGenre(props.game.genres);
        // setInitPlatform(props.game.platforms)
    }, []);

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
        console.log('hi nick')
        return res.json()
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