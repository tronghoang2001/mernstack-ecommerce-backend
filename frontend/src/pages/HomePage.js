import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";
const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
    "Sneakers",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={3} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <div>
              <CategoryCardComponent key={idx} category={category} idx={idx} />
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
