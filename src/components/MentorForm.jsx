import { useState } from "react";

const MentorForm = ({ handleAddMentor }) => {
  const [formData, setFormData] = useState({
    userName: "",
    educationType: "",
    aboutMe: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    handleAddMentor(formData);
    setFormData({
      userName: "",
      educationType: "",
      aboutMe: "",
    });
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName"> UserName </label>
        <input
          id="userName"
          name="userName"
          value={formData.name}
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
        <button type="submit">Add New Mentor</button>
      </form>
    </div>
  );
};
export default MentorForm;