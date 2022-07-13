# Gerenciamento de Estado com VUEX

## O que é VUEX?

Vuex é o padrão e a biblioteca de gerenciamento de estado do Vue.





### Por que usar o Vuex?

Quando falamos de estado, queremos dizer, os dados do qual os componentes dependem e renderizam (ex: psot, TODOS, CRUD etc).

Sem o Vuex, cada componente vue pode ter sua própria versão de estado. Supondo que a aplicação tem um monte de componente, e alguns componentes precisam de um mesmo estado para renderizar (exemplo, nome do usuário, que é requisitada em muitos lugares da aplicação). Sem o Vuex, basicamente temos as opções:

1. Chamada em API, estado no qual não é reativo, não havendo atualização nos outros componentes, pois os componentes estariam trabalhando isoladamente.

2. Chamada na API em apenas um componente de nível mais alto, passando esses dados para os filhos via props e quando há uma atualização, o filho manda a info para o pai via eventos. E assim, o pai atualiza os outros filhos via props. **~ mas isso pode virar uma bagunça~**

3. Consolidar os dados em somente um lugar, que tem o estado de toda a aplicação. Uma única fonte de dados. O Vuex fornece isso. Todos os componentes tem acesso direto a esse Estadi Global e totalmente reativo. Quando um componente atualiza o estado, os outros componentes que estão usando esses dados são notificados, recebendo automaticamente o novo valor.



Consolidar os dados somente em um lugar não irá resolver os problemas, como exemplo diversos componentes atualizando o estado de diferentes maneiras e locais. Por isso precisamos de **padronização**, caso contrário, as mudanças no nosso estado podem ser **imprevisíveis e não rastreáveis**.



## Padronização Vuex

O Vuex, como o Vue, fornece uma instância com **createStore({})**.

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-12-00-44-24-image.png" alt="" width="481" data-align="center">

Ciclo da instância do Vuex:

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-12-00-45-24-image.png" alt="" width="341" data-align="center">

Somente as mutations tem permissão para alterar o state.
