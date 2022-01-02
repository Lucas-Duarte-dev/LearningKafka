# Apache Kafka
Um sistema open source que trabalha de forma distribuída, e com uso de
stream de dados. Podendo passar uma informação entre sistemas, 
ou transformando tais informações. É possível também trabalhar com filas 
no Kafka, semelhante ao RabbitMQ, porém com uma performace maior.
O kafka consegue processar muita informação e com pouca latência

### Nomenclaturas

- Producer
  - Sistema que irá produzir o dado, podemos usar como exemplo um e-commerce: 
  Quando um cliente realiza uma compra e gera um dado com a informação de 
  compra realizada, ou no caso um evento contendo essa informação
- Broker
  - O Kafka é um cluster com diversos brokers, cada broker contém um banco de dado
  Quando recebemos um dado, o kafka envia para algum dos brokers que estiverem rodando
- Consumer
  - Sistema que está interessado em pegar essa informação que foi para o Kafka.
  Exemplo: Ao realizar uma compra, enviamos uma informação para o Kafka apresentando
  que já é possível emitir a nota fiscal, o consumer irá pegar essa informação do kafka
  e gerar a nota.
  - É um worker, sempre está olhando as informações que estão vindo do Ksafka
- Zookeeper
  - Sistema de server discovery que é utilizado como orquestrador dos broker's 
  que estão sendo rodados pelo Kafka
    - Gerenciamento de erros e recuperação
    - Gerenciamento de cluster
    - Gerenciamento de permissões
- Topic
  - Um linha de passagem para as mensagens e eventos emitidos, cada mensagem
  irá será enviada para um tópico que irá direcionar ela para o fluxo padrão do kafka
  