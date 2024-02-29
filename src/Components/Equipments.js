import { Card, Col, Container, Row } from "react-bootstrap";
import equipmentData from "../data/db.json";

const Equipments = () => {
  return (
    <section className="py-3">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        List of Equipments
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

      <Container fluid className="p-5">
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {equipmentData.equipimg.map((card) => (
            <Col key={card.id} className="mb-4 e-cards">
              <Card
                style={{
                  width: "100%",
                  height: "350px",
                  borderTop: "5px solid #ffc905",
                }}
              >
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + `/${card.imgSrc}`}
                  alt={`Card Image ${card.id}`}
                  height={200}
                />
                <Card.Body className="d-flex justify-content-center flex-column">
                  <Card.Title className="h6 text-center">
                    {card.cardTitle}
                  </Card.Title>
                  <Card.Text className="text-muted text-center">
                    {card.cardText}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Equipments;
