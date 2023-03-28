import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../../src/styles/category-card.css";

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "/images/category/category_1.png",
    "/images/category/category_2.jpg",
    "/images/category/category_3.png",
    "/images/category/category_4.png",
    "/images/category/category_5.png",
    "/images/category/category_6.jpg",
    "/images/category/category_7.jpg",
    "/images/category/category_8.png",
    "/images/category/category_9.jpg",
  ];
  return (
    <Card className="category">
      <Card.Img
        crossOrigin="anonymous"
        variant="top"
        src={images[idx]}
        style={{ width: "100%", height: "250px" }}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
