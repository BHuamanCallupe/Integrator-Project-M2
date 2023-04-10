import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

import React from 'react'

export const Nav = ({onSearch}) => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <SearchBar onSearch={onSearch} />
    </>
  )
}


