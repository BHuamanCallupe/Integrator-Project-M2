import { useEffect, useState } from 'react';
import Cards from './components/Cards.jsx';
import { Nav } from './components/Nav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About.jsx';
import { Detail } from './components/Detail.jsx';
import { NotFound } from './components/NotFound.jsx';
import { Form } from './components/Form.jsx';
import { fetch_hook } from './hooks/useFetch.js';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, onLogin, onLogout, removeCharacter, removeFav } from './redux/actions.js';
import { Favorites } from './components/Favorites.jsx';

const EMAIL = "benny@gmail.com";
const PASSWORD = "123456";

function App() {

   const [characters, setcharacters] = useState([]);
   const [access, setaccess] = useState(false);

   let { pathname } = useLocation();
   let navigate = useNavigate();
   let dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const storeCharacters = useSelector(state => state.characters);

   const onSearch = (characterID) => {
      fetch_hook(characterID, characters, setcharacters);
      !storeCharacters.find( character => character.id === characterID) && dispatch(addCharacter(characterID));
   }

   const onClose = (characterID) => {
      const newCharacters = characters.filter(character => character.id !== characterID);
      setcharacters(newCharacters);
      dispatch(removeCharacter(characterID));
      myFavorites.find(favorite => favorite.id === characterID) && dispatch(removeFav(characterID));;
   }

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setaccess(true);
         // dispatch(onLogin());
         navigate("/home");
      } else {
         alert("Access denied. User not registered.")
      }
      
   }

   const logout = () => {
      // dispatch(onLogout());
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
            <Route path='/favorites' element={<Favorites></Favorites>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
      </div>
   );
}

export default App;
