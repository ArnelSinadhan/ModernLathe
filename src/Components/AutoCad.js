import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container xl>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="/img/Screenshot 1.png"
            alt="Image 1"
            className="autocadimg"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/img/Screenshot 2.png"
            alt="Image 2"
            className="autocadimg"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/img/Screenshot 3.png"
            alt="Image 3"
            className="autocadimg"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
