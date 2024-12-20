import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Error from "./components/Error";
import Forget from "./components/Forget";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
/*************  ✨ Codeium Command ⭐  *************/
/**
 * The main component of the application.
 *
 * This component renders a Router with the following routes:
 *
 * - "/" and "/signup": Signup component
 * - "/login": Login component
 * - "/forget-password": Forget component
 * - "/about": AboutUs component
 * - "/*": Error component
 *
 * @returns {React.ReactElement} The rendered component.
 */
/******  6455667a-8fb8-4dcb-ab5d-1ded4fc10871  *******/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
