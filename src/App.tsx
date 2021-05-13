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

export default function App() {
  return (
    <div className="App">
      <h1>QUIZ</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}
