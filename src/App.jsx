import './App.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { animalsList, birds } from './animalsList';
import Home from './Home';
import Animals from './Animals';
import Birds from './Birds';
import AboutPage from './AboutPage';
import Layout from './Layout';

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
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home
              animals={animalsList}
            />} />
            <Route path='/animals' element={<Animals
              animals={animalsList}
            />} />
            <Route path='/birds' element={<Birds
              birds={birds}
            />} />
            <Route path='/about' element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
