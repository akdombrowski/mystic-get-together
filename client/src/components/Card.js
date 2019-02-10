import React, { Component } from "react";
import ReactDOM from "react-dom";
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
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    this.props.tapAction(this.props.colID, this.props.cardID);
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

  render() {
    return (
      <Container
        fluid
        id="cardContainer"
        className="card-container d-flex flex-column justify-content-center border rounded mh-100 h-100 p-0 m-0"
        style={{
          overflow: "hidden",
          lineHeight: "1vh"
        }}
      >
        {/* Card name and mana cost row */}
        <Row
          noGutters
          className="card-name-cost-row d-inline-flex mh-100 mw-100 flex-nowrap justify-content-between flex-grow-1 flex-shrink-5"
          style={{
            flexBasis: ".85vw"
          }}
        >
          {/* Card name */}
          <Col xs="7" className="card-name-col m-0 justify-content-start">
            <Button
              tabIndex="0"
              type="Button"
              color="link"
              size="sm"
              inlineBlock
              className="card-name-pop inline-block text-dark font-weight-bold bg-transparent mh-100 m-0 p-0 align-top text-left text-nowrap"
              data-toggle="popover"
              data-trigger="focus"
              title={this.props.name}
              data-content={this.props.name}
              id="Popover"
              style={{
                overflow: "hidden",
                border: "none",
                lineHeight: ".8vw"
              }}
            >
              <span
                style={{
                  textOverflow: "ellipsis",
                  fontSize: ".75vw"
                }}
              >
                {this.props.name}
              </span>
            </Button>
          </Col>

          {/* Mana cost */}
          <Col
            xs="5"
            className="card-mana-cost-col m-0 justify-content-end"
          >
            <Button
              tabIndex="0"
              type="Button"
              color="link"
              size="sm"
              block
              className="card-cost-pop text-dark font-weight-bold bg-transparent p-0 m-0 justify-end align-start text-right text-nowrap"
              data-toggle="popover"
              data-trigger="focus"
              title={this.props.name}
              data-content={this.props.cost}
              id="Popover"
              style={{
                overflow: "hidden",
                lineHeight: "1vw"
              }}
            >
              <span
                style={{
                  textOverflow: "ellipsis",
                  fontSize: ".75vw"
                }}
              >
                {this.props.cost}
              </span>
            </Button>
          </Col>
        </Row>

        {/* Card Art Image row */}
        <Row
          noGutters
          className="card-art-row justify-content-center px-1 d-flex flex-grow-5 flex-shrink-1"
          style={{
            flexBasis: "80%",
            overflow: "hidden"
          }}
        >
          <Col xs="12" className="card-art-col d-flex">
            <Button
              tabIndex="0"
              type="Button"
              color="link"
              size="sm"
              className="card-art-btn bg-transparent d-flex m-0 p-0 justify-end align-start mh-100 h-100 w-100 mw-100"
              data-trigger="focus"
              data-content="tap"
              onClick={this.handleImageClick}
              style={{
                lineHeight: "inherit"
              }}
            >
              <Media
                className="card-art-image img-fluid d-inline-flex mx-auto"
                alt="Card Art"
                src={this.props.image}
              />
            </Button>
          </Col>
        </Row>

        {/* Row for type and set logo */}
        <Row
          noGutters
          className="card-type-set-row justify-content-around  flex-grow-1 flex-shrink-5"
          style={{
            flexBasis: "5%",
            maxHeight: "1vw"
          }}
        >
          {/* Card type */}
          <Col className="card-type-col d-flex flex-grow-1 flex-shrink-1 align-items-center text-left">
            <Button
              tabIndex="0"
              type="Button"
              color="link"
              block
              size="sm"
              className="card-type-pop text-dark font-weight-bold bg-transparent mh-100 m-0 p-0 align-items-start align-top text-left text-wrap"
              data-toggle="popover"
              data-trigger="focus"
              data-content={this.props.type}
              id="Popover"
              value={this.props.type}
              style={{
                textOverflow: "hidden",
                border: "none",
                lineHeight: "inherit"
              }}
            >
              <span
                className="d-flex flex-start"
                style={{
                  textOverflow: "ellipsis",
                  fontSize: ".5vw"
                }}
              >
                {this.props.type}
              </span>
            </Button>
          </Col>
          <Col
            className="flex-shrink-10 set-image-col align-items-baseline d-flex justify-content-end flex-grow-1 m-0"
            style={{
              "flex-basis": "10%",
              overflow: "hidden"
            }}
          >
            {/* Card set image */}
            <Media
              right
              className="set-image img-fluid d-inline-flex  mh-100 m-0 pr-1"
              alt="Set Image"
              src={this.props.set}
              style={{
                maxWidth: "1vw"
              }}
            />
          </Col>
        </Row>

        {/* Card text */}
        <Row
          noGutters
          className="card-text-row  align-items-stretch flex-grow-1 flex-shrink-1"
          style={{
            fontSize: ".75vw",
            flexBasis: "10%",
            maxHeight: "1.5vw"
          }}
        >
          <Col
            xs="12"
            className="card-text-col d-flex align-items-stretch mh-100 h-100 m-0"
          >
            <Button
              tabIndex="0"
              type="Button"
              color="link"
              block
              size="sm"
              className="card-text-pop text-dark bg-transparent m-0 p-0 align-top text-left text-wrap mh-100 h-100 mw-100 w-100"
              data-toggle="popover"
              data-trigger="focus"
              title={this.props.name}
              data-content={this.props.text}
              id="Popover"
              style={{
                borderWidth: "thin",
                lineHeight: "inherit"
              }}
            >
              <span
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: "1vw"
                }}
              >
                {this.props.text}
              </span>
            </Button>
          </Col>
        </Row>

        {/* Power and toughness if creature */}
        <Row
          noGutters
          className="card-power-toughness-row d-inline-flex  justify-content-between flex-grow-1 flex-shrink-1"
          style={{
            overflow: "hidden",
            flexBasis: "1.4vw",
            fontSize: ".75vw",
            maxHeight: "1.5vw"
          }}
        >
          <Col className="card-power-toughness-col d-flex flex-shrink-0 flex-grow-2 justify-content-end">
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
                border: "none",
                lineHeight: "inherit"
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
    );
  }
}

export default Card;
