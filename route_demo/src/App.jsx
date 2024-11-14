import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <h1>Main Page</h1>
      <nav style={{ backgroundColor: "lightgray" }}>
        <Link to="/">
          <div>Main</div>
        </Link>
        <Link to="/Profile"><div>Profile</div></Link>
        <Link to="/About">
          <div>About</div>
        </Link>
      </nav>
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
