import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/signin" element={<ForgotPassword />} />
          <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <NavBar />
          </Router>
    </>
  );
}

export default App;
