# Avaliação - back-end
</hr>

## Inicialização

#### Após fazer o clone, para iniciar o servidor, que será ouvido na porta local 8080, execute os seguintes comandos no terminal: 


### npm
~~~npm
    npm install 
    npm start 
~~~
### yarn
~~~yarn
    yarn add
    yarn start
~~~



<br/>
<hr/>


| Method|Endpoint |Payload|Response|Action|
|:-:	|:-:	|:-:	|:-:	|:-:	|
|POST|/ordenaLista|{"listas":{"salaN":[Number],"salaS":[String]}}|{"listas":{"salaN":[Lista Ordernada],"salaS":[Lista Ordenada]}} 	            |  Retorna listas ordenadas
|GET| /interlace?| ----- | boolean | verifica se os intervalos se sobrepõe  


