import './Birds.css';
import { Outlet, Link } from 'react-router-dom';

const Birds = (props) => {
    return (
        <div>
            <h1>The Birds Page</h1>
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
            <div className='search'>
                <label htmlFor="search">search</label>
                <input type="text" name="search" onChange={props.searchHandler}></input>
            </div>
            <div className='cards'></div>
        <Outlet />
        </div>
    );
}

export default Birds;
