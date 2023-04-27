
 
 const Validation = (userData) =>{
    let errors={}; 
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username))
{
errors.username="¡El email es invalido!";
}
if(!userData.username)
{
errors.username="¡Este campo debe estar lleno!";
}
if(userData.username.length > 35)
{
errors.username="¡Este campo no debe ser mayor a 35 caracteres!";
}
if(!userData.password.match(/\d/)){
    errors.password="¡Este campo debe incluir al menos un número!";
}
if(userData.password.length < 6 || userData.password.length  >10)
{
    errors.password="¡Este campo requiere un longitud minima de 6 caracteres y maxima de 10 caracteres!";
}
return errors;
 }



 export default Validation; 