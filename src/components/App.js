<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/signup" element={<Signup></Signup>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/quiz" element={<Quiz></Quiz>}></Route>
          <Route exact path="/result" element={<Result></Result>}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

=======
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
>>>>>>> 0693b64e0b7091181a3a8abd09e5350344012238
export default App;
