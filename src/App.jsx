import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";



import MentorList from "./components/MentorList";
import MentorDetails from "./components/MentorDetails";
import MentorForm from "./components/MentorForm";
import UpdateMentorForm from "./components/MentorUpdate";
import SignInPage from "./components/SignInPage";

const App = () => {
  // const [selectMentor, setSelectMentor] = useState(null);
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // function updateSelected(mentor) {
  //   console.log(mentor, " --- mentor selected");
  //   setSelectMentor(mentor);
  // }



  // async function handleEditMentor(formData, id) {
  //   const editedMentor = await update(formData, id);
  //   const updatedMentorsArray = mentors.map((mentor) =>
  //     editedMentor._id === mentor._id ? editedMentor : mentor
  //   );
  //   setMentors(updatedMentorsArray);
  // }

  // async function handleRemoveMentor(id) {
  //   const removedMentor = await removeMentor(id);
  //   const updatedMentorsArray = mentors.filter(mentor => id !== mentor._id)
  //   console.log(removedMentor)
  //   console.log(updatedMentorsArray)
  //   setMentors(updatedMentorsArray);
  //   navigate(`/`);

  // }

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
          element={ <UpdateMentorForm /> }
        />
        <Route path="/mentors/:mentorId" element={<MentorDetails />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
