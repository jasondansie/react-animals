import './AboutPage.css'
import { Outlet, Link } from 'react-router-dom';

const AboutPage = (props) => {
    return (
        <div>

            <h1>The About Page</h1>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/birds">Birds</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
            <h3>The teacher made me add this page.</h3>
            <Outlet />
        </div>
    )
}

export default AboutPage;