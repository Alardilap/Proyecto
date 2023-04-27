const URL= "https://rickandmortyapi.com/api";
const axios= require("axios");

const getCharDetail =(req,res)=>{
const {id} = req.params

axios.get(`${URL}/character/${id}`)
.then((response)=> {const { id,name,status,species,gender,image,origin}=response.data;
    res.status(200).json({ id,name,status,species,gender,image,origin})

})
.catch((error) =>{
    res.status(500).send("no funciono")


});
}


module.exports= getCharDetail




// const axios = require("axios");

// const getCharById= (res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result =>result.data)
//     .then(data=>{
//         const character={
//      id:data.id,
//        name: data.name,
//        image:data.image,
//        gender:data.gender,
//        species:data.species,
//        status: data.status,
//        origin:data.origin.name,
      
//         }
//         console.log(data)
//         res
//         .writeHead(200,{"Content-type": "application/json"})
//         .end(JSON.stringify(character))
//     })
//     .catch(err=>
//         res
//         .writeHead(500,{"Content-type":"text/plain"})
//         .end(`El personaje con id:${id} no fue encontrado`)
//         )
// }

