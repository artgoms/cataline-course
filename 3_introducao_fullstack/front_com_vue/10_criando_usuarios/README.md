# 

# Criando novos usuários



Nesse caso, teremos a criação de um método para mandar as informações, que seria via **axios.post**.

Primeiramente colocamos o formulário na página com o seguinte código:

```html
      <section>
        <h2 class="title">Novos Usuários</h2>
        <form text="text">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <button type="submit">Adicionar</button>
        </form>
      </section>
```

```javascript
  methods: {
    async fetchUsers() {
      try {
        const { data } = await axios.get('/users')
        this.users = data
      } catch (error) {
        console.warn(error)
      }
    },
    async createUser() {
      await axios.post('/users')
    }
  }
```

Para conseguirmos os valores que são digitados no **campo do form,** adicionamos uma propriedade para armazenar o digitado, o email e o nome, e colocar a tipagem certa, que é string:

```javascript
  data() {
    return {
      users: [] as User[],
      form: {
        name: '',
        email: ''
      }
    }
  }
```

Então usamos o **v-model**, uma nova diretiva para

```html
      <section>
        <h5 class="title">Novos Usuários</h5>
        <form text="text">
          <input type="text" placeholder="Nome" v-model="form.name" />
          <input type="text" placeholder="E-mail" v-model="form.email" />
          <button type="submit">Adicionar</button>
        </form>
      </section>
```

# v-model

A diretiva v-model faz um databind, sendo bidirecional, fazendo com o que seja digitado seja mandado para a prop, form.name e form.email.

two-way-databind



## continuando

Então, como foi feito a desestruturação em **data()**, temos que colocar no **createUser()** de onde vai receber os dados para mandar para o banco de dados e modificar para armazenar o dado, adicionando const e colocando um push para adicionar.

```javascript
  methods: {
    async fetchUsers() {
      try {
        const { data } = await axios.get('/users')
        this.users = data
      } catch (error) {
        console.warn(error)
      }
    },
    async createUser() {
      const {data} = await axios.post('/users', this.form) // <------
  
      this.users.push(users)
    }
  }
```

Para submetermos o formulário com as informações, precisamos fazer com que a tag form seja ouvida, e para isso usaremos o **v-on no form**, que irá ficar ouvindo o createUser e o prevent para fazer com que a página não recarregue.

```html
      <section>
        <h5 class="title">Novos Usuários</h5>
        <form @submit.prevent="createUser">
          <input type="text" placeholder="Nome" v-model="form.name" />
          <input type="text" placeholder="E-mail" v-model="form.email" />
          <button type="submit">Adicionar</button>
        </form>
      </section>
```

Logo que o dado é mandado, ele é mostrado na tela, mas precisamos limpar o form depois que o dado é mandado, então adicionamos no final do método createUser o this.form.name e email com string vazia:

```javascript
  methods: {
    async fetchUsers() {
      try {
        const { data } = await axios.get('/users')
        this.users = data
      } catch (error) {
        console.warn(error)
      }
    },
    async createUser() {
      const { data } = await axios.post('/users', this.form)

      this.users.push(data)
      ;(this.form.name = ''), (this.form.email = '')
    }
  }
```

Para deixar um projeto mais completo, podemos colocar toda a tentativa no **try/catch**, assim caso dê erro, é mostrado em tela. Não podemos garantir que o backend esteja funcionando ou algo do tipo, ai aparece um console.warn.

```javascr
async createUser() {
      try {
        const { data } = await axios.post('/users', this.form)

        this.users.push(data)
        ;(this.form.name = ''), (this.form.email = '')
      } catch (error) {
        console.warn(error)
      }
    }
```
