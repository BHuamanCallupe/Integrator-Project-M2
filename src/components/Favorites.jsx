import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

export const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites);

    return (
        <>
            {
                myFavorites.length > 0 && myFavorites.map((character) => {
                    return <Card {...character} key={character.id}></Card>
                })
            }
            {
                myFavorites.length === 0 && <div>You do not have any favorites.</div>
            }
        </>
    )
}
