# Diretivas

São basicamente atributos HTML, sendo possivel atrelar essa diretiva a qualquer <tag>.

O papel das diretivas é para facilitar trabalho.



Toda diretiva começa com **v-**, logo em seguida é colocada o nome da diretiva.

Ex:

### v-if (para criar condições)

### v-for (para criar loops e renderizar listas)

### v-on (para detectar eventos na tag)

Algumas diretivas suportam argumentos.

Ex:

No caso, o click é um argumento, que poderia ser **click**, **keyup**, etc

v-on **:click**

```html
<button v-on:click="doSomething">
fazer login
</button>
```

Algumas diretivas suportam modificadores, que são seguidas de um ponto ( . ).

No exemplo abaixo a diretiva vai ficar observando o **click** e segurando o **ctrl**

```html
<button v-on:click.ctrl="doSomething">
fazer login
</button>
```



# v - bind

Essa diretiva faz associação de dados para o template, para dentro de atributos HTML

```html
<template>
  <a v-bind:href="product.url" v-bind:class="productClass">
  {{product.name }}</a>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true
      }
    }
  },
  computed: {
    productClass() {
      return this.product.stock ? 'success' : 'danger'
    }
  }
})
</script>
```

A diretiva **v-bind** tem um atalho, somente colocando dois pontos ( : ).

```html
<template>
  <a :href="product.url" :class="productClass">
  {{product.name }}</a>
</template>
```

# v - text

v-text funciona definindo a propriedade textContent do elemento, então ele substituirá qualquer conteúdo existente dentro do elemento. // **utilizar a interpolação, deixa o código mais flexível.**

```html
<template>
  <p>{{ company }} é legal</p>

  <p v-text="company"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      company: 'Cataline'
    }
  }
})
</script>
```

# v - html

O conteúdo do v-html é inserido como HTML simples - a sintaxe do modelo Vue não será processada.

No caso, temos um link formatado no data link, se fosse somente interpolado com chaves, iria aparecer toda string, já com v-html ele é inserido como um html simples.

```html
<template>
  <p>Acesse: <span v-html="link" /></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      link: '<a href="https://cataline.io">Cataline</a>'
    }
  }
})
</script>
```

# v - on

Essa diretiva tem função de observar a <tag>. Ela pode receber um argumento, como **click**, por exemplo.

Pode receber modificadores, seguidos de um ponto ( . ).

Exemplo:

**prevent** - previne a mudança ou atualização da página

**once** - que executa apenas uma vez

```html
<template>
  <a href="#interno" v-on:click.prevent="doSomething"> link interno </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    doSomething() {
      console.log('Hello Cataline')
    }
  }
})
</script>

```

Podemos também combinar modificadores:

```html
<template>
  <a href="#interno" v-on:click.prevent.once="doSomething"> link interno </a>
</template>
```

Essa diretiva também possui um atalho, que é o arroba ( @ ).

```html
<template>
  <a href="#interno" @click.prevent.once="doSomething"> link interno </a>
</template>
```



# v - once

Essa diretiva faz com que o elemento renderize somente uma vez e ignora as atualizações futuras.

```html
<template>
  <p v-once>Estoque inicial: {{ stock }}</p>
  <p>Estoque atualizado: {{ stock }}</p>

  <button @click="stock++">Aumentar estoque</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      stock: 1
    }
  }
})
</script>
```

Com isso, o estoque inicial é renderizado e não sai de 1, ficando assim algo dinâmico.



# v - if

Essa diretiva renderiza um elemento ou mais com condições.

Ela trabalha com **v-else-if** e **v-else**.

```html
<template>
  <div>
    <h1 v-if="sex === 'Masculino'">Masculino</h1>
    <h1 v-else-if="sex === 'Feminino'">Feminino</h1>
    <h1 v-else>Outro</h1>
  </div>
</template>
```



# v - show

Essa diretiva altera a visibilidade do elemento com base em uma afirmação ou negativa. Ela é usada mais quando se tem uma condição que muda muitas vezes.

```html
<template>
  <div>
    <h1 v-show="sex === 'Masculino'">Masculino</h1>
  </div>
</template>te>
```



# v - for

Basicamente fazemos loop com o v-for e renderiza listas.

Renderiza o elemento ou bloco de modelo várias vezes com base nos dados de origem.

```html
<template>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.name }}</li>
  </ul>
</template>
```

Ele também é acompanhado de uma chave ( key ), um atributo especial, um identificador único para cada iteração.

Para usar o key precisamos usar o **v-bind**:  v-bind:key="chave"

Abreviado:  **:key="chave"**



# v - model

Essa diretiva faz um databind **bidirecional**. Utilizado demais em formulários

```html
<template>
  <form>
    <input type="text" placeholder="Nome" v-model="name" />

    <input type="number" placeholder="Idade" v-model="age" />

    <textarea rows="2" placeholder="Descrição" v-model="message"></textarea>

    <input type="checkbox" v-model="newsletter" /> Newsletter <br />

    <input type="radio" name="color" value="vermelho" v-model="color" />
    Vermelho
    <input type="radio" name="color" value="verde" v-model="color" /> Verde
    <input type="radio" name="color" value="azul" v-model="color" /> Azul

    <select v-model="fruit">
      <option disabled selected>Selecione uma fruta</option>
      <option value="uva">Uva</option>
      <option value="banana">Banana</option>
      <option value="morango">Morango</option>
    </select>
  </form>

  <p>Nome: {{ name }}</p>
  <p>Idade: {{ age }}</p>
  <p>Mensagem: {{ message }}</p>
  <p>Newsletter: {{ newsletter }}</p>
  <p>Cor: {{ color }}</p>
  <p>Fruta: {{ fruit }}</p>
</template>
```

A diretiva aceita alguns modificadores: lazy, number e trim.



**lazy** faz o bind só acontecer depois que sair do campo

**number** faz o dado ser salvo como número.

**trim** elimina espaçamentos que tem no inicio e no final de uma string.



# Diretivas Personalizadas

Diretivas personalizadas pelo dev :D






















