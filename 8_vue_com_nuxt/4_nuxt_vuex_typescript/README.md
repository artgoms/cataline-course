# Vuex - Explicando

A seguir temos um código da aula de Vuex:



```javascript
export default createStore({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]

      context.commit('SET_TODOS', todos)
    }
  },
  getters: {
    $allTodos(state) {
      return state.todos
    },
    $doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
})
```

## PASSO A PASSO.

Primeiramente temos os níveis de acesso. 

#### STATE

O State, o qual recebe um estado inicial na aplicação. Este somente pode ser acessado ~ de acordo com a padronização ~ pelas Mutations.

```javascript
export default createStore({
  state: {
    todos: []
  }
```

#### MUTATIONS

As mutations são responsáveis por alterar o State, mantendo padronização.

A mutation é chamado a partir das Actions, disparados depois de receber os dados (de um modo geral).

Logo que a Action é disparada, a Mutation (que já possui os dados da Action) entra em ação, acessa o State e o objeto, e atribui os dados.



```javascript
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  }
```

#### ACTIONS

As actions são responsável por fazer a chamada na API ou obter os dados (podendo ser via click etc). 

Esses dados são armazenados.

Logo quando ele recebe os dados, é feito um **commit**, que é a chamada da Mutation, com o fornecimento dos dados.

```javascript
  actions: {
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]

      context.commit('SET_TODOS', todos)
      }
  }
```



#### GETTERS

Os getters fazem o papel de acessar a informação no componente.

```javascript
  getters: {
    $allTodos(state) {
      return state.todos
    },
    $doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
```



## EM SUMAAAA

Temos o **state** com o objeto todos vazio, a partir dai partimos para as **actions**, na qual faz um fetchTodos(context) ~ com um context que faz referencia ao próprio Vuex ~(que seria a API), recebe o array e é armazenado em *todos* (dentro das actions).

Pronto, esses dados precisam ser colocados dentro do <u>objeto vazio</u> no **State**, parte dai que só podemos alterar o **State** pelas **Mutations**.

Na **Mutations** criamos um método que tem acesso ao **state** e ao payload *<u>todos</u>* que ela vai receber (no caso o <u>*todos*</u> que recebemos no Actions). Então é setado state.todos = todos (que recebemos de Actions).

MAS, no Actions precisamos chamar a Mutation para assim alterar o state. Dai parte o commit, que será chamando a Mutation com o payload ( que seria os dados ).

Dai temos que ter uma maneira do componente acessar o estado, não sendo uma boa prática que ele acesse diretamente o **state**. Partindo então os getters, tendo acesso ao state e retornando o dado do state.



A conveção utilizada é a utilização do simbolo de dolar ($$) na frente do getters, pois dessa maneira, quando acessar esse getter, saberemos que esse dado não pode ser alterado diretamente, sendo uma propriedade somente para leitura.

:D
