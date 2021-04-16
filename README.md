O projeto consiste em um controle de conta corrente bancária que processa solicitações de depósito, resgate e pagamentos. 

As regras presentes nesse softare são: 

Depósito:  O usuário digita o valor do deposito em seguida é dado a opção para o mesmo escolher o boleto que quer fazer o depósito ou uma conta para fazer transferência. 

 Resgate: O usuário digitar o valor que deseja realizar o resgate em seguida é mostrada a conta do usuário ao qual o resgate foi enviado. 

Pagamento: O usuário digita a linha digitável do boleto, se a linha tiver o valor do boleto o mesmo é debitado da conta, caso não tenha o usuário digita o valor que deseja pagar. 


E mostrado ao usuário um histórico das operações realizadas, com o valor, tipo, data, hora e status da solicitação. 

#As principais tecnologias utilizadas foram

-Javascript 

-Nodejs 

-React 

-Redux 

-MongoDb/mongoose

-Express

-Axios

-jest

#A estrutura do backend consiste em


![image](https://user-images.githubusercontent.com/18398837/114958998-8c0ebd00-9e3a-11eb-983e-26ca25885d32.png =250x)

A estrutura é dividida em um db responsável pelos módulos e sememas dos serviços e os serviços que chamam as funções do model e fazendo os devidos tratamentos antes dos dados serem salvos.

![image](https://user-images.githubusercontent.com/18398837/114959151-d98b2a00-9e3a-11eb-8588-549086b789ef.png)

Cada serviço tem seus testes de unidade e de integração. 

#A estrutura do front consiste em

![image](https://user-images.githubusercontent.com/18398837/114959379-528a8180-9e3b-11eb-8131-2e17fdd84f44.png)

A estrutura do frontend possui uma pasta backend responsável por chamar os métodos do backend  e retornar as respostaspara o front end. Além dessa página existe a página de componente, pages e serviços essa qual possui os serviços e os arquivos responsáveis pelas chamas de api. 

 

#Fluxo do software: 
 
O backend serve como serviço de banco de dados, o frontend serve como uma interface, onde para cada chamada de API é utilizado a store do redux para armazenar os dados, assim tendo maior otimização e controle dos dados, as chamadas são feitas com o Axios e lidadas com o Express. 


#Ambiente

Para executar esse programa é necessário: 

-MongoDB shell version v4.4.3 

-Node v14.15.0 ou superior 

 
#Como executar: 

1 passo: abra dois terminais no caminho /controle-conta-corrente-bancaria/frontend  
2 passo: no primeiro terminal execute npm run start-server para executar o servidor do mongo db 

3 passo: no primeiro terminal execute npm start para executar a aplicação react 

Não existe criação de usuário, o projeto já é inicializado com um usuário padrão.



