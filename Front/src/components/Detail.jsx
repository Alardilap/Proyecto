import {useState,useEffect} from "react";
import { useParams , Link} from "react-router-dom";
import Styles from "./Detail.module.css";



const  Detail = () =>{

const {detailId}  = useParams();
const [character, setCharacter] = useState({});

  
useEffect(() => {
  // fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
  fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert(" No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);


    return (
     <div className={Styles.details}>
    <p className={Styles.name}>{character?.name}</p>
    <h1 className={Styles.detail}>
    <p>Status:{character?.status}</p>
    <p>Specie:{character?.species}</p>
    <p>Gender:{character?.gender}</p>
    <p>Origin:{character?.origin?.name}</p>
  
    </h1>
    <img className={Styles.image} src={character?.image} ></img>
    <Link  to="/home"> 
             <button className={Styles.button}>Home</button>
            </Link>

         </div>
             
        
    )
 }
 export default Detail;