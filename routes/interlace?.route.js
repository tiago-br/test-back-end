const { Router } = require("express");
const route = Router();

//função para checar se os intervalos se laçam ou se sobrepõe
const checkInterval = (intervaloA, intervaloB) => {
  if(intervaloB[0]===intervaloA[0] || intervaloB[1]===intervaloA[0] || intervaloA[1]===intervaloB[0] || intervaloA[1]===intervaloB[1]){
    return true
  }else if(intervaloB[0] < intervaloA[0] && intervaloB[1] > intervaloA[0]){
    return true
  }else if(intervaloB[0] < intervaloA[1] && intervaloB[1] > intervaloA[1]){
    return true
  }else if(intervaloA[0] < intervaloB[0] && intervaloA[1] > intervaloB[0]){
    return true
  }else if(intervaloA[0] < intervaloB[1] && intervaloA[1] > intervaloB[1]){
    return true
  }else{
    return false
  }
}

route.get("/interlace?", (req, res) => {
  
  const intervaloA = req.query.intervaloA
  const intervaloB = req.query.intervaloB

  res.json(checkInterval(intervaloA, intervaloB));
});


module.exports = route;


