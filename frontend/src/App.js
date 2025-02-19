import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/loginSignup/Login";
import SignUp from "./component/loginSignup/SignUp";
import EntryPage from "./component/entry/EntryPage";
import Home from "./component/homepage/Home"
import DataProvider from './context/DataProvider';
import UserProfile from "./component/user/UserProfile";
import LeaderBoard from "./component/leaderboard/LeaderBoard";
import ChatBot from "./component/chatbot/ChatBot";
import DashBoard from "./component/dashboard/DashBoard";
import Ecommerce from "./component/ecommerce/Ecommerce";
import DoctorAppor from "./component/doctorappor/DoctorAppor";
import HabitJR from "./component/habitjr/HabitJR";
function App() {
  return (
  <DataProvider>
  <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/home" element={<Home/>}/>
           <Route path="/userpro" element={<UserProfile />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/doctorappor" element={<DoctorAppor />} />
        <Route path="/habitjr" element={<HabitJR />} />
      </Routes>
    </Router> 
    </DataProvider>
    
   
  );
}

export default App;
