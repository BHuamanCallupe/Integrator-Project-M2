import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom/dist";
import { addFav, setCurrentCharacter, removeFav } from "../redux/actions";

export default function Card({ id, name, status, species, gender, image, onClose = () => { }, origin }) {
   
   const [isFav, setisFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   let { pathname } = useLocation();

   const handleFavorite = (event) => {
      if (isFav) {
         setisFav(false);
         dispatch(removeFav(id));
      }
      if (!isFav) {
         setisFav(true);
         dispatch(addFav({ id, name, status, species, gender, image, origin }));
      }
   }

   const handleCurrentCharacter = () =>{
      dispatch(setCurrentCharacter(id));
   }

   const isFavorite = () => {
      myFavorites.find(favorite => favorite.id === id) && setisFav(true);
   }

   useEffect(() => {
      isFavorite();
      return () => {
         setisFav(false);
      }
   }, [])

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {pathname !== "/favorites" && <button onClick={() => onClose(id)}>X</button>}
         <Link to={`/detail/${id}`}><h2 onClick={handleCurrentCharacter}>{name}</h2></Link>
         <h2>{`status: ${status}`}</h2>
         <h2>{`species: ${species}`}</h2>
         <h2>{`gender: ${gender}`}</h2>
         <h2>{`origin: ${origin?.name}`}</h2>
         <img src={image} alt='' />
      </div>
   );
}
