import { Container } from "react-bootstrap";
import ControlledCarousel from "./AutoCad";
import Notable from "./Notable";

const Projects = () => {
  return (
    <section className="py-3">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        Projects
        <span className="d-flex justify-content-center">
          <div
            style={{
              borderTop: "5px solid black",
              width: "80px",
              margin: "5px",
            }}
          ></div>
        </span>
      </h2>
      <h2 className="m-5">
        AutoCad | <span style={{ color: "#FFC905" }}>Solid Works Designs</span>
      </h2>
      <ControlledCarousel />
      <Notable />
    </section>
  );
};

export default Projects;
