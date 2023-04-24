import { useEffect, useState } from 'react';
import Cards from './components/Cards.jsx';
import axios from "axios";
import { Nav } from './components/Nav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About.jsx';
import { Detail } from './components/Detail.jsx';
import { NotFound } from './components/NotFound.jsx';
import { Form } from './components/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, onLogin, onLogout, removeCharacter, removeFav } from './redux/actions.js';
import { Favorites } from './components/Favorites.jsx';

function App() {
   const [access, setaccess] = useState(false);

   let { pathname } = useLocation();
   let navigate = useNavigate();
   let dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const characters = useSelector(state => state.characters);

   const onSearch = (characterID) => {
      axios.get(`http://localhost:3001/rickandmorty/character/${characterID}`)
         .then(({ data }) => {
            if (!data.name) {
               alert('¡No hay personajes con este ID!');
               return;
            } else {
               if (characters.find(character => character.id === characterID)) {
                  alert('¡Ya se està mostrando el personaje con este ID!');
               } else {
                  data.name && dispatch(addCharacter(data.id));
               }
            }
         })
         .catch( reason => console.log(reason.message))
   }

   const onClose = (characterID) => {
      dispatch(removeCharacter(characterID));
      myFavorites.find(favorite => favorite.id === characterID) && dispatch(removeFav(characterID));;
   }

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setaccess(data);
         access && navigate('/home');
      });

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
