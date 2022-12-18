import './AboutPage.css'
import { Outlet, Link } from 'react-router-dom';

const AboutPage = (props) => {
  return (
    <div>
      <h1>The About Page</h1>
      <h3>The teacher made me add this page.</h3>
      <Outlet />
    </div>
  )
}

export default AboutPage;