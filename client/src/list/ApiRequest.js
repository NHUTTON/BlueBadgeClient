import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, CardImg, CardHeader, Container, Row, Col} from 'reactstrap';
import GamesCreate from './GamesCreate'
import GamesTable from './GamesTable'

import xbox from '../assets/xbox.png'

const ApiFetch = (props) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState([]);
    const [platform, setPlatform] = useState([]);

    const something = {

    }
    
// console.log(results)
    const fetchApi = () => {
        fetch(`https://api.rawg.io/api/games?key=4205330c18e34b6ab39eec8889d15a01&search=${search}`)
        .then(response => response.json())
        .then(data =>  {
            setResults(data.results)
            // console.log(data)
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
                    <CardTitle tag="h5" className="cardTitleh5">Released:<br/>{game.released}</CardTitle>
                    <CardText>
                        <p className="genres">Genres:  
                        {
                            game.genres.map((genre, index) => {
                              if (index < 2) {
                                return (
                                    <> | {genre.name} | </>
                                )
                              }
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
                                if (index < 2){
                                  return (
                                    <> | {currentPlat} |</>
                                  )
                                } else {
                                  return (
                                    <> | {currentPlat} |</>
                                  )
                                } 
                              }
                            })
                            : console.log('platforms is returning an error')
                        }
                      </p>
                    </CardText>
                </CardBody>
           <GamesCreate game={game} token={props.token} />
        </Card>
        </div>
            )
        })
    }
    useEffect(() => {
        fetchApi()
    }, [search])
    
    return (
        <div>
            <Form className="searchForm">
                <FormGroup>
                    <Label className="searchLabel" style={{display:"block", fontSize: "3.2em",textAlign:"center", textShadow: "4px 4px #121212"}}><i>SEARCH FOR YOUR FAVORITE<br/>GAMES!</i></Label>
                    <div style={{height: "8vh"}}></div>
                        <Input className="inputField" placeholder="Search" style={{width:"45em", marginTop:"2em"}} name='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </FormGroup>
            </Form>
            <Container style={{paddingTop:"3em",}}>
                <Row className="divCont">
                {mapResults()}
                </Row>
            </Container>
        </div>
    )
    
}

export default ApiFetch;