import { Link } from "react-router-dom";

const MentorDetails = ({ mentor, handleRemoveMentor }) => {
  if (!mentor) {
    return (
      <div>
        <h1>Information could not be found</h1>
      </div>
    );
  }
  return (
    <>
      <h1>{mentor.userName}</h1>
      <h2>Education:{mentor.educationType}</h2>
      <h2>About Me: {mentor.aboutMe}</h2>
      <Link to={`/mentors/${mentor._id}/edit`}>
        <button>Update Mentor {mentor.userName}</button>
      </Link>
      <button onClick={() => handleRemoveMentor(mentor._id)}>Remove Mentor</button>
    </>
  );
};
export default MentorDetails;