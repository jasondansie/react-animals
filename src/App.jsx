import './App.css';
import Card from './Card';
import { animals } from './animals';
import { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Animals_page from './AnimalsPage';
import Birds from './Birds';

class App extends Component {
  state = {
    animals: animals,
    likes: 0,
    search: "",
  };

  removeCardHandler = (name) => {
    console.log("remove card clicked", name);
    const updateArray = this.animals.filter(
      (animal) => animal.name !== name
    )
  };

  addLikeHandler = (name) => {
    console.log("add like clicked");
    this.state((state) => {
      const updateArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
    });
  };

  searchHandler = (event) => {
    this.setState({ search: event.target.value })
    console.log(event.target.value);
  }

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.search);
    });

    const animalsList = animalFilter.map((animal) => {
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
      <BrowserRouter>
        <div>
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
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path='/' element={<Home
                animalsList={animalsList}
              />} />
              <Route path='/animals' element={<Animals_page />} />
              <Route path='/birds' element={<Birds />} />
            </Routes>
          </main>
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
