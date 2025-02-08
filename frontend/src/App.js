import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/loginSignup/Login";
import SignUp from "./component/loginSignup/SignUp";
import EntryPage from "./component/entry/EntryPage";
import Home from "./component/homepage/Home"

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router> 
   // <Home/>
  );
}

export default App;
