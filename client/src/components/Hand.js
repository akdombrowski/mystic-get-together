import React, { Component } from "react";
import "../styles/Hand.css";
import Card from "./Card";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup
} from "reactstrap";

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.generateSevenCards = this.generateSevenCards.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
  }

  // Fetch a card given it's scryfall api url.
  async fetchCard(url) {
    const cardInfo = await Card.getScryFallCardInfo(url);
    this.setState(state => {
      var arr = state.cards.slice();
      arr.push(cardInfo);
      return {
        cards: arr
      };
    });
  }

  generateSevenCards() {
    var cards = [];
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/1d9d8732-9ff2-42e4-bdfc-723cb6a76969?format=json"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/cc61a398-cf16-415b-b3cf-897217dc7cc9?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/e16e4f85-9611-4d5f-a7d9-4a5961dd7182?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/54a0afaa-f99f-4c7a-9fa1-c6a46dfb2a29?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/086a0591-718f-4a33-a5f5-e9265468c3ad?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/3ed39bd7-d059-4a44-9f03-0f628dcdb119?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/b0e0ef27-3db2-4976-b9db-13e3d7cd795d?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/544a06f8-75fe-41b6-81dc-c9a0358f03c5?format=json&pretty=true"
      )
    );
    cards.push(
      this.fetchCard(
        "https://api.scryfall.com/cards/06750380-a9a9-4ab4-a03b-d4d35a31132a?format=json&pretty=true"
      )
    );
    return cards;
  }

  componentDidMount() {
    this.generateSevenCards();
  }

  render() {
    return (
      <Container fluid className="hand-parent-container mh-100 h-100">
        <Row className="hand-container flex-nowrap"
        style={{maxHeight: "100%"}}>
          {this.state.cards.map(cardInfo => {
            return (
              <Col
                xs="4"
                style={{
                  "min-width": "80px",
                  "max-height": "100%"
                }}
                className="no-gutters flex-nowrap"
              >
                <Col xs="11" className="mh-100 h-100 no-gutters">
                  <Card
                    name={cardInfo[0]}
                    cost={cardInfo[1]}
                    image={cardInfo[2]}
                    type={cardInfo[3]}
                    set={cardInfo[4]}
                    text={cardInfo[5]}
                    power={cardInfo[6]}
                    divider={cardInfo[6] ? "/" : ""}
                    toughness={cardInfo[7]}
                  />
                </Col>
                <Col xs="1" className="mh-100 h-100 no-gutters" />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Hand;
