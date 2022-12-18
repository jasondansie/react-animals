import './App.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { animalsList } from './animalsList';
import Home from './Home';
import Animals from './Animals';
import Birds from './Birds';
import AboutPage from './AboutPage';

class App extends Component {
  state = {
    animals: animalsList,
    likes: 0,
    search: "",
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home
            animals={animalsList}
          />} />
          <Route path='/animals' element={<Animals
            animals={animalsList}
          />} />
          <Route path='/birds' element={<Birds />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
