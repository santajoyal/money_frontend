import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PiggyTrackers from "./pages/PiggyTrackers";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PiggyTrackers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
