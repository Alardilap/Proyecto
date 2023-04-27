import { useSelector } from "react-redux";
import styles from "./Favorite.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "./redux/actions";
import logo from "./img/rickgatos.jpg"



const Favorite = ({ onClose })=> {

const dispatch= useDispatch();
const { myFavorites }= useSelector(state=> state);
      

const handleOrder=(event)=>{
    dispatch(orderCards(event.target.value));
}
const handleFilter=(event)=>{
    dispatch(filterCards(event.target.value));
}
return(
    <div className={styles.fondo}>
        <div className={styles.optionfondo}>
        <div className={styles.select}>
       <h1 className={styles.favorites}>Favorites</h1>
{
        <h1 className={styles.order}>Order By:</h1> }
        <select className={styles.orderby}onChange={handleOrder} >
        <option disabled selected hidden>Order By</option>
             <option value="Ascendente" >Ascendente</option>
             <option value="Descendente">Descendente</option>
    </select>
    <i></i>
     {/* <img className={styles.imagenlogo} src={logo}alt="logogatos"/>  */}
{ <h1 className={styles.filter}>Filter By:</h1> }
    <select className={styles.filterby}onChange={handleFilter} >
    <option disabled selected hidden>Filter By</option>

        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">unknown</option>
    </select>
    <i></i>
        </div>
        </div>
        {
         
        myFavorites.map((character)=>{
            return(
        <div className={styles.cartaprin}>
              <button className={styles.button} onClick={onClose} >X</button>
 <h2 className={styles.nombres}>  <Link className={styles.link} to={`/detail/${character.id}`}>{character.name}</Link></h2>
         <h2 className={styles.specie}>{character.species}</h2> 
         <h2 className={styles.gender}>{character.gender}</h2>
         <img className={styles.imagen} src={character.image} alt="imagenpersonajes" />

    </div>
            )

        })
    }
    </div>
)}
 export default Favorite;
    
 
