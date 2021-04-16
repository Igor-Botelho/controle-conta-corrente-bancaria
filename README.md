# Controle conta corrente bancária  

O projeto consiste em um controle de conta corrente bancária que processa solicitações de depósito, resgate e pagamentos. 

# As regras presentes nesse software são: 

- Depósito: O usuário digita o valor do depósito em seguida é dado a opção para o mesmo escolher o boleto que quer fazer o depósito ou uma conta para fazer transferência, para motivos de testes o valor está afetando o saldo no momento da solicitação, somente para testes de interface, a trasação na realidade é salva como pendente aguardando o pagamento.

- Resgate: O usuário digitar o valor que deseja realizar o resgate em seguida é mostrada a conta do usuário para qual o resgate foi enviado. 

- Pagamento: O usuário digita a linha digitável do boleto, se a linha tiver o valor do boleto o mesmo é debitado da conta, caso não tenha o usuário digita o valor que deseja pagar. 

- Linha digitável: É gerado a linha do boleto de depósito seguindo a documentação http://www.jrimum.org/bopepo/wiki/Componente/Documentacao/Negocio#Aceite, não foram gerados os digitos verificadores que serão adicionado posteriormente.

- Rotina de rendimento: A rotina de rendimento roda a cada 24 horas, o valor do rendimento é calculado com o saldo atual * uma taxa de juros diaria, foi definido um valor de taxa de 0.005 para testes mas ela é parametrizevel, a rotina calcula o rendimento do mês acumulando os rendimentos diarios, no primeiro dia de cada mês é zerado o rendimento mensal do mês anterior e começa a contar os rendimentos do mês atual, nesse momento é salva uma transação no banco de dados com o valor em rendimentos do mês que passou.

- Histórico das operações: toda transação é salva no banco de dados e no frontend aparecem essas transações.

# As principais tecnologias utilizadas foram:

- Javascript 
- Nodejs 
- React 
- Redux 
- MongoDb/mongoose
- Express
- Axios
- jest

# A estrutura do backend consiste em:

<img src= "https://user-images.githubusercontent.com/18398837/114958998-8c0ebd00-9e3a-11eb-983e-26ca25885d32.png" width="400">

A estrutura é dividida em uma past db responsável pelos models e schemas dos serviços e os serviços que chamam as funções do model e fazendo os devidos tratamentos antes dos dados serem processados pelo model.

<img src="https://user-images.githubusercontent.com/18398837/114959151-d98b2a00-9e3a-11eb-8588-549086b789ef.png"  width="400">

Cada serviço tem seus testes de unidade e de integração com cobertura de 100% das funções de backend.

<img src="https://user-images.githubusercontent.com/18398837/114960620-cf1e5f80-9e3d-11eb-8cbb-0e5a90b95cdd.png"  width="800"> 

<img src="https://user-images.githubusercontent.com/18398837/114960636-d5acd700-9e3d-11eb-951b-4e0c390febaa.png"  width="800">


# A estrutura do front consiste em

<img src="https://user-images.githubusercontent.com/18398837/114959379-528a8180-9e3b-11eb-8131-2e17fdd84f44.png"  width="300">

A estrutura do frontend possui uma pasta backend que realiza as chamadas aos métodos do backend e lidar com as requisições do axios por meio do express retornando as respostas para o front end. Além dessa página existe a página de componentes, pages e serviços essa qual possui os serviços e os arquivos responsáveis pelas chamas de api e interações com a store do redux. 

# Fluxo do software: 
 
O backend serve como serviço de banco de dados, o frontend serve como uma interface, onde para cada chamada de API é utilizado a store do redux para armazenar os dados, assim tendo maior otimização e controle dos dados, as chamadas são feitas com o Axios e com o Express. 


# Ambiente

Para executar esse programa é necessário: 

- MongoDB shell version v4.4.3 

- Node v14.15.0

 
# Como executar: 

- 1 passo: abra dois terminais no caminho /controle-conta-corrente-bancaria/frontend.
- 2 passo: no primeiro terminal execute npm run start-server para executar o servidor do mongo db. 
- 3 passo: no segundo terminal execute npm start para executar a aplicação react. 

Não existe criação de usuário, o projeto já é inicializado com um usuário padrão.


# Como utilizar

![image](https://user-images.githubusercontent.com/18398837/114961880-10b00a00-9e40-11eb-8c5d-6b83141e2456.png)


A tela principal no canto esquerdo apresenta o saldo da conta e o rendimento no mês da conta, em baixo possui um gráfico com esses valores, no canto direito tem a visualização das transações realizadas e as operações disponiveis.

![image](https://user-images.githubusercontent.com/18398837/114961983-494fe380-9e40-11eb-94d5-5a1cb5128eef.png)

O modal de resgate consiste em um campo para a escrita do valor que deseja resgatar, caso o usuario não tenha saldo é mostrado uma mensagem para ele.

![image](https://user-images.githubusercontent.com/18398837/114962070-743a3780-9e40-11eb-9308-9b5c233a6483.png)

Ao se digitar o um valor valido é mostrado as informações da conta que foi feita o resgate. 

![image](https://user-images.githubusercontent.com/18398837/114962123-8b792500-9e40-11eb-9462-8f14d5c21ed5.png)

No modal do boleto consiste em um input para digitar a linha digitável do boleto a tela apresenta alguns exemplos de boleto para teste. 

![image](https://user-images.githubusercontent.com/18398837/114962187-a3e93f80-9e40-11eb-95a4-bc5183095c5d.png)

O modal de depósito consiste em campo um para o usuário digitar o valor de deposito 

![image](https://user-images.githubusercontent.com/18398837/114962373-f165ac80-9e40-11eb-9ef9-a9a672d015f7.png)

Ao confirmar o valor é mostrado as opções de deposito transferência e boleto, para fins de teste de interfaces os valores de deposito são modificados no saldo do cliente como se ele tivesse pago, a transação é marcada como pendente no banco de dados. 

![image](https://user-images.githubusercontent.com/18398837/114962393-f9255100-9e40-11eb-8f04-0ce6f38c475f.png)


![image](https://user-images.githubusercontent.com/18398837/114962497-2540d200-9e41-11eb-9bcc-aaccab8f9872.png)

![image](https://user-images.githubusercontent.com/18398837/114962515-2d007680-9e41-11eb-986c-fc4d6aab4c90.png)

Além disso existe um modal modal para a listagem das transações clicando no VER MAIS na página inicial

![image](https://user-images.githubusercontent.com/18398837/114962556-44d7fa80-9e41-11eb-90ec-a724003a0860.png)

