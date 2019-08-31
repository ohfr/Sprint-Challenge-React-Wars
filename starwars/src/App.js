import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import CharacterCard from './components/Characters/CharacterCard';
import PageButton from './components/Buttons/PageButton';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(res => {
      
      setChar(res.data.results)
      // console.log(res.data)
    
    })
    .catch(err => console.log(err))
  }, [page]);

  const pageChange = val => {
    if (page > 0) {
      val === "next" ? setPage(page + 1) : setPage(page - 1);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard chars={char} />
      <PageButton value={"prev"} changePage={pageChange} />
      <PageButton value={"next"} changePage={pageChange} />
    </div>
  );
}

export default App;
