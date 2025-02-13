import { Button, Card, Container, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { useEffect } from "react";
import { userRequest } from "./redux/slices/userSlice";
import { IUsersList } from "./redux/types/IUsersList";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loading = useSelector<AppState>((state) => state.user.loading);
  const userData = useSelector<AppState>(
    (state) => state.user.data
  ) as IUsersList[];

  useEffect(() => {
    dispatch(userRequest());
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/${id}`);
  };

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
              {loading ? (
                <tr>
                  <td colSpan={6}>
                    <Spinner animation="border" size="sm" /> Loading...
                  </td>
                </tr>
              ) : (
                userData.map((value) => (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>
                      {value.password.charAt(-1) +
                        "*".repeat(value.password.length - 1)}
                    </td>
                    <td
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="primary"
                        onClick={() => handleEdit(value.id)}
                      >
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card>
      </Row>
    </Container>
  );
};

export default UsersList;
