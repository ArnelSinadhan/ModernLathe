import { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const autoCad = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/img/Screenshot 1.png`,
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/img/Screenshot 2.png`,
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/img/Screenshot 3.png`,
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/img/Screenshot 4.png`,
    },
  ];

  return (
    <Container xl>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {autoCad.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              src={item.img}
              alt={`Image ${item.id}`}
              className="autocadimg"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
