import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Pagination,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./redux/store/store";
import { useEffect, useState } from "react";
import { userRequest } from "./redux/slices/userSlice";
import { IUsersList } from "./redux/types/IUsersList";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./components/DeleteModal";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const loading = useSelector<AppState>((state) => state.user.loading);
  const userData = useSelector<AppState>(
    (state) => state.user.data
  ) as IUsersList[];
  const message = useSelector<AppState>(
    (state) => state.user.message
  ) as string;

  useEffect(() => {
    dispatch(userRequest());
  }, []);

  const totalPages = Math.ceil(userData.length / 5);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setPage(pageNumber);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setUserId(0);
    setShow(false);
  };

  const handleEdit = (id: number) => {
    navigate(`/${id}`);
  };

  const handleDelete = (id: number) => {
    if (id) {
      setUserId(id);
      handleShow();
    }
  };

  useEffect(() => {
    if (message) {
      setSuccessMessage(message);
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  }, [message, userData]);

  return (
    <>
      <Container>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
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
                  <th style={{ fontWeight: 500, color: "#30368b" }}>
                    Last Name
                  </th>
                  <th style={{ fontWeight: 500, color: "#30368b" }}>Email</th>
                  <th style={{ fontWeight: 500, color: "#30368b" }}>
                    Password
                  </th>
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
                  userData.slice(page * 5 - 5, page * 5).map((value) => (
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
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(value.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
            <Pagination
              size="lg"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Button
                size="lg"
                variant={page === 1 ? "secondary" : "outline-primary"}
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Prev
              </Button>
              <Badge
                bg="primary"
                style={{ fontSize: "1.5rem", padding: "10px 20px" }}
              >
                {page}
              </Badge>
              <Button
                size="lg"
                variant={page === totalPages ? "secondary" : "outline-primary"}
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </Pagination>
          </Card>
        </Row>
      </Container>
      <DeleteModal show={show} handleClose={handleClose} userId={userId} />
    </>
  );
};

export default UsersList;
