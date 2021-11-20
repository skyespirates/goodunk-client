import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { useSelector } from "react-redux";
const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Navigate to="/dashboard" /> : <Landing />}
        />
        <Route path="signup" element={<Signup />} />
        <Route
          path="signin"
          element={currentUser ? <Navigate to="/dashboard" /> : <Signin />}
        />
        <Route
          path="dashboard"
          element={currentUser ? <Dashboard /> : <Navigate to="/signin" />}
        />
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
