import React, { useState, useEffect } from "react";

import './GamesTable.css';

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
  const [gamesList, setGamesList] = useState([]);

  const deleteTable = (game) => {
    fetch(`http://localhost:5002/games/delete${game}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchGames());
  };

  const fetchGames = () => {
    let url = props.baseURL + "/games/mine";
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setGamesList(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const gameMapper = () => {
    return gamesList.map((game, index) => {
      return (
        <div>
          <Card
            style={{
              backgroundColor: "#333",
              borderColor: "#BB86FC",
              marginTop: "2em",
            }}
          >
            <CardHeader className="cardHeader">{game.title}</CardHeader>
            <CardImg
              top
              width="100%"
              className="cardImage"
              src={game.image}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5" className="cardTitleh5">
                Released:
                <br />
                {game.date}
              </CardTitle>
              <CardText>
                <p className="genres">
                  Genres:
                  {game.genre.map((genre, index) => {
                    if (index < 2) {
                      return <> | {genre.name} | </>;
                    }
                  })}
                </p>
              </CardText>
              <CardText>
                <p className="platforms">
                  Platforms:
                  {game.platform !== null
                    ? game.platform.map((platform, index) => {
                        let currentPlat = platform.platform.name;
                        if (
                          currentPlat.includes("Xbox") ||
                          currentPlat.includes("PC") ||
                          currentPlat.includes("Playstation") ||
                          currentPlat.includes("Nintendo") ||
                          currentPlat.includes("Wii") ||
                          currentPlat.includes("Genesis") ||
                          currentPlat.includes("Android")
                        ) {
                          if (index < 2) {
                            return <> | {currentPlat} |</>;
                          } else {
                            return <> | {currentPlat} |</>;
                          }
                        }
                      })
                    : console.log("platforms is returning an error")}
                </p>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

  useEffect(() => {
      fetchGames()
  }, [props.sessionToken])

  return (
    <>
      <h3 className='listHeader'>Your Favorite Games</h3>
      <hr />
      {/* <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Genres</th>
            <th>Available Platforms</th>
          </tr>
        </thead>
        <tbody>{gameMapper()}</tbody>
      </Table> */}
      {gameMapper()}
    </>
  );
};

export default GamesTable;
