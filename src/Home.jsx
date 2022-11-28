import './Home.css';
import { Outlet, Link } from 'react-router-dom';

const Home = (props) => {

  const removeCardHandler = (name) => {
    console.log("remove card clicked", name);
    const updateArray = props.animals.filter(
      (animal) => animal.name !== name
    )
    return updateArray;
  }

  const addLikeHandler = (name) => {
    console.log("add like clicked");
    this.state((state) => {
      const updateArray = props.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return updateArray;
    });
  }

  const searchHandler = (event) => {
    this.setState({ search: event.target.value })
    console.log(event.target.value);
  }

  const animalFilter = (animals) => {
    props.animals.filter((animal) => {
      return animal.name.includes(this.state.search);
    });
  }

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