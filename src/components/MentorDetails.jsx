import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../util";



const MentorDetails = () => {
  const [mentor, setMentor] = useState();
  const [isInvalidId, setIsInvalidId] = useState(false);
  const { mentorId } = useParams();
  const navigate = useNavigate();

  async function getMentor() {
    try {
      const res = await fetch(`${SERVER_URL}/mentors/${mentorId}`);
      setMentor(await res.json())
      setIsInvalidId(false)
    } catch (err) {
      console.log(err)
      setIsInvalidId(true);
    }
  }

  useEffect(() => { getMentor() }, []);

  async function handleRemoveMentor(id) {
    await fetch(`${SERVER_URL}/mentors/${id}`, { method: 'DELETE' });
    navigate('/mentors');
  }

  if (isInvalidId) {
    return (
      <div>
        <h1>Information could not be found</h1>
      </div>
    );
  }

  return mentor ? (
    <>
      <Link to={'/mentors'}>
        <button>Back to Mentor List</button>
      </Link>
      <Link to={`/mentors/add`}>
        <button>Add another Mentor</button>
      </Link>
      <h1>{mentor.mentorName}</h1>
      <h2>Education: {mentor.educationType}</h2>
      <h2>About Me: {mentor.aboutMe}</h2>
      <Link to={`/mentors/${mentor._id}/edit`}>
        <button>Update Mentor {mentor.userName}</button>
      </Link>
      <button onClick={() => handleRemoveMentor(mentor._id)}>Remove Mentor</button>
    </>
  ) : null;
};
export default MentorDetails;