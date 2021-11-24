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

route.get("/interlace?", (request, response) => {
  //receber um payload no seguinte formato:
  // {
  //   intervaloA: [ 20, 40 ],
  //   intervaloB: [ 10, 60 ]
  // }
  const { intervaloA, intervaloB } = request.body;

  response.json(checkInterval(intervaloA, intervaloB));
});

//Acabei fazendo um método POST para esse endpoint como uma opção para a interação 1 B.
//Por receber um body JSON, acredito que poderíamos tentar o método POST para esse caso.
route.post("/interlace?", (request, response)=>{

  const {intervaloA, intervaloB} = request.body

  response.json(checkInterval(intervaloA, intervaloB))
})

module.exports = route;
