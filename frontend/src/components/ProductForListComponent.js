import { Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Rating } from "react-simple-star-rating";
import "../styles/product-card.css";

const ProductForListComponent = ({ idx }) => {
  const images = [
    "/images/product/product_1.jpg",
    "/images/product/product_2.jpg",
    "/images/product/product_3.jpg",
    "/images/product/product_4.jpg",
    "/images/product/product_5.png",
  ];
  return (
    <Card className="product">
      <Row>
        <Col lg={5}>
          <Card.Img
            variant="top"
            src={images[idx]}
            style={{
              borderRadius: "20px",
            }}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4">
              $124{""}
              <LinkContainer to="/product-details">
                <Button
                  variant="danger"
                  style={{
                    marginLeft: "15px",
                  }}
                >
                  See Product
                </Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
