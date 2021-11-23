const {Router} = require('express')
const route = Router()

route.post("/ordenaLista", (request, response) => {
    // recebe um payload no formato abaixo:
    // {
    // listas: {
    //  salaN: [ 1, 5, 7, 8 ],
    //  salaS: [ “a”, “x”, “n” ]
    //  }
    //}
    const payload = request.body;
    const { salaN, salaS } = payload.listas;
    const copySalaN = [...salaN];
    const copySalaS = [...salaS];
  
    //ordenando salaN em ordem numérica crescente
  
    const salaNordenada = copySalaN.sort((a, b) => a - b);
  
    //ordenando salaS em ordem alfabética
  
    const salaSordenada = copySalaS.sort((a, b) => a.localeCompare(b));
  
    
    response.json({
      listas: {
        salaN: [...salaNordenada],
        salaS: [...salaSordenada],
      },
    });
  });

  module.exports = route
  