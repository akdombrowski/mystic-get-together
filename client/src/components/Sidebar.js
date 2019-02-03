import React, { Component } from "react";

import "../styles/Sidebar.css";

import { Container, Row, Col } from "reactstrap";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container
        fluid
        className="d-flex sidebar-container mh-100 h-100 mw-100 w-100 p-0 m-0"
      >
        <Row className="justify-start sidebar-row mh-100 h-100 mw-100 w-100 p-0 m-0">
          {/* Exile */}
          <Col xs="12" className="border p-1">
            <h6
              className="font-weight-bold text-wrap"
              style={{
                fontSize: "50%"
              }}
            >
              Hand
            </h6>
          </Col>

          {/* Graveyard */}
          <Col xs="12" className="border p-1">
            <h6
              className="font-weight-bold text-wrap"
              style={{
                fontSize: "50%"
              }}
            >
              Exile
            </h6>
          </Col>

          {/* Hand */}
          <Col xs="12" className="border p-1">
            <h6
              className="font-weight-bold text-wrap"
              style={{
                fontSize: "50%"
              }}
            >
              Grave
            </h6>
          </Col>

          {/* Library */}
          <Col xs="12" className="border p-1">
            <h6
              className="font-weight-bold text-wrap"
              style={{
                fontSize: "50%"
              }}
            >
              Library
            </h6>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sidebar;
