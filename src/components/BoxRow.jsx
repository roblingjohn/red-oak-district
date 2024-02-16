import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "./Box";

const Boxes = () => {
  const boxData = [
    { displayName: "History", route: "/history", color: "#E74C3C" },
    { displayName: "Arts & Culture", route: "/arts", color: "#3498DB" },
    { displayName: "Events", route: "/events", color: "#52BE80" },
    { displayName: "Businesses", route: "/businesses", color: "#F8C471" },
  ];
  return (
    <div>
      <Row className="px-0">
        {boxData.map((box) => (
          <Col
            lg="3"
            xs="6"
            className="p-0"
            style={{backgroundColor: box.color}}
          >
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
