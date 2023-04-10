import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import { Nav } from './components/Nav';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "edbd97f8be7f.3c691399771f08fdd9f1";

function App() {

   const [characters, setcharacters] = useState([]);

   const onSearch = (characterID) =>{
      fetch(`${URL_BASE}/${characterID}?key=${API_KEY}`)
         .then( resp => resp.json())
         .then((data) => {
            !data.name && window.alert('¡No hay personajes con este ID!');
            if(characters.find(character => character.id === characterID)) return window.alert('¡Ya se està mostrando el personaje con este ID!');
            data.name && setcharacters([...characters, data]);
         })
   }

   const onClose = (characterID) =>{
      const newCharacters = characters.filter( character => character.id !== characterID);
      setcharacters(newCharacters);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
