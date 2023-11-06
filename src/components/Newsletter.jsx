import React from "react";
import { Col, Row } from "react-bootstrap";

const Newsletter = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className="d-flex justify-content-end pr-3">
            <div>
              <div>Logo goes here</div>
              <h4>Get our newsletter!</h4>
              <input placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </Col>
        <Col>
          <div class="pl-3">
            <h3>Connect with Us!</h3>
            <div>Insta and Facebook logos</div>
            <p>T: 404-555-0123</p>
            <p>E: redoak@cityofsouthfultonga.gov</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Newsletter;
