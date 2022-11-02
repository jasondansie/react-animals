import './App.css';
import Card from './Card';
import { animals } from './animals';
import { Component } from 'react';

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
      <div>
        <h1>Animals</h1>
        <div className='search'>
          <label htmlFor="search">search</label>
          <input type="text" name="search" onChange={this.searchHandler}></input>
        </div>
        <div className='cards'>{animalsList}</div>
      </div >
    );
  }
}

export default App;
