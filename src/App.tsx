import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import UsersList from "./UsersList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Register />} />
          <Route path="/lists" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
