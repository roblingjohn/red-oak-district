import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "./Box";

const Boxes = () => {
  const boxData = [
    { displayName: "The Program", route: "/program" },
    { displayName: "The Neighborhood", route: "/neighborhood" },
    { displayName: "The Future", route: "/future" },
    { displayName: "The Events", route: "/events" },
  ];
  return (
    <div>
      <Row className="px-0">
        {boxData.map((box) => (
          <Col lg="3" xs="6" className="p-0">
            <Box
              displayName={box.displayName}
              route={box.route}
              className="col"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Boxes;
