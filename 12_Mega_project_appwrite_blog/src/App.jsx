import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { login, logout } from './Store/Features/authentication_Slice';
import AuthenticationService from './Appwrite/Authentication';
import Header from './Components/Header/Header';
import Header_Signup from './Components/Header/Header_Signup';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Need_Sign_up from './Components/Need_Sign_up';
import Signup from './Components/Signip';
import CreatePost from './Components/CreatePost'; // Import the CreatePost component

function App() {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector((state) => state.authentication.status);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AuthenticationService.getCurrentUser();
      if (user) {
        dispatch(login({ userdata: user }));
      } else {
        dispatch(logout());
      }
    };
    checkAuth();
  }, [dispatch]);

  return (
    <Router>
      <div>
        {isUserAuthenticated ? <Header /> : <Header_Signup />}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={isUserAuthenticated ? <Home /> : <Need_Sign_up />} />
          <Route path="/createpost" element={<CreatePost />} /> {/* Add this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
