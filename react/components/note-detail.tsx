import { Jumbotron, Container } from "react-bootstrap";
import { useEffect } from "react";

export const NoteDetail = () => {
  useEffect(() => {
    console.log("NoteDetail did mount");
  }, []);

  return (
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};
