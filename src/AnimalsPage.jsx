import './AnimalsPage.css';
import { Outlet, Link } from 'react-router-dom';

import Card from './Card';

const Animals_page = (props) => {


    const animalsList = props.animals.map((animal) => {
        return (
            <Card
                key={animal.name}
                name={animal.name}
                likes={animal.likes}
                removeCard={() => this.removeCardHandler(animal.name)}
                addLikes={() => this.addlikeHandler(animal.likes)}
            />
        );
    });
    return (

        <div>
            <h1>Animals</h1>
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

export default Animals_page;