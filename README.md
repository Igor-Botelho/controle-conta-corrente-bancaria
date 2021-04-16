O projeto consiste em um controle de conta corrente bancária que processa solicitações de depósito, resgate e pagamentos. 

As regras presentes nesse softare são: 

Depósito:  O usuário digita o valor do deposito em seguida é dado a opção para o mesmo escolher o boleto que quer fazer o depósito ou uma conta para fazer transferência. 

Resgate: O usuário digitar o valor que deseja realizar o resgate em seguida é mostrada a conta do usuário ao qual o resgate foi enviado. 

Pagamento: O usuário digita a linha digitável do boleto, se a linha tiver o valor do boleto o mesmo é debitado da conta, caso não tenha o usuário digita o valor que deseja pagar. 

//linha digitavel

/rotina de rendimentos

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


![image](https://user-images.githubusercontent.com/18398837/114958998-8c0ebd00-9e3a-11eb-983e-26ca25885d32.png)

A estrutura é dividida em um db responsável pelos models e schemas dos serviços e os serviços que chamam as funções do model e fazendo os devidos tratamentos antes dos dados serem salvos no db.

![image](https://user-images.githubusercontent.com/18398837/114959151-d98b2a00-9e3a-11eb-8588-549086b789ef.png)

Cada serviço tem seus testes de unidade e de integração com cobertura de 100%.

![image](https://user-images.githubusercontent.com/18398837/114960620-cf1e5f80-9e3d-11eb-8cbb-0e5a90b95cdd.png)

![image](https://user-images.githubusercontent.com/18398837/114960636-d5acd700-9e3d-11eb-951b-4e0c390febaa.png)


#A estrutura do front consiste em

![image](https://user-images.githubusercontent.com/18398837/114959379-528a8180-9e3b-11eb-8131-2e17fdd84f44.png)

A estrutura do frontend possui uma pasta backend responsável por chamar os métodos do backend  e retornar as respostas para o front end. Além dessa página existe a página de componente, pages e serviços essa qual possui os serviços e os arquivos responsáveis pelas chamas de api. 

 

#Fluxo do software: 
 
O backend serve como serviço de banco de dados, o frontend serve como uma interface, onde para cada chamada de API é utilizado a store do redux para armazenar os dados, assim tendo maior otimização e controle dos dados, as chamadas são feitas com o Axios e lidadas com o Express. 


#Ambiente

Para executar esse programa é necessário: 

-MongoDB shell version v4.4.3 

-Node v14.15.0

 
#Como executar: 

1 passo: abra dois terminais no caminho /controle-conta-corrente-bancaria/frontend  
2 passo: no primeiro terminal execute npm run start-server para executar o servidor do mongo db 
3 passo: no segundo terminal execute npm start para executar a aplicação react 

Não existe criação de usuário, o projeto já é inicializado com um usuário padrão.


#Como utilizar

![image](https://user-images.githubusercontent.com/18398837/114961880-10b00a00-9e40-11eb-8c5d-6b83141e2456.png)


A tela principal no canto esquerdo apresenta o saldo da conta e o rendimento no mês da conta, em baixo apresenta um gráfico com esses valores, no canto direito tem a visualização das transações realizadas e as operações disponiveis.

![image](https://user-images.githubusercontent.com/18398837/114961983-494fe380-9e40-11eb-94d5-5a1cb5128eef.png)

O modal de resgate consiste em um capo para a escrita do valor que deseja resgatar, caso o usuario não tenha saldo é mostrado uma mensagem para ele.

![image](https://user-images.githubusercontent.com/18398837/114962070-743a3780-9e40-11eb-9308-9b5c233a6483.png)

Ao se digitar o um valor valido é mostrado as informações da conta que foi feita o resgate. 

![image](https://user-images.githubusercontent.com/18398837/114962123-8b792500-9e40-11eb-9462-8f14d5c21ed5.png)

No modal do boleto consiste em um input para digitar a linha digitável do boleto a tela apresenta alguns exemplos de boleto para teste. 

![image](https://user-images.githubusercontent.com/18398837/114962187-a3e93f80-9e40-11eb-95a4-bc5183095c5d.png)

O modal de depósito consiste em um para o usuario digitar o valor de depoisto 
![image](https://user-images.githubusercontent.com/18398837/114962373-f165ac80-9e40-11eb-9ef9-a9a672d015f7.png)

Ao confirmar o valor é mostrado as opções de deposito transferencia e boleto, para fins de teste de interfaces os valores de deposito são modificados no saldo do cliente como se ele tivesse pago, a transação é marcada como pendente no banco de dados.

![image](https://user-images.githubusercontent.com/18398837/114962393-f9255100-9e40-11eb-8f04-0ce6f38c475f.png)


![image](https://user-images.githubusercontent.com/18398837/114962497-2540d200-9e41-11eb-9bcc-aaccab8f9872.png)

![image](https://user-images.githubusercontent.com/18398837/114962515-2d007680-9e41-11eb-986c-fc4d6aab4c90.png)

Além disso existe um modal modal para a listagem das transações clicando no VER MAIS na página inicial

![image](https://user-images.githubusercontent.com/18398837/114962556-44d7fa80-9e41-11eb-90ec-a724003a0860.png)






