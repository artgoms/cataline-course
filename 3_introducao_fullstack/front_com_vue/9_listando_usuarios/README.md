# Axios

Nessa parte teremos que fazer a requisição do nosso backend, que seria a listagem de usuários.

Teremos o apoio de uma dependencia chamada **Axios**, que é uma biblioteca que realiza requisições HTTP pra uma **API**.

Para instalação seguimos a linha:

```
npm install axios
```

Após instalação, criamos uma pasta **utils** na raiz **src** e criamos um arquivo **axios.ts**.

```javascript
import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3333' // /users
})
```

Isso irá fazer nossa vida melhor! Não será preciso digitar <u>**http:// ...**</u>, somente /users

Logo em seguida precisamos importar no **App.vue**

```javascript
import axios from '@/utils/axios'
```

Para requerer os dados temos que colocar na parte dos métodos uma função para chamar o axios:

```javascript
  methods: {
    async fetchUsers() {
      const response = await axios.get('/users')
      console.log(response)
    }
  },
```

Para chamar os dados logo quando abre a página, temos que montar a requisição, utilizando assim o Hook, o Created.

```javascript
  created() {
    this.fetchUsers()
  },
```

> Houve a necessidade instalar um pacote no Back-End chamado **Cors**
> 
> **Cors** significa <u>**cross origin resource sharing**</u>, o que possibilita compartilhar informações do back com outras aplicações, nesse caso, com o front-end.

Na pasta do backend:

```
npm i cors
npm i @types/cors -D
```

```

```

No arquivo **serve.ts**

```javascript
import cors from 'cors'
```

```javascript
app.use(cors({origin:'*'}))
```



Para prosseguir, temos que puxar os dados e armazenar somente os dados, desestruturando:

```javascript
  methods: {
    async fetchUsers() {
      const { data } = await axios.get('/users')
      this.users = data
    }
  }
```

Armazenando no state:

```javascript
  data() {
    return {
      users: []
    }
  },
```
