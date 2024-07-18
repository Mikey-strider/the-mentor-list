import { Route, Routes, } from "react-router-dom";



import MentorList from "./components/MentorList";
import MentorDetails from "./components/MentorDetails";
import MentorForm from "./components/MentorForm";
import UpdateMentorForm from "./components/MentorUpdate";
import SignInPage from "./components/SignInPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route
          path="/signin"
          element={<SignInPage isSignUp={false} />}
        />
        <Route
          path="/signup"
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
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
