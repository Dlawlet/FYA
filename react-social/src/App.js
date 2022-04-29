import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from"./pages/login/Login";
import Register from"./pages/register/Register";
import Update from"./pages/update/Update";
import Search from"./pages/search/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home /> } />
        <Route path="/profile/:username" caseSensitive={false} element={user ? <Profile /> : <Login/>} />
        <Route path="/login" caseSensitive={false} element={user ?  <Navigate to ="/" /> : <Login /> } />
        <Route path="/register" caseSensitive={false} element={user ?  <Navigate to ="/" /> :  <Register />} />
        <Route path="/update" caseSensitive={false} element={user ? <Update /> : <Login/>} />
        <Route path="/search/:username" caseSensitive={false} element={user ? <Search /> : <Login/>} />
      </Routes>
    </Router>
  );
}

export default App;