# ENGWEB2024-Normal

Para começar corri para o docker os seguintes comandos, de modo a criar o container ENGWEB2024-Normal4

    $ sudo docker run -d -p 27017:27018 --name ENGWEB2024-Normal4 mongo

Depois copiei para uma pasta temporária:

    $ sudo docker cp contratos.json ENGWEB2024-Normal4:/tmp

E fiz exec:

    $ sudo docker exec -it [NomeADefinir] bash

Depois disso importei a base de dados:
    
    $ mongoimport -d contratos -c contratos --jsonArray /tmp/contratos.json

Após isso e conectando-me à base de dados:

    $ use contratos

Podendo agora testar as queries descritas no ficheiro queries.txt.




Para criar as respetivas API's utilizei o comando:
    
    $ npx express-generator --view=pug myapp
Substituindo myapp por ex1 e ex2.


Dentro de cada API criei as pastas models e controllers com os respetivos ficheiros .js
No exercício 1 criei as diversas rotas no contratos.js da pasta routes, as diversas models no contratos.js da pasta models e os diversos controllers no contratos.js da pasta controllers.

Com o mongo a correr e fazendo o comando:
    
    $ npm start 

E abrindo a porta que é indicada.



Para o ex2 fiz o mesmo procedimento com a adição de uma view pug detalhes para o primeiro ponto da questão. Criei também a rota para o :id que pedia no segundo ponto da questão. O comando para correr é o mesmo que em cima





