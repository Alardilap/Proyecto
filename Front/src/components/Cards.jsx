import Card from './Card';
import styles from './Cards.module.css'


function Cards({ characters, onClose, id}) {

   return <div  className={styles.carta}>
{
            
               characters.map(({id, name, species, gender, image}) => {
                  return <Card  
                  id={id}
                  name={name} 
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={()=>onClose(id)}/>
               })}
         </div>  
}
export default Cards
