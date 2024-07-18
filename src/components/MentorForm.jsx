import { useState } from "react";
import { create } from "../services/mentorServices";
import { useNavigate } from "react-router-dom";

const MentorForm = () => {
  const [formData, setFormData] = useState({
    mentorName: "",
    educationType: "",
    aboutMe: "",
  });

  const navigate = useNavigate();

  async function handleAddMentor(formData) {
    try {
      const data = await create(formData);
      console.log(data, " --- added mentor");
      navigate(`/mentors/${data._id}`);
    } catch (err) {
      console.error(err);
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    handleAddMentor(formData);
    setFormData({
      mentorName: "",
      educationType: "",
      aboutMe: "",
    });
  }
  return (
    <>
      <h1>The Mentor List</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="mentorName"> Name: </label>
          <input
            id="mentorName"
            name="mentorName"
            value={formData.mentorName}
            onChange={handleChange}
            required
          />
          <label htmlFor="educationType"> Education: </label>
          <input
            id="educationType"
            name="educationType"
            value={formData.educationType}
            onChange={handleChange}
          />
          <label htmlFor="aboutMe"> About Me: </label>
          <textarea
            id="aboutMe"
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
          />
          <button type="submit">Add New Mentor</button>
        </form>
      </div>
    </>
  );
};
export default MentorForm;