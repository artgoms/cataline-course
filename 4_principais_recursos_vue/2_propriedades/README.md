# defineComponent

Como estamos usando Typescript, sendo tudo tipado, então precisamos do **defineComponent** do Vue, pois ele faz a tipagem, assim quem está importando, saber o que está importando (TS).

```typescript
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
```

Caso fosse feito sem TypeScript, o código ficaria nesse estilo: 

```javascript
<script>
export default {}
</script>
```

# Data

O data é tanto propriedade como método. 

O contexto dentro do defineComponent é um objeto, e tudo que fica dentro do objeto é propriedade

```javascript
{
    data() {
        // ...
    }
}
```

sintaxe de função:

```typescript
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data: function () {
        return {
            // ....
        }
    }
})
</script>
```

Refatorando

```typescript
<template>
  <h1>Hello</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        // ... string, number, array, object, boolean
    }
})
</script>
```

Utilizando o data, com tipagem e podendo acessar dentro do html

```typescript
<template>
  <h1> {{ person }}</h1>
</template>



<script lang="ts">
import { defineComponent } from 'vue'

// tipagem do person ~ melhor utilizado quando com coisas mais complexas

interface Person {
    name: string
    age: number
}

export default defineComponent({
    data() {
        person: {} as Person
    }
})
</script>
```

# Computed

Uma propriedade computada serve para retornar um dado com algum tipo de alteração ou manipulação aplicada.

Como exemplo temos um dado que vem da "API", na qual precisamos colocar em tela o nome completo, mas em vários momentos da página não queremos repetir o dado do h1.

##### 

```typescript
<template>
  <h1>{{ name }} {{ lastname }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
    return {
        name: 'Artur',
        lastname: 'Gomes'
    }
})
</script>
```

##### Essa propriedade puxa da API os dois dados e processa por trás, trazendo o nome completo.

Sendo assim, podemos utilizar o computed para 

```typescript
<template>
  <h1>{{ fullName}}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
    return {
        name: 'Artur',
        lastname: 'Gomes'
        }
    },
    computed: {
        fullName(): string {
            return `${this.name} ${this.lastname}`
        }
    }
})
</script>
```

<mark>Essa propriedade computada retorna um dado com algum tipo de alteração.</mark>

# Methods

Uma página é composta por dados e métodos. Os métodos fornecem a interatividade com o usuário.

O Methods tem o mesmo efeito que o Computed, tendo somente a diferença no cache. Ou seja, se você utiliza a função dentro de **methods** ela necessitará ser executada sempre para ter o retorno. Enquanto utilizando **computed** existe um cachê que irá reexecutar a função **apenas** caso alguma dependência (ex: variável) for alterada.

```typescript
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrease() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
</script>
```

# Watch

Observa os dados da aplicação e então realizar alguma ação. // Para quem conhece o react, é como se fosse o state hook.

Ela possibilita ter acesso ao valor antigo e ao novo valor.

```typescript
<template>
  <h1>{{ count }}</h1>

  <button @click="count++">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(oldValue)
      console.log(newValue)
      //
    }
  }
})
</script>
```
