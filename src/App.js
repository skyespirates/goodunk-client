import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Landing />} />
        <Route path="/profile" element={<Landing />} />
        <Route path="/add" element={<Landing />} />
        <Route path="/success" element={<Landing />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
