import React from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import './styles/style.scss';

function App() {
  return (
    <div className="App">
 
      <Header/>
      <ToDo/>
      <Footer/>
    </div>
  );
}

export default App;
