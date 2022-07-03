import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Registration } from "./components/auth/Registration";
import { Home } from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={<Registration isOpen onClickToggle={() => {}} />}
      />
    </Routes>
  );
}

export default App;
