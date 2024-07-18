import { useEffect, useState } from "react";
import { SERVER_URL } from "../util";
import { Link } from "react-router-dom";
// import {Mission} from "./Mission";

const MentorList = () => {

  const [mentors, setMentors] = useState([]);
  async function getMentors() {
    const res = await fetch(`${SERVER_URL}/mentors`);
    setMentors(await res.json())
  }
  useEffect(() => { getMentors() }, []);
  // <Mission />

  return (
    <>
      <h1>The Mentor List</h1>
      <div className="form-container">
        <Link to={`/mentors/add`}>
          <button>Add a Mentor</button>
        </Link>
        <h1>Mentors List</h1>
        <ul>
          {mentors?.length ? (
            mentors?.map((mentor) => (
              <li key={mentor._id}><Link to={`/mentors/${mentor._id}`}>{mentor.mentorName}</Link></li>
            ))
          ) : (
            <h2>That mentor was not found</h2>
          )}
        </ul>
      </div>
    </>
  );
};
export default MentorList;