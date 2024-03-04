import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-3">
      <Container fluid className="fluid d-flex flex-column home-page ">
        <div className="home-title ">
          <h2 className="text-center display-1">
            HOME OF ECONOMICAL AND <br />
            QUALITY SERVICES
          </h2>
          <p className="text-center display-6">
            MACHINE SHOP, ENGINE REBUILDER, FABRICATION
            <br /> HEAVY EEQUIPMENT, ENGINEERING WORKS.
          </p>

          <Button className="btn-inquire">
            <Link to="/contactUs">INQUIRE HERE</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
