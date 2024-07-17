import { Link, useParams } from "react-router-dom";

const MentorList = ({ mentors, updateSelected }) => {

  return (
    <>
      <h1>Mentors List</h1>
      <ul>
        {mentors?.length ? (
          mentors?.map((mentors) => (
            <link key={mentors._id} to={`/mentors/${mentor._id}`} onClick={() => updateSelected(mentor)}>
              <li>{mentor.userName}</li>
            </link>
          ))
        ) : (
          <h2>That mentor was not found</h2>
        )}
      </ul>
    </>
  );
};
export default MentorList;