import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, CardImg, CardHeader, Container, Row, Col} from 'reactstrap';

import xbox from '../assets/xbox.png'

const ApiFetch = (props) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const fetchApi = () => {
        fetch(`https://api.rawg.io/api/games?key=4205330c18e34b6ab39eec8889d15a01&search=${search}`)
  .then(response => response.json())
  .then(data =>  {
      setResults(data.results)   
      console.log(data)
    })
    }

    const mapResults =  () => {
        
        return results.map((game, index) => {
            
            return (
                <div>
                <Card style={{ backgroundColor: '#333', borderColor: '#BB86FC', marginTop:"2em"}}>
                <CardHeader className='cardHeader'>{game.name}</CardHeader>
                <CardImg top width="100%" className='cardImage' src={game.background_image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Released:<br/>{game.released}</CardTitle>
                    <CardText>
                        <p className="genres">Genres:  
                        {
                            game.genres.map((genre, index) => {
                                return (
                                    <> {genre.name} </>
                                )
                            })
                        }
                        </p>
                    </CardText>
                    <CardText>
                    <p className="platforms">
                        Platforms: {platformMapper(game)}
                        </p>
                    </CardText>
                </CardBody>
            <Button>Add to my List</Button>
        </Card>
        </div>
            )
        })
    }
    
    const platformMapper = (game) => {
        if (game.platforms) {
        game.platforms.map((platform, index) => {
        let plats = platform.platform.name
        if (plats.includes('Xbox') || plats.includes('PC') || plats.includes('Playstation') || plats.includes('Nintendo') || plats.includes('Wii') || plats.includes('Genesis') || plats.includes('Android')){
            return (
                {plats}
                )
            } 
        }) 
    }
}

    useEffect(() => {
        fetchApi()
    }, [search])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    // }
    
    return (
        <div>
            <Form>
                <FormGroup>
                        <Input className="inputField" placeholder="Search for a game to add to your list!" style={{width:"40em"}} name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </FormGroup>
            </Form>
            <Container style={{paddingTop:"5em"}}>
                <Row className="divCont">
                {mapResults()}
                </Row>
            </Container>
        </div>
    )
    
}

export default ApiFetch;