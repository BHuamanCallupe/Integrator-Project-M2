import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export const Nav = ({onSearch, logout}) => {
  return (
    <>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/favorites"}>Favorites</Link>
      <SearchBar onSearch={onSearch} />
      <button type='button' onClick={() => logout()}>Log out</button>
    </>
  )
}


