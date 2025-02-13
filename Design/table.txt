import { Button, Card, Container, Row, Table } from "react-bootstrap";

const UsersList = () => {
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
            width: "56rem",
            padding: "12px 26px",
            border: "1px solid grey",
            borderRadius: "25px",
          }}
        >
          <Card.Body
            style={{
              fontSize: "32px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#30368b",
              paddingTop: "0px",
            }}
          >
            Users List
          </Card.Body>
          <Table striped bordered hover>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th style={{ fontWeight: 500, color: "#30368b" }}>#</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>
                  First Name
                </th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Last Name</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Email</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Password</th>
                <th style={{ fontWeight: 500, color: "#30368b" }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>*****</td>
                <td
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Row>
    </Container>
  );
};

export default UsersList;
