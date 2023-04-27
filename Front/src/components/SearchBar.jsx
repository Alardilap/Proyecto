import { useState } from 'react'
import Styles from "./SearchBar.module.css"

function SearchBar({ onSearch }) {

   const [character, setCharacter] =useState('')

const handleChange = (event) =>{
   
   setCharacter(event.target.value)
}

   return (
      <div>
         <input className={Styles.input}type='search' value={character} onChange={handleChange}/>
         <button className={Styles.botonagregar} onClick={() =>onSearch(character)}>Agregar</button>
      </div> 
   );
}
export default SearchBar;