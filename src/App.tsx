import "./styles.css";
import { useEffect } from "react";
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
import { QuizListing } from "./components/Quiz-Listing/Quiz-Listing";

import { useQuiz } from "./contexts/Quiz-Context";

export default function App() {
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://Quiz-App-API.sayuk.repl.co/quiz2`
        );
        console.log(response.data, "ressss");

        dispatch({ type: "SET_DATA", payload: { data: response.data } });
      } catch (err) {
        console.log(err, "errr");
      }
    })();
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/quiz" element={<QuizListing />} />
        </Routes>
      </Router>
    </div>
  );
}
