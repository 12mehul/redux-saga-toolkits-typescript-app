import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store/store";
import { IRegister } from "../redux/types/IRegister";
import { regRequest, regUpdate } from "../redux/slices/registerSlice";
import { singleUserRequest } from "../redux/slices/userSlice";
import { IUsersList } from "../redux/types/IUsersList";
import { useParams } from "react-router-dom";

const ControlForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const [error, setError] = useState<IRegister>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(
    id ? parseInt(id, 10) : null
  );

  const loading = useSelector<AppState>(
    (state) => state.register.loading
  ) as boolean;
  const data = useSelector<AppState>(
    (state) => state.register.data
  ) as IRegister;
  const user = useSelector<AppState>((state) => state.register.user);
  const singleUserData = useSelector<AppState>(
    (state) => state.user.userDetails
  ) as IUsersList;

  const validateFrom = () => {
    const newErrors: IRegister = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (!data.firstName) {
      newErrors.firstName = "Enter your first name.";
    }
    if (!data.lastName) {
      newErrors.lastName = "Enter your last name.";
    }
    if (!data.email) {
      newErrors.email = "Enter your email.";
    }
    if (!data.password) {
      newErrors.password = "Enter your password.";
    }

    setError(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(regUpdate({ name, value }));
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (loading) return; // Prevent form submission if already loading
    if (validateFrom()) {
      dispatch(regRequest(data));
    }
  };

  useEffect(() => {
    if (user) {
      setSuccessMessage("User registered successfully!");
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  }, [user]);

  useEffect(() => {
    if (!userId) return;
    if (userId) {
      dispatch(singleUserRequest(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (singleUserData) {
      dispatch(
        regUpdate({ name: "firstName", value: singleUserData.firstName })
      );
      dispatch(regUpdate({ name: "lastName", value: singleUserData.lastName }));
      dispatch(regUpdate({ name: "email", value: singleUserData.email }));
      dispatch(regUpdate({ name: "password", value: singleUserData.password }));
    }
  }, [singleUserData]);

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
            {userId ? "Update User" : "Register"}
          </Card.Body>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={data.firstName}
                onChange={handleChange}
                isInvalid={!!error.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {error.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={data.lastName}
                onChange={handleChange}
                isInvalid={!!error.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {error.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={handleChange}
                isInvalid={!!error.email}
              />
              <Form.Control.Feedback type="invalid">
                {error.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontWeight: 500, color: "#30368b" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                value={data.password}
                onChange={handleChange}
                isInvalid={!!error.password}
              />
              <Form.Control.Feedback type="invalid">
                {error.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              style={{ width: "100%" }}
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default ControlForm;
