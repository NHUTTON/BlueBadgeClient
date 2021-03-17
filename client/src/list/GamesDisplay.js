import React, {useState, useEffect} from 'react';
import { Media, Button, Form } from 'reactstrap';

const GamesDisplay = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState('');
    const [platform, setPlatform] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:5002/games/create', {
        method: 'POST',
        body: JSON.stringify({game: {title: title, date: date, genre: genre, platform: platform}}),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
      }).then((res) => res.json())
      .then((gameData) => {
        console.log(gameData)
        setTitle('');
        setDate("");
        setGenre('');
        setPlatform(''); 
        props.fetchGames();
      })
    }

    return(
    <Form onSubmit={handleSubmit}>
<Media>
      <Media left href="#">
        <Media style={{width:"200px", height:"150px"}}object src="https://fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Game Title
        </Media>
Genres: <br/> Platforms:
      </Media>
    </Media>
</Form>
    )
}

export default GamesDisplay;