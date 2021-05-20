import "./styles.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation
} from "react-router-dom";

import { Quiz } from "./components/Quiz/Quiz";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { Timer } from "./components/Timer/Timer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}
