import { Route, Routes, } from "react-router-dom";
import { useState } from "react";
import MentorList from "./components/MentorList";
import MentorDetails from "./components/MentorDetails";
import MentorForm from "./components/MentorForm";
import UpdateMentorForm from "./components/MentorUpdate";
import SignInPage from "./components/SigninPage";
import NavBar from './components/Navbar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from '../src/services/authService';





const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  };


  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path='/signup' element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
      <Routes>
        <Route
          path="/mentorSignin"
          element={<SignInPage isSignUp={false} />}
        />
        <Route
          path="/mentorSignup"
          element={<SignInPage isSignUp={true} />}
        />
        <Route
          path="/mentors/add"
          element={<MentorForm />}
        />
        <Route
          path="/mentors"
          element={<MentorList />}
        />
        <Route
          path="/mentors/:mentorId/edit"
          element={<UpdateMentorForm />}
        />
        <Route path="/mentors/:mentorId" element={<MentorDetails />} />
        {/* <Route path="/*" element={<h1>404</h1>} /> */}
      </Routes>
    </>
  );
};

export default App;
