import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import UsersList from "./UsersList";
import EditUser from "./EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/:id" element={<EditUser />} />
          <Route path="/lists" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
