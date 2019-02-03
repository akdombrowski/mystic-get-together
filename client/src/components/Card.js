import React, { Component } from "react";
import Axios from "axios";
import "../styles/Card.css";

import "bootstrap/dist/js/bootstrap.bundle.js";
import $ from "jquery";

import { Button, Container, Row, Col, Media } from "reactstrap";

class Card extends React.Component {
  url =
    "https://api.scryfall.com/cards/1d9d8732-9ff2-42e4-bdfc-723cb6a76969?format=json";

  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
      isTapped: false
    };
    this.toggle = this.toggle.bind(this);
    this.isCreature = this.isCreature.bind(this);
    this.tap = this.tap.bind(this);
    this.cardArtRef = React.createRef();
  }

  static parseScryfallData(data) {
    if (data) {
      const jsonObj = data;
      const name = jsonObj.name;
      const mana_cost = jsonObj.mana_cost;
      const image_uri_art_crop = jsonObj.image_uris.art_crop;
      const type_line = jsonObj.type_line;
      const set = jsonObj.set;
      const set_image =
        "https://img.scryfall.com/sets/" + set + ".svg?1545627600";
      const oracle_text = jsonObj.oracle_text;
      const power = jsonObj.power;
      const toughness = jsonObj.toughness;
      const cardInfo = [
        name,
        mana_cost,
        image_uri_art_crop,
        type_line,
        set_image,
        oracle_text,
        power,
        toughness
      ];
      return cardInfo;
    }
  }

  static async getScryFallCardInfo(url) {
    const responsePromise = async () => {
      try {
        const response = await Axios.get(url);
        return response.data;
      } catch (e) {
        console.error(e);
        return null;
      }
    };

    const data = await responsePromise();
    return Card.parseScryfallData(data);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  componentDidMount() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
    this.isCreature();
  }

  isCreature() {
    if (this.props.power) {
      this.setState(state => ({
        isCreature: String(this.props.power + "/" + this.props.toughness)
      }));
    } else {
      this.setState(state => ({
        isCreature: "non-creature"
      }));
    }
  }

  tap() {
    const node = this.cardArtRef.current;
    if (!node) {
      console.log(this.cardArtRef);
      return;
    }
    if (this.state.tap) {
      console.log(node);
      node.style.transform = "rotate(0)";
      console.log("untap rotate(0)");
      this.setState(state => {
        return {
          tap: false
        };
      });
    } else {
      console.log(node);
      node.style.transform = "rotate(90deg)";
      console.log("tap rotate(90)");
      this.setState(state => {
        return {
          tap: true
        };
      });
    }
  }

  render() {
    return (
      <Container fluid className="mh-100">
        <div ref={this.cardArtRef}>
          <Container
            fluid
            className="card-container d-flex flex-column justify-content-center border rounded p-0 m-0"
            style={{
              overflowY: "auto",
              overflowX: "hidden"
            }}
          >
            {/* Card name and mana cost row */}
            <Row
              className="card-name-cost-row d-inline-flex flex-nowrap mw-100 no-gutters flex-nowrap justify-content-between flex-grow-0 flex-shrink-0"
              style={{
                fontSize: "1vw"
              }}
            >
              {/* Card name */}
              <Col
                xs="7"
                className="card-name-col p-0 m-0 justify-content-start"
              >
                <Button
                  tabIndex="0"
                  type="Button"
                  color="link"
                  size="sm"
                  className="card-name-pop text-dark font-weight-bold bg-transparent m-0 p-0 align-top text-left text-nowrap mh-100 h-100 mw-100 w-100"
                  data-toggle="popover"
                  data-trigger="focus"
                  title={this.props.name}
                  data-content={this.props.name}
                  id="Popover"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  {this.props.name}
                </Button>
              </Col>

              {/* Mana cost */}
              <Col
                xs="5"
                className="card-mana-cost-col p-0 m-0 justify-content-end"
              >
                <Button
                  tabIndex="0"
                  type="Button"
                  color="link"
                  size="sm"
                  block
                  className="card-cost-pop text-dark font-weight-bold bg-transparent m-0 p-0 justify-end align-start text-right text-nowrap mh-100 h-100 w-100 mw-100"
                  data-toggle="popover"
                  data-trigger="focus"
                  title={this.props.name}
                  data-content={this.props.cost}
                  id="Popover"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontSize: ".75vw"
                  }}
                >
                  {this.props.cost}
                </Button>
              </Col>
            </Row>
            {/* Image row with a col wrapper to control size of image */}
            <Row
              className="card-art-row justify-content-center mw-100 w-100 no-gutters flex-grow-1 flex-shrink-1"
              style={{
                "flex-basis": "40%",
                minHeight: "40%",
                maxHeight: "80%",
                overflow: "hidden"
              }}
            >
              <Col xs="12" className="card-art-col p-0 mh-100">
                <Button
                  tabIndex="0"
                  type="Button"
                  color="link"
                  size="sm"
                  block
                  className="card-cost-pop text-dark font-weight-bold bg-transparent m-0 p-0 justify-end align-start text-right text-nowrap mh-100 h-100 w-100 mw-100"
                  data-trigger="focus"
                  data-content="tap"
                  onClick={this.tap}
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontSize: ".75vw"
                  }}
                >
                  <Media
                    className="card-art-image img-fluid d-block mx-auto h-100 mh-100 w-100 mw-100"
                    alt="Card Art"
                    src={this.props.image}
                  />
                </Button>
              </Col>
            </Row>

            {/* Row for type and set logo */}
            <Row
              className="card-type-set-row justify-content-around no-gutters flex-grow-1 flex-shrink-5"
              style={{
                fontSize: ".5vw",
                "flex-basis": "1vw",
                maxHeight: "1vw"
              }}
            >
              {/* Card type */}
              <Col
                className="card-type-col d-flex flex-grow-10 flex-shrink-1 align-items-center px-0 h-100 mh-100 mw-100 w-100 text-left"
                style={{
                  "flex-basis": "50%",
                  overflow: "hidden"
                }}
              >
                <Button
                  tabIndex="0"
                  type="Button"
                  color="link"
                  block
                  size="sm"
                  className="card-type-pop text-dark font-weight-bold bg-transparent m-0 p-0 align-items-start align-top text-left text-wrap mh-100 h-100 mw-100 w-100"
                  data-toggle="popover"
                  data-trigger="focus"
                  data-content={this.props.type}
                  id="Popover"
                  value={this.props.type}
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  {this.props.type}
                </Button>
              </Col>
              <Col
                className="flex-shrink-10 set-image-col align-items-baseline flex-grow-1 p-0 m-0 mh-100"
                style={{
                  "flex-basis": "10%",
                  overflow: "hidden"
                }}
              >
                {/* Card set image */}
                <Media
                  className="set-image img-fluid d-block mx-auto align-self-baseline"
                  alt="Set Image"
                  src={this.props.set}
                  style={{
                    maxHeight: "100%"
                  }}
                />
              </Col>
            </Row>

            {/* Card text */}
            <Row
              className="card-text-row no-gutters align-items-stretch flex-grow-1 flex-shrink-10"
              style={{
                fontSize: ".75vw",
                "flex-basis": "1.5vw",
                maxHeight: "1.5vw"
              }}
            >
              <Col
                xs="12"
                className="card-text-col d-flex align-items-stretch mh-100 h-100 m-0 p-0"
              >
                <Button
                  tabIndex="0"
                  type="Button"
                  color="link"
                  block
                  size="sm"
                  className="card-text-pop text-dark font-weight-bold bg-transparent m-0 p-0 align-top text-left text-wrap mh-100 h-100 mw-100 w-100"
                  data-toggle="popover"
                  data-trigger="focus"
                  title={this.props.name}
                  data-content={this.props.text}
                  id="Popover"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    borderWidth: "thin"
                  }}
                >
                  {this.props.text}
                </Button>
              </Col>
            </Row>

            {/* Power and toughness if creature */}
            <Row
              className="card-power-toughness-row d-inline-flex no-gutters justify-content-between flex-grow-1 flex-shrink-0"
              style={{
                overflow: "hidden",
                flexBasis: "1.4vw",
                fontSize: ".75vw",
                maxHeight: "1.5vw"
              }}
            >
              <Col className="card-power-toughness-col px-0 d-flex flex-shrink-0 flex-grow-2 justify-content-end">
                <Button
                  tabIndex="0"
                  type="Button"
                  color="link"
                  block
                  size="sm"
                  className="card-power-toughness text-dark font-weight-bold bg-transparent m-0 p-0 align-top text-right text-wrap mh-100 h-100 mw-100 w-100"
                  data-toggle="popover"
                  data-trigger="focus"
                  title={this.props.name}
                  data-content={this.state.isCreature}
                  id="Popover"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  {/* Don't forget to add the divider when inputing power and toughness */}
                  {this.props.power}
                  {this.props.divider}
                  {this.props.toughness}
                  {String()}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Card;
