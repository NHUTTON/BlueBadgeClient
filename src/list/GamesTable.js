import React, { useState, useEffect } from "react";

import "./GamesTable.css";

import {
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";

import APIURL from '../helpers/environment'

const GamesTable = (props) => {
    console.log(props, "GamesTable.js")
  const [gamesList, setGamesList] = useState([]);
  console.log(gamesList);

  const deleteTable = (game) => {
    fetch(`http://localhost:5002/games/delete/${game}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchGames());
  };

  const fetchList = (e) => {
    // e.preventDefault();
    let url = 'http://localhost:5002/games/mine';
    // let url = props.baseURL + "/games/mine";
    fetch(`${props.url}/games/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": props.token,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setGamesList(json);
        console.log(json)
      })
  };

  const gameMapper = (props) => {
    return gamesList.map((games, index) => {
      return (
        <div>
          <Card
            style={{
              backgroundColor: "#333",
              borderColor: "#BB86FC",
              marginTop: "2em",
            }}
          >
            <CardHeader className="cardHeader">{games.title}</CardHeader>
            <CardImg
              top
              width="100%"
              className="cardImage"
              src={games.image}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5" className="cardTitleh5">
                Released:
                <br />
                {games.date}
              </CardTitle>
              <CardText>
                <p className="genres">
                  Genres:
                    {games.genres}
                </p>
              </CardText>
              <CardText>
                <p className="platforms">
                  Platforms:
                    {games.platform}
                </p>
              </CardText>
            </CardBody>
            <Button color="danger" onClick={deleteTable} game={games}>Delete from my list</Button>
          </Card>
        </div>
      );
    });
  };


  return (
    <>
      <Container className="parentContainer" style={{ paddingTop: "3em" }}>
      <Label className="listHeader" style={{display:"block", fontSize: "2em",textAlign:"center", textShadow: "4px 4px #121212", color: "#03DAC6"}}>Your Favorite Games List</Label>
      <hr />
          <Button className="listButton" onClick={fetchList} style={{color: "black", backgroundColor: "#BB86FC"}}>View favorites list</Button>
        <Row className="divCont">{gameMapper()}</Row>
      </Container>
    </>
  );
};

export default GamesTable;
