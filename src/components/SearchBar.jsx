import { useState } from "react";

export default function SearchBar({ onSearch }) {
   
   const [characterID, setcharacterID] = useState("");

   const handleChange = (event) => {
      setcharacterID(event.target.value);
      event.target.value = "";
      event.target.focus();
   }

   const randomCharacter = () =>{
      return Math.floor(Math.random()*826+1);
   }

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => onSearch(characterID)}>Add Character</button>
         <button onClick={() => onSearch(randomCharacter())}>Add Random Character</button>
         {/* <button onClick={randomCharacter}>Add Random Character</button> */}
      </div>
   );
}
