<<<<<<< HEAD
import React, { Component } from "react";
import PropTypes from "prop-types";
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
>>>>>>> c67cf705694d80926d194853d982242e3eb87041
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup
} from "reactstrap";

import Battlefield from "./Battlefield";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import { GameContext } from "../context/gameContext";

import "../styles/Card.css";

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      life: 0,
<<<<<<< HEAD
      isToggleSidebarOn: false
=======
      cards,
      top_row: [],
      bottom_row: [],
      isToggleSidebarOn: false,
>>>>>>> c67cf705694d80926d194853d982242e3eb87041
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
<<<<<<< HEAD
=======
  }

  componentWillReceiveProps(nextProps) {
    const { cards } = nextProps;
    this.setState({
      cards,
    });
>>>>>>> c67cf705694d80926d194853d982242e3eb87041
  }

  increment(x) {
    this.setState({
      life: Number(this.state.life) + Number(x)
    });
  }

  decrement(x) {
    this.setState({
      life: Number(this.state.life) - Number(x)
    });
  }

  mainTitle() {
    return (
      <Jumbotron className="d-none d-sm-flex mh-100 pt-0 pb-0 mb-0">
        <div className="mh-100">
          <h6 className="display-5 mh-100">Main Board</h6>
          <p className="d-none d-sm-flex">View of your battlefield.</p>
        </div>
      </Jumbotron>
    );
  }

  handleToggleSidebarClick() {
    this.setState({
      isToggleSidebarOn: !this.state.isToggleSidebarOn
    });
  }

  render() {
    const { life, isToggleSidebarOn } = this.state;
    const { cards } = this.context.gameState;
    const FULL_LENGTH = 12;
    const SHORTER_LENGTH = 10;
    const battfieldFieldColumnLength = isToggleSidebarOn
      ? FULL_LENGTH
      : SHORTER_LENGTH;

    // console.log(this.context.gameState);

    return (
      <Container
        fluid
        className="main-container d-flex flex-column vh-100 mh-100 w-100 p-0 m-0"
      >
        <Row
          className="top-bar-row-wrapper p-0 m-0 d-flex flex-row flex-grow-1 flex-shrink-1"
          style={{
<<<<<<< HEAD
            "flex-basis": "10%",
            overflow: "auto"
=======
            'flex-basis': '10%',
            overflow: 'auto',
>>>>>>> c67cf705694d80926d194853d982242e3eb87041
          }}
        >
          <Col
            xs="10"
            className="p-0 m-0"
            style={{
<<<<<<< HEAD
              "flex-basis": "100%"
=======
              'flex-basis': '100%',
>>>>>>> c67cf705694d80926d194853d982242e3eb87041
            }}
          >
            <NavigationBar
              life={life}
              active="battlefield"
              handleToggleSidebarClick={this.handleToggleSidebarClick}
            />
          </Col>

          <Col xs="2" className="flex-grow-1 flex-shrink-1">
            <Row>
              <Col className="d-inline-flex mh-100 h-100">
                <p5>Life: </p5> <p5 className="">{life}</p5>
              </Col>
              <Col xs="12" className="d-inline-flex">
                <ButtonGroup className="d-flex" size="sm">
                  <Button
                    outline
                    color="success"
                    onClick={() => this.increment(1)}
                    type="submit"
                  >
                    +1
                  </Button>
                  <Button
                    outline
                    color="warning"
                    onClick={() => this.decrement(1)}
                    type="submit"
                    block
                  >
                    -1
                  </Button>
                </ButtonGroup>
              </Col>
              <Col className="d-inline-flex">
                <ButtonGroup className="d-flex" size="sm">
                  <Button
                    outline
                    color="primary"
                    onClick={() => this.increment(5)}
                    type="submit"
                  >
                    +5
                  </Button>
                  <Button
                    outline
                    color="danger"
                    onClick={() => this.decrement(5)}
                    type="submit"
                    block
                  >
                    -5
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          className="cards-sidebar-row-wrapper flex-row flex-grow-5 flex-shrink-1 p-0 m-0"
          style={{
            "flex-basis": "90%"
          }}
        >
          <Col
            xs={battfieldFieldColumnLength}
            className="battlefield-col p-0 m-0 flex-grow-1 flex-shrink-1 flex-wrap"
          >
            {/* Battlefield area. */}
            <Battlefield useStubs={false} cards={cards} />
          </Col>
          {/* Sidebar for exile,graveyard,hand,library  */}
          {!isToggleSidebarOn && (
            <Col xs="2" className="sidebar-col p-0 m-0">
              <Container
                fluid
                className="sidebar-col-container mh-100 h-100 mw-100 w-100 p-0 m-0"
              >
                <Row className="sidebar-col-container-row mh-100 h-100 mw-100 w-100 p-0 m-0">
                  <Col className="side-bar-col-container-row-col w-100 mw-100 flex-shrink-3 p-0 m-0">
                    <Sidebar cards={cards} />
                  </Col>
                </Row>
              </Container>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

GameArea.contextType = GameContext;

GameArea.propTypes = {
  cards: PropTypes.array.isRequired
};

export default GameArea;
