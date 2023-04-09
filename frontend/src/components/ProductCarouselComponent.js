import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = ({ bestSellers }) => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/carousel/carousel_1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bestseller in Smartphone Category</h3>

          <p>Samsung Galaxy Z Fold 4</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/carousel/carousel_2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bestseller in Laptops Category</h3>

          <p>HP Victus 16</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px", objectFit: "cover" }}
          src="/images/carousel/carousel_3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bestseller in Tablets Category</h3>

          <p>Apple Ipad Pro 11</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
