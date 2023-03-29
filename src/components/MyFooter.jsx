import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const Footer = (props) => (
  <Container fluid className="text-center pb-3 pt-5">
    <ListGroup horizontal className="justify-content-center pb-2">
      <ListGroupItem>contatti</ListGroupItem>
      <ListGroupItem>info</ListGroupItem>
      <ListGroupItem>dove siamo</ListGroupItem>
    </ListGroup>
    <address>via....</address>
    <span>data + brand©️</span>
  </Container>
);

export default Footer;
