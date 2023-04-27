import { ADD_FAVORITES,DELETE_FAV,FILTER,ORDER } from "./types";

export const addFavorites=(id)=>{
    return{ type: ADD_FAVORITES, payload: id}
}
export const deleteFav=(id)=>{
    return { type: DELETE_FAV, payload: id}
}
export const filterCards=(status)=>{
return { type: FILTER , payload :status}

}

export const orderCards=(id)=>{
    return{type: ORDER,payload:id }
}