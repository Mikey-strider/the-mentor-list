import { Link } from 'react-router-dom';

const NavBar = ({ user, handleSignout }) => {
  return (
    <>
      <div className='nav-bar'>
        {user ? (
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mentors">The Mentor List</Link></li>
              <li><Link onClick={handleSignout}>Sign Out</Link></li>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </>
  )
}

export default NavBar;