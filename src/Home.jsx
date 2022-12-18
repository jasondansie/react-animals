import './Home.css';
import { Outlet, Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div className='home'>
      <h1>Home</h1>
      <section className='images'>
        <div>
          <label htmlFor="">Animals</label>
          <Link to="/animals"><img src="https://source.unsplash.com/500x400/?animals" alt="animals" /> </Link>
        </div>
        <div>
          <label htmlFor="">Birds</label>
          <Link to="/birds"><img src="https://source.unsplash.com/500x400/?birds" alt="birds" /></Link>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Home;