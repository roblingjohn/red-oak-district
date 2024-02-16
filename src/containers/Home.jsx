import React from "react";
import { Container } from "react-bootstrap";
import BoxRow from "../components/BoxRow";

const Home = () => {
  return (
    <Container>
      <h1 className="text-center">Historic Red Oak District</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <BoxRow />
    </Container>
  );
};

export default Home;
