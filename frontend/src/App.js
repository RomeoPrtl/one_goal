import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import MyGoals from "./views/MyGoals";
import NewGoals from "./views/NewGoals";
import Progression from "./views/Progression";
import Logbook from "./views/Logbook";
import NewMessage from "./views/NewMessage";
import Message from "./views/Message";
import Goals from "./views/Goals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mygoals" element={<MyGoals />} />
          <Route path="/newgoals" element={<NewGoals />} />
          <Route path="/progression" element={<Progression />} />
          <Route path="/logbook" element={<Logbook />} />
          <Route path="/newmessage" element={<NewMessage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
