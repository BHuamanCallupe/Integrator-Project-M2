import { useEffect, useState } from 'react';
import Cards from './components/Cards.jsx';
import { Nav } from './components/Nav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About.jsx';
import { Detail } from './components/Detail.jsx';
import { NotFound } from './components/NotFound.jsx';
import { Form } from './components/Form.jsx';
import { fetch_hook } from './hooks/useFetch.js';

const EMAIL = "benny@gmail.com";
const PASSWORD = "123456";

function App() {

   const [characters, setcharacters] = useState([]);
   const [access, setaccess] = useState(false);

   let { pathname } = useLocation();
   let navigate = useNavigate();

   const onSearch = (characterID) => {
      fetch_hook(characterID, characters, setcharacters);
   }

   const onClose = (characterID) => {
      const newCharacters = characters.filter(character => character.id !== characterID);
      setcharacters(newCharacters);
   }

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setaccess(true);
         navigate("/home");
      }
      
   }

   const logout = () => {
      setaccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access])


   return (
      <div className='App'>
         {(pathname !== "/") && <Nav onSearch={onSearch} logout={logout}></Nav>}
         <Routes>
            <Route path='/' element={<Form login={login}></Form>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
      </div>
   );
}

export default App;
