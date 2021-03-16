import React, {useState, useEffect} from 'react';
import { Toast, ToastBody, ToastHeader, Button, Form } from 'reactstrap';

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
<div className="container">
  <div className="row">
    <div className="col-sm">
    <img width=' 200px' src='https://fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg' alt="no display"/>
    </div>
    <div className="col-sm">
    <Toast>
          <ToastHeader>
            Game Title
          </ToastHeader>
          <ToastBody>
            This is a toast on an info background — check it out!
          </ToastBody>
        </Toast>
    </div>
    <div className="col-sm">
    <Button variant="primary">Add to List</Button>
    </div>
  </div>
</div>
</Form>
    )
}

export default GamesDisplay;