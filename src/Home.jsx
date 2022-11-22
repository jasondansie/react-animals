import './Home.css';
import { Outlet, Link } from 'react-router-dom';

const Home = (props) => {
    return (  
        <section>
        <h1>Home</h1>
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
        <section className='images'>
            <Link to="/animals"><img src="https://source.unsplash.com/500x400/?animals" alt="animals" /> </Link>
            <Link to="/birds"><img src="https://source.unsplash.com/500x400/?birds" alt="birds" /></Link>    
        </section>             
        <Outlet />      
    </section>     
    );
}

export default Home;