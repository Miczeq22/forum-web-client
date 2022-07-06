import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SinglePostPage } from "./app/single-post/single-post.page";
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
      <Route path="/post" element={<SinglePostPage />} />
    </Routes>
  );
}

export default App;
