import { Button, Card, Container, Form, Row } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            width: "32rem",
            padding: "56px",
            border: "1px solid grey",
            borderRadius: "25px",
          }}
        >
          <Card.Body
            style={{
              fontSize: "44px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#30368b",
            }}
          >
            Register
          </Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Button type="submit" variant="dark" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default Register;
