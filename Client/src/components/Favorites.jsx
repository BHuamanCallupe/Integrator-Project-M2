import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card';
import { filterCards, orderCards } from '../redux/actions';

export const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites);
    const allFavorites = useSelector(state => state.allFavorites);

    const [aux, setaux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        setaux(!aux); // forzamos renderizado
        (allFavorites.length !== 0) && dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        setaux(!aux); // forzamos renderizado
        (allFavorites.length !== 0) && dispatch(filterCards(event.target.value));
    }

    return (
        <>
            <div>
                <div>
                    <select onChange={handleOrder}>
                        <option value={"E"}>Estandar</option>
                        <option value={"A"}>Ascendente</option>
                        <option value={"D"}>Descendente</option>
                    </select>
                    <select onChange={handleFilter}>
                        <option value={"All"}>All</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Genderless"}>Genderless</option>
                        <option value={"unknown"}>unknown</option>
                    </select>
                </div>
            </div>
            {
                allFavorites.length === 0
                    ? <div>You do not have any favorites.</div>
                    :
                    <div>
                        {
                            myFavorites.map((character) => {
                                return <Card {...character} key={uuidv4()}></Card>
                            })
                        }
                    </div>
            }
        </>
    )
}
