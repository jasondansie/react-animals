import './App.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { animals } from './animals';
import Home from './Home';
import AnimalsPage from './AnimalsPage';
import Birds from './Birds';
import AboutPage from './AboutPage';

class App extends Component {
  state = {
    animals: animals,
    likes: 0,
    search: "",
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home
            animals={animals}
          />} />
          <Route pathanimals='/animals' element={<AnimalsPage
            animals={animals}
          />} />
          <Route path='/birds' element={<Birds />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
