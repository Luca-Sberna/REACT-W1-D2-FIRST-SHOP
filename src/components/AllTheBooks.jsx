import { Component } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";

class AllTheBooks extends Component {
  state = {};
  getRandomNumber = () => {
    return Math.random() - 0.5;
  };

  render() {
    const allTheBooks = [
      ...fantasy,
      ...history,
      ...horror,
      ...romance,
      ...scifi,
    ];
    allTheBooks.sort(this.getRandomNumber);

    return (
      <Container className="py-5 justify-content-center">
        <Row className="gap-3 justify-content-center">
          {allTheBooks.map((book, index) => (
            <Card
              style={{ width: "19.19rem" }}
              key={`book-${index}`}
              className="p-2"
            >
              <Card.Img variant="top" src={book.img} className=" rounded" />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price + "$"}</Card.Text>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="primary">Add</Button>
              </Card.Body>
            </Card>
          ))}
          ;
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;