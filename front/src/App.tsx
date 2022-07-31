import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { 
  Main,
  Sachunsung,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sachungsung" element={<Sachunsung />} />
      </Routes>
    </Router>
  );
}

export default App;
