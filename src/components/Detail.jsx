import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom/dist'
import { fetch_hook } from '../hooks/fetch-hook';

export const Detail = () => {
  const [currentCharacter, setcurrentCharacter] = useState({});
  const { name, status, species, gender, origin, image } = currentCharacter;
  const { id } = useParams();

  useEffect(() => {
    fetch_hook(id, currentCharacter, setcurrentCharacter);
    return setcurrentCharacter({});
  }, [id])

  return (
    <>
      {
        currentCharacter && <div>
          <h2>{name}</h2>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin?.name}</h2>
          <img src={image} alt='' />
          <Link to={`/`}><h2>Back</h2></Link>
        </div>
      }
    </>
  )
}
