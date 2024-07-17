import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { create, index, remove, update } from "./services/mentorServices";


import MentorList from "./components/MentorList";
import MentorDetails from "./components/MentorDetails";
import UpdateMentorForm from "./components/MentorUpdate";

const App = () => {
  const [mentors, setMentors] = useState([]);
  const [selectMentor, setSelectMentor] = useState(null);
  const [error, setError] = useState("");
const navigate = useNavigate()

  function updateSelected(mentor) {
    console.log(mentor, " --- mentor selected");
    setSelectMentor(mentor);
  }


  async function handleAddMentor(formData) {
    try {
      const data = await create(formData);
      console.log(data, " --- added mentor");
    } catch (err) {
      console.error(err);
    }
  }
  async function handleEditMentor(formData, id) {
    const editedMentor = await update(formData, id);
    const updatedMentorsArray = mentors.map((mentor) =>
      editedMentor._id === mentor._id ? editedMentor : mentor
    );
    setMentors(updatedMentorsArray);
  }

  async function handleRemoveMentor(id) {
    const removedMentor = await remove(id);
    const updatedMentorsArray = mentors.filter(mentor => id !== mentor._id)
    console.log(removedMentor)
    console.log(updatedMentorsArray)
    setMentors(updatedMentorsArray);
    navigate(`/`);

  }

  useEffect(() => {
    try {
      const fetchMentors = async () => {
        let data = await index();
        setMentors(data);
        setError("");
      };
      fetchMentors();
    } catch (err) {
      console.error(err);
      setError("Sorry We could not find the Mentors you were looking for.");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MentorList mentors={mentors} updateSelected={updateSelected} />}
        />
        <Route
          path="/mentors/:mentorId/edit"
          element={
            <UpdateMentorForm handleEditMentor={handleEditMentor} mentor={selectMentor} />
          }
        />
        <Route path="/mentors/:mentorId" element={<MentorDetails handleRemoveMentor={handleRemoveMentor} mentor={selectMentor} />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
