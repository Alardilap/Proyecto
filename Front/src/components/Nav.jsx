import SearchBar from "./SearchBar";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "./img/Rickrosado.png";
import { NavLink } from "react-router-dom";
function Nav ({onSearch}) {


    return (

       <nav className={Styles.barrabuscadora}>
        <SearchBar
         onSearch={onSearch}
         />
         <Link to="/home">
         <button className={Styles.boton1}>Home</button>
         </Link>
      
         <Link to="/about">
         <button className={Styles.boton2}>About</button>
         </Link>   
         <Link to="/favorites">
         <button className={Styles.botonfavorites}>Favorites</button>
         </Link>
        <Link to="/"><img className={Styles.imagen}
         src={logo}/>
</Link> 


         <NavLink to="/detail/:detailId"
         className={({isActive}) => isActive ? "active" : "inactive"}>
         </NavLink>
       </nav>
    );
 }
 export default Nav;
