import { useEffect, useState } from "react";
import { SERVER_URL } from "../util";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMentorForm = () => {
  const [mentor, setMentor] = useState();
  const [isInvalidId, setIsInvalidId] = useState(false);
  const {mentorId} = useParams();
  const navigate = useNavigate()

  async function getMentor(){
    try {
      const res = await fetch(`${SERVER_URL}/mentors/${mentorId}`);
      setMentor(await res.json())
      setIsInvalidId(false)
    } catch (err) {
      console.log(err)
      setIsInvalidId(true);
    }
  }

  useEffect(() => {getMentor()}, []);

  const handleChange = (e) => {
    setMentor({ ...mentor, [e.target.name]: e.target.value});
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentor),
    };
    try {
      const response = await fetch(`${SERVER_URL}/mentors/${mentor._id}`, options);
      if (response.ok) {
        navigate(`/mentors/${mentor._id}`)
      }
    } catch (err) {
      console.log(err);
      console.log(`Error occured while updating the pet | _id: ${mentor._id}`);
    }


  }

  if (isInvalidId){
    return (
      <div>
        <h1>Information could not be found</h1>
      </div>
    );
  }

  return mentor ? (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="mentorName"> Name </label>
        <input
          id="mentorName"
          name="mentorName"
          value={mentor.mentorName}
          onChange={handleChange}
          required
        />
        <label htmlFor="educationType"> Education </label>
        <input
          id="educationType"
          name="educationType"
          value={mentor.educationType}
          onChange={handleChange}
        />
        <label htmlFor="aboutMe"> About Me </label>
        <input
          id="aboutMe"
          name="aboutMe"
          value={mentor.aboutMe}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Confirm profile update {mentor.mentorName}
        </button>
      </form>
    </div>
  ) : null;
};
export default UpdateMentorForm;

