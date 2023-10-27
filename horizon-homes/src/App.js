import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListings from "./pages/CreateListings";
import Listing from "./pages/Listing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Route index element={<Profile />} />
              </PrivateRoute>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/createlisting" element={<CreateListings />} />
          <Route path="/category/:categoryName/listingsId" element={<Listing />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <NavBar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
