import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import New from "./pages/New";
import Update from "./pages/Update";
import Supplier from "./pages/Supplier";
import Order from "./pages/Order";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="new" element={<New />} />
        <Route path="update" element={<Update />} />
        <Route path="supplier" element={<Supplier />} />
        <Route path="order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
