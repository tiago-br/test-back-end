# Avaliação - back-end
</hr>


|   Method	  |  Endpoint 	  |   Payload 	  |  Response  |    Action  	|
|:-:	|:-:	|:-:	|:-:	|:-:	|
|   POST	|   /ordenaLista	|   {"listas":{"salaN":[Number],"salaS":[String]}}	|  {"listas":{"salaN":[Lista Ordernada],"salaS":[Lista Ordenada]}} 	|  Retorna uma lista ordernada na ordem numérica crescente e </br> outra lista na ordem alfabética
|   GET  | /interlace? | {"intervaloA":[Number, Number], "intervaloB":[Number, Number]} | boolean | verifica se os intervalos se interlaçam ou sobrepõe
