# Avaliação - back-end
</hr>


| Method|Endpoint |Payload|Response|Action|
|:-:	|:-:	|:-:	|:-:	|:-:	|
|POST|/ordenaLista|{"listas":{"salaN":[Number],"salaS":[String]}}|{"listas":{"salaN":[Lista Ordernada],"salaS":[Lista Ordenada]}} 	            |  Retorna listas ordenadas
|GET| /interlace?| {"intervaloA":[Number, Number], "intervaloB":[Number, Number]} | boolean | verifica se os intervalos se sobrepõe   
