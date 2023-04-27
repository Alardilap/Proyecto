import { DELETE_FAV, ADD_FAVORITES,FILTER,ORDER } from "./types";

const initialState={
 myFavorites:[],
 allCharacters:[],
}
function reducer  ( state= initialState , {type,payload}){
    switch(type){
        case ADD_FAVORITES:
            return{
             ...state ,
                myFavorites: [...state.myFavorites,payload],
                allCharacters:[...state.allCharacters,payload],
            } 

            case DELETE_FAV:
            return{
                 ...state,
                myFavorites: state.myFavorites.filter(personaje=>personaje.id !== payload ),
                allCharacters: state.myFavorites.filter(personaje=>personaje.id !== payload ) 
            }
    
          case FILTER:
        const allCharactersFiltered= state.allCharacters.filter(char=>char.gender ===payload)
        return{
            ...state,
            myFavorites:
          
             allCharactersFiltered
        }
            // const { allCharacters }= state;
            // return{
            //     ...state,
            //     myFavorites:allCharacters.filter(character=>character.gender ===payload),
            // }
            
            // // if (payload === "Default") {
            // //     return {
            // //         ...state,
            // //         myFavorites: [...state.allCharacters]
            // //     }
            // // }
            // const filterCopy = [...state.allCharacters]
            // const filteredCopy = filterCopy.filter((char) => {
            //     return char.gender === payload
            // })
            // return {
            //     ...state,
            //     myFavorites: filteredCopy
            // }
            
            case ORDER:
            //     return{ 
            //         ...state,
            // myFavorites:  payload === "Ascendente" ? 
            // allCharacters.sort((a,b)=>a.id<b.id)
            // : allCharacters.sort((a,b)=>b.d>a.id)
                  
            //     }
            const orderCopy = [...state.allCharacters]
            const orderedCopy = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1
                }
                if (a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                myFavorites: orderedCopy
            }
            break;



    default:
     return{
        ...state
    }
}}
export default reducer;