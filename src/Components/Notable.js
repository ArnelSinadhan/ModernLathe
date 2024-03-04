import PhotoAlbum from "react-photo-album";
import { Container } from "react-bootstrap";

const notable1 = [
  {
    src: `${process.env.PUBLIC_URL}/img/M0.1.jpg`,
    width: 800,
    height: 600,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M0.2.jpg`,
    width: 1600,
    height: 900,
  },
];

const notable2 = [
  {
    src: `${process.env.PUBLIC_URL}/img/M1.1.jpg`,
    width: 800,
    height: 600,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M1.2.jpg`,
    width: 1600,
    height: 900,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M1.3.jpg`,
    width: 1600,
    height: 900,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M1.4.jpg`,
    width: 1600,
    height: 900,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M1.5.jpg`,
    width: 1600,
    height: 900,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M1.6.jpg`,
    width: 1600,
    height: 900,
  },
  {
    src: `${process.env.PUBLIC_URL}/img/M1.7.jpg`,
    width: 1600,
    height: 900,
  },
];

const Notable = () => {
  return (
    <Container fluid>
      <h2 className="m-5">
        Projects <span style={{ color: "#FFC905" }}>Notable</span>
      </h2>

      {/* Project 1 */}
      <Container className="notable-projects mb-5">
        <h2>Clock Mechanism Fabrication</h2>
        <h4>Solar France energy enterprises, Antipolo Rizal</h4>
        <PhotoAlbum layout="rows" photos={notable1} />
      </Container>

      {/* Project 2 */}
      <Container className="notable-projects mb-5">
        <h2>Engine Overhaul (FREE PICK-UP AND)</h2>
        <h4>Rizal & Makati City</h4>
        <PhotoAlbum layout="rows" photos={notable2} />
      </Container>
    </Container>
  );
};

export default Notable;
