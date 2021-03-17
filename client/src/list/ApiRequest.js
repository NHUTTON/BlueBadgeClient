import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle} from 'reactstrap';

const ApiFetch = (props) => {

    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState('');
    const [platform, setPlatform] = useState('');
    const [image, setImage] = useState('');
    
    const fetchApi = (e) => {
        fetch(`https://api.rawg.io/api/games?key=20249120a48848b1a780a4280ea4af4b&search=${search}`)
  .then(response => response.json())
  .then(data => {
      console.log(data)
      setTitle(data.results[0].name);
      setImage(data.results[0].background_image)
      setDate(data.results[0].released);
      setGenre(data.results[0].genre)
      setPlatform(data.results[0].platforms[0]);
    })
    }
    
    return (
        <div>
            <Form onSubmit={fetchApi()}>
                <FormGroup>
                <Label htmlFor='search'>Search for a game</Label>
           <Input name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </FormGroup>
            </Form>
            <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{date}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default ApiFetch;