import { connect, useDispatch } from "react-redux";
import styles from  "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFav } from "./redux/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";


 function Card({onClose,name,species,gender,image,id}) {

const dispatch= useDispatch();

const myFavorites= useSelector(state=> state.myFavorites);

const [isFav,setIsFav]=useState(false);

const handleFavorite=()=>{
   if(isFav=== true){
      setIsFav(false);
      dispatch(deleteFav(id));
   }
   else{
      setIsFav(true);
    dispatch(addFavorites({name,gender,onClose,species,image,id}))
   }
}
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
    
    
      <div className={styles.cartaprin}>
        <div className={styles.botones}>
           {isFav ? (
         <button className={styles.favorite} onClick={handleFavorite}>❤️</button>
      ) : (
         <button className={styles.unf}onClick={handleFavorite}>🤍</button>
      )}</div> 
         <button className={styles.button} onClick={onClose} {...onClose}>X</button>
         <p className={styles.nombres}> 
          <Link className={styles.link} to={`/detail/${id}`}>{name}</Link></p>
         <h2 className={styles.specie}>{species}</h2> 
         <h2 className={styles.gender}>{gender}</h2>
         {/* <h2 className={styles.id}> {id}</h2> */}
         <img className={styles.imagen} src={image} alt="imagenpersonajes" />
        
        
      </div>
      
   );

   }
  
export default Card;
   