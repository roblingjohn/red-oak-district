import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "./Box";

const Boxes = () => {
  const boxData = [
    { displayName: "History", route: "/history" },
    { displayName: "Arts & Culture", route: "/arts" },
    { displayName: "Events", route: "/events" },
    { displayName: "Businesses", route: "/businesses" },
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
