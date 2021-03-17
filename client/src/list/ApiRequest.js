import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, CardImg, CardHeader, Container, Row, Col} from 'reactstrap';

import xbox from '../assets/xbox.png'

const ApiFetch = (props) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    // console.log(results)

    const fetchApi = () => {
        fetch(`https://api.rawg.io/api/games?key=4205330c18e34b6ab39eec8889d15a01&search=${search}`)
  .then(response => response.json())
  .then(data =>  {
      setResults(data.results)
    })
    }

    const mapResults =  () => {
        
        return results.map((game, index) => {
            let platformLength = game.platforms.length;
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
                        Platforms: 
                        {
                          (game.platforms !== null)
                            ? game.platforms.map((platform, index) => {
                              let currentPlat = platform.platform.name;
                              if (currentPlat.includes('Xbox') || currentPlat.includes('PC') || currentPlat.includes('Playstation') || currentPlat.includes('Nintendo') || currentPlat.includes('Wii') || currentPlat.includes('Genesis') || currentPlat.includes('Android')) {
                                if (index !== 0){
                                  return (
                                    <> {currentPlat}, </>
                                  )
                                } else if (index === (platformLength - 1)) {
                                  return (
                                    <>, {currentPlat}</>
                                  )
                                } else {
                                  return (
                                    <> {currentPlat}</>
                                  )
                                }
                              }
                            })
                            : console.log('platforms is returning an error')
                        }
                      </p>
                    </CardText>
                </CardBody>
            <Button>Add to my List</Button>
        </Card>
        </div>
            )
        })
    }

  // const platformMapper = (game) => {
  //   game.platforms.map((platform, index) => {
  //     let game.platforms.platform.name = platform.platform.name;

  //     if (platform.name) {
  //       if (game.platforms.platform.name.includes('Xbox') || game.platforms.platform.name.includes('PC') || game.platforms.platform.name.includes('Playstation') || game.platforms.platform.name.includes('Nintendo') || game.platforms.platform.name.includes('Wii') || game.platforms.platform.name.includes('Genesis') || game.platforms.platform.name.includes('Android')) {
  //         return (
  //           {game.platforms.platform.name}
  //         )
  //       } else {
  //         console.log('not working');
  //       }
  //     } else {
  //       console.log('game.platforms.platform.name does not exist');
  //     }
  //   })
  // }

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