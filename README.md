O projeto consiste em um controle de conta corrente bancária que processa solicitações de depósito, resgate e pagamentos. 

O fluxo das solicitações consiste em: 

Depósito:  O usuário digita o valor do deposito em seguida é dado a opção para o mesmo escolher o boleto que quer fazer o depósito ou uma conta para fazer transferência. 

 Resgate: O usuário digitar o valor que deseja realizar o resgate em seguida é mostrada a conta do usuário ao qual o resgate foi enviado. 

Pagamento: O usuário digita a linha digitável do boleto, se a linha tiver o valor do boleto o mesmo é debitado da conta, caso não tenha o usuário digita o valor que deseja pagar. 

 

E mostrado ao usuário um histórico das operações realizadas, com o valor, tipo, data, hora e status da solicitação. 

 

As principais tecnologias utilizadas foram: 

-Javascript 

-Nodejs 

-React 

-Redux 

-MongoDb/mongoose

-Express

-Axios

-jest

A estrutura do backend consiste em:


![image](https://user-images.githubusercontent.com/18398837/114958998-8c0ebd00-9e3a-11eb-983e-26ca25885d32.png  =30x30)

A estrutura é dividida em um db responsável pelos módulos e sememas dos serviços e os serviços que chamam as funções do model e fazendo os devidos tratamentos antes dos dados serem salvos.

![image](https://user-images.githubusercontent.com/18398837/114959151-d98b2a00-9e3a-11eb-8588-549086b789ef.png)

Cada serviço tem seus testes de unidade e de integração. 

A estrutura do front consiste em:

![image](https://user-images.githubusercontent.com/18398837/114959379-528a8180-9e3b-11eb-8131-2e17fdd84f44.png)

A estrutura do frontend possui uma pasta backend responsável por chamar os métodos do backend  e retornar as respostaspara o front end. Além dessa página existe a página de componente, pages e serviços essa qual possui os serviços e os arquivos responsáveis pelas chamas de api. 


