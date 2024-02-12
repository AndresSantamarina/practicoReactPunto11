import { Form, Row, Container, Col } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioSelect = () => {
  return (
    <article>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Container>
            <Row>
              <Col>
                {" "}
                <Form.Label>Buscar por categoría:</Form.Label>
              </Col>
              <Col>
                {" "}
                <Form.Select aria-label="Default select example">
                  <option>Opciones</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </Container>
        </Form.Group>
      </Form>
      <ListaNoticias />
    </article>
  );
};

export default FormularioSelect;
