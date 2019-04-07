import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'reactstrap';

import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import Battlefield from './Battlefield';

import '../styles/Card.css';

class GameArea extends Component {
  constructor(props) {
    super(props);

    const { cards } = this.props;
    this.state = {
      life: 0,
      cards,
      top_row: [],
      bottom_row: [],
      isToggleSidebarOn: false,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { cards } = nextProps;
    this.setState({
      cards,
    });
  }

  increment(x) {
    this.setState({
      life: Number(this.state.life) + Number(x),
    });
  }

  decrement(x) {
    this.setState({
      life: Number(this.state.life) - Number(x),
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
      isToggleSidebarOn: !this.state.isToggleSidebarOn,
    });
  }

  render() {
    const { cards, life, isToggleSidebarOn } = this.state;
    const FULL_LENGTH = 12;
    const SHORTER_LENGTH = 10;
    const battfieldFieldColumnLength = isToggleSidebarOn ? FULL_LENGTH : SHORTER_LENGTH;

    return (
      <Container
        fluid
        className="main-container d-flex flex-column vh-100 mh-100 w-100 p-0 m-0"
      >
        <Row
          className="top-bar-row-wrapper p-0 m-0 d-flex flex-row flex-grow-1 flex-shrink-1"
          style={{
            flexBasis: "10%",
            overflow: "auto"
          }}
        >
          <Col
            xs="10"
            className="p-0 m-0"
            style={{
              flexBasis: "100%"
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
            'flex-basis': '90%',
          }}
        >

          <Col
            xs={battfieldFieldColumnLength}
            className="battlefield-col p-0 m-0 flex-grow-1 flex-shrink-1 flex-wrap"
          >
<<<<<<< HEAD
            {/* Battlefield area. */}
            <Battlefield
              useStubs={false}
              cards={cards}
            />
=======
            {/* Battlefield area. Battlefield is split into two rows. Top and bottom. */}
            <Container
              fluid
              className="cards-rows-container p-0 m-0 mh-100 h-100"
            >
              {/* Top row of battlefield */}
              <Row
                noGutters
                className="top-cards-row h-50 p-0 m-0 border"
                style={{
                  overflowY: "auto",
                  overflowX: "hidden"
                }}
              >
                {/* Main area for cards */}
                <Col
                  xs="12"
                  className="top-cards-row-col d-flex flex-wrap justify-content-start flex-shrink-1 mh-100 h-100 mw-100 w-100 p-0 m-0"
                >
                  <>

                    {cards
                      .filter((card) => _.get(card, 'state.zone') === Zones.BATTLEFIELD)
                      .map((card) => (
                        <Col
                          xs="4"
                          style={{
                            'min-width': '80px',
                            'max-height': '50%',
                          }}
                          className="p-3"
                        >
                          <Col className="card-wrapper-2 mh-100 h-100 p-0">
                            <Col
                              className="card-wrapper-1 d-flex flex-row flex-wrap mh-100 h-100 p-0"
                              id={"col" + index}
                            >
                              <Col
                                xs="12"
                                className="card-wrapper p-0"
                                id={"card" + index}
                                style={{
                                  transformOrigin: "50% 50% -1vw"
                                }}
                              >
                                <Card card={card} />
                              </Col>
                            </Col>
                          </Col>
                        </Col>
                      ))}
                  </>
                </Col>
              </Row>

              {/* Bottom row of cards */}
              <Row className="bottom-cards-row mh-100 h-100 mw-100 w-100 p-0 m-0 border">
                <Col
                  xs="12"
                  className="battlefield-bottom d-inline-flex flex-wrap justify-content-start card-row card-row-top m-0 p-0"
                >
                  {'placeholder text - bottom row'}
                </Col>
              </Row>
            </Container>
>>>>>>> 63cef2972ecbfb36ad7fdf2789a3a406dda062ae
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
                  <Sidebar
                    cards={cards}
                  />
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

GameArea.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default GameArea;
