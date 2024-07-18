import { useState } from "react";
import { update } from "../services/mentorServices";
import { useNavigate } from "react-router-dom";

const UpdateMentorForm = ({ mentor, handleEditMentor }) => {
  const [formData, setFormData] = useState({
    userName: mentor.userName,
    educationType: mentor.educationType,
    aboutMe: mentor.aboutMe,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  async function handleSubmit(e) {
    e.preventDefault();
    await handleEditMentor(formData, mentor._id);

    setFormData({
      userName: "",
      educationType: "",
      aboutMe: "",
    });
    navigate(`/`);
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName"> UserName </label>
        <input
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <label htmlFor="educationType"> Education </label>
        <input
          id="educationType"
          name="educationType"
          value={formData.educationType}
          onChange={handleChange}
        />
        <label htmlFor="aboutMe"> ABout Me </label>
        <input
          id="aboutMe"
          name="aboutMe"
          value={formData.aboutMe}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Confirm profile update {mentor.userName}
        </button>
      </form>
    </div>
  );
};
export default UpdateMentorForm;

