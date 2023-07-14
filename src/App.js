import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/Explore'
import { ToastContainer,  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import ForgotPass from './pages/ForgotPass'
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/category/:categoryName' element={<Category />}/>
          <Route path='/category/:categoryName/:listingId' element={<Listing />}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/forgotpassword' element={<ForgotPass/>}/>
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
          <Route path='/create-listing' element={<CreateListing/>}/>
          <Route path='/contact/:landlordId' element={<Contact/>} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>

  );
}

export default App;
