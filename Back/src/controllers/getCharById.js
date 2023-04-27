const URL= "https://rickandmortyapi.com/api/";
const axios= require("axios");

const getCharById =(req,res)=>{
const {id} = req.params

axios.get(`${URL}/character/${id}`)
.then((response)=> {const {id,name,species,gender,image }=response.data;

res.status(200).json({ id,name,species,gender,image })

})
.catch((error) =>{
    res.status(500).send("aqui estoy")


});
}


module.exports= getCharById








// const axios = require("axios");

// const getCharById= (res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result =>result.data)
//     .then(data=>{
//         const character={
//         id:data.id,
//        name: data.name,
//        image:data.image,
//        gender:data.gender,
//        species:data.species,
       
//         }
//         res
//         .writeHead(200,{"Content-type": "application/json"})
//         .end(JSON.stringify(character))
//     })
//     .catch(err=>err.message)
// }

// module.exports= getCharById