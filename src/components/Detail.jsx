import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom/dist'
import { removeCurrentCharacter } from '../redux/actions';

export const Detail = () => {
  const currentCharacter = useSelector(state => state.currentCharacter);
  const dispatch = useDispatch();

  const { name, status, species, gender, origin, image } = currentCharacter;
  const { id } = useParams();

  const handleRemoveCurrentCharacter = () =>{
    dispatch(removeCurrentCharacter());
  }
  
  return (
    <>
      <div>  
          <h2>Name: {name}</h2>
          <h2>Status: {status}</h2>
          <h2>Species: {species}</h2>
          <h2>Gender: {gender}</h2>
          <h2>Origin: {origin?.name}</h2>
          <img src={image} alt={name} />
          <Link to={`/home`}><h2 onClick={handleRemoveCurrentCharacter}>Back to Home</h2></Link>
        </div>
      
    </>
  )
}
