import React, { Component } from 'react';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "../styles/Card.css";

import '../styles/Card.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';

import * as sdk from '../js-sdk/sdk';


<<<<<<< HEAD
class Card extends Component {
=======
class Card extends React.Component {
  url =
    "https://api.scryfall.com/cards/1d9d8732-9ff2-42e4-bdfc-723cb6a76969?format=json";

>>>>>>> 63cef2972ecbfb36ad7fdf2789a3a406dda062ae
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard(card) {
    if (card['state.tapped']) {
      sdk.untap(card);
    } else {
      sdk.tap(card);
    }
  }

  CardImage(props) {
    return (
      <div
        style={{
          'background-image': `url(${props.card.getImage()})`,
          'background-repeat': 'no-repeat',
          'background-size': 'contain',
          'grid-row': 'span 6',
        }}
      />
    );
  }

  CardStub(props) {
    const { card } = props;

    return (
<<<<<<< HEAD
      <div
        style={{
          'border-style': 'solid',
          'border-width': '0.1rem',
          height: '100%',
          display: 'grid',
          'grid-template-rows': 'repeat(8, 1fr)',
=======
      <Container
        fluid
        id="cardContainer"
        className="card-container d-flex flex-column justify-content-center border rounded mh-100 h-100 p-0 m-0"
        style={{
          overflow: "hidden",
          lineHeight: "1vh"
>>>>>>> 63cef2972ecbfb36ad7fdf2789a3a406dda062ae
        }}
      >
        {/* Card name */}
        <div
          className="truncated-text"
        >
          {card.getName()}
        </div>
        {/* Card image */}
        <this.CardImage card={card} />
        {/* Shortened type and Power/Toughness */}
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            className="truncated-text"
            style={{
              flex: '0 0 70%',
            }}
          >
            {card.getShortType()}
          </div>
          <div
            style={{
              'font-size': '0.8rem',
              'text-align': 'right',
              flex: '1',
            }}
          >
            {card.getPowerToughness()}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { card, isStub } = this.props;

    if (isStub) {
      return this.CardStub(this.props);
    }

    // Full card component
    return (
      <div
        style={{
          'border-style': 'solid',
          'border-width': '0.1rem',
          height: '100%',
          'max-width': '150px',
          display: 'grid',
          'grid-template-rows': 'repeat(11, 1fr)',
          'grid-template-columns': 'minmax(0, 1fr)',
        }}
      >
        {/* Card name and mana cost */}
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            className="truncated-text"
            style={{
              flex: '0 0 55%',
            }}
          >
            {card.getName()}
            <div
              className="truncated-text-tooltip"
            >
              {card.getName()}
            </div>
          </div>
          <div
            style={{
              'font-size': '0.5rem',
              'text-align': 'right',
              flex: '1',
            }}
          >
<<<<<<< HEAD
            {card.getManaCost()}
          </div>
        </div>
        {/* Card image */}
        <this.CardImage card={card} />
        {/* Card type and set image */}
        <div
=======
            {/* Card set image */}
            <Media
              right
              className="set-image img-fluid d-inline-flex  mh-100 m-0 pr-1"
              alt="Set Image"
              src={card.getSetImage()}
              style={{
                maxWidth: "1vw"
              }}
            />
          </Col>
        </Row>

        {/* Card text */}
        <Row
          className="card-text-row no-gutters align-items-stretch flex-grow-1 flex-shrink-10"
>>>>>>> 63cef2972ecbfb36ad7fdf2789a3a406dda062ae
          style={{
            display: 'flex',
          }}
        >
          <div
            className="truncated-text"
            style={{
              flex: '0 0 70%',
              'font-size': '0.6rem',
            }}
          >
            {card.getType()}
            <div
              className="truncated-text-tooltip"
            >
              {card.getType()}
            </div>
          </div>
          <div
            style={{
              flex: '1',
              'background-image': `url(${card.getSetImage()})`,
              'background-repeat': 'no-repeat',
              'background-size': 'contain',
              'background-position': 'right',
            }}
          />
        </div>
        {/* Card text */}
        <div
          className="card-text"
        >
          {card.getCardText()}
          <div
            className="card-text-tooltip"
          >
            {card.getCardText()}
          </div>
        </div>
        {/* Power/Toughness */}
        <div
          style={{
            'font-size': '0.6rem',
            'text-align': 'right',
          }}
        >
          {card.getPowerToughness()}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({}).isRequired,
  isStub: PropTypes.bool.isRequired,
};

export default Card;
