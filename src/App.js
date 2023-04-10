import { useState } from 'react';
import Cards from './components/Cards.jsx';
import { Nav } from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About.jsx';
import { Detail } from './components/Detail.jsx';
import { fetch_hook } from './hooks/fetch-hook.jsx';
import { NotFound } from './components/NotFound.jsx';

function App() {

   const [characters, setcharacters] = useState([]);

   const onSearch = (characterID) =>{
      fetch_hook(characterID, characters, setcharacters);
   }

   const onClose = (characterID) =>{
      const newCharacters = characters.filter( character => character.id !== characterID);
      setcharacters(newCharacters);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Routes>
            {/* <Route path='/' element={<About></About>}></Route> */}
            <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
            <Route path='/*' element={<NotFound></NotFound>}></Route>
         </Routes>
      </div>
   );
}

export default App;
