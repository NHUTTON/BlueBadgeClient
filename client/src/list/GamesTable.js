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

const GamesTable = (props) => {
    console.log(props, "GamesTable.js")
  const [gamesList, setGamesList] = useState([]);
  console.log(gamesList);

//   const deleteTable = (game) => {
//     fetch(`http://localhost:5002/games/delete${game}`, {
//       method: "DELETE",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     }).then(() => props.fetchGames());
//   };

  const fetchGames = (e) => {
    e.preventDefault();
    let url = 'http://localhost:5002/games/mine';
    // let url = props.baseURL + "/games/mine";
    fetch(url, {
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
          </Card>
        </div>
      );
    });
  };


  return (
    <>
      <h3 className="listHeader">Your Favorite Games</h3>
      <hr />
      <Container style={{ paddingTop: "3em" }}>
          <Button onClick={fetchGames}>View my list</Button>
        <Row className="divCont">{gameMapper()}</Row>
      </Container>
    </>
  );
};

export default GamesTable;
