import './App.module.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import styles from './App.module.css'
import Nav from './components/Nav'
import Detail from './components/Detail'
import About from './components/About'
import { useState } from 'react'
import { Route, Routes, useLocation, useNavigate} from "react-router-dom"
import Form from './components/Form';
import { useEffect } from 'react';
import Favorite from './components/Favorite'
import SearchBar from './components/SearchBar.jsx'


function App () {

const location= useLocation();
const navigate =  useNavigate();


const [characters, setCharacters] = useState([]);

const [access,setAccess] =useState(false);

const username ="alardilap@gmail.com"
const password= "password1";

const login = (userData)=>{
  if(userData.username ===username && userData.password===password){
setAccess(true);
navigate('/home');
  }
}

useEffect(() => {
  !access && navigate('/');
}, [access]); 

const onSearch = (character)=>{
  
  
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char)=>char.id===data.id)) {
            
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('El personaje ya fue agregado');
          }
       })
       .catch(err=>err.message)
 }

const onClose= (id)=>{
setCharacters(characters.filter(character => character.id !== id)
)
}


  return (
    <div className="bg-image">    
      {location.pathname === "/" ? <Form login={login}/> :   <Nav onSearch={onSearch}/>}
       
    <div className={styles.fondo}>
      <Routes>
        {/* <Route path="/" element={<Form login={login}/>}></Route> */}
        <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}></Route> 
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:detailId" element={<Detail/>}></Route>
        <Route path='/favorites' element={<Favorite/>}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App;
