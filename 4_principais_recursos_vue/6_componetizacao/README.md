# Componetização

É basicamente construir mini sistemas, resultando em uma menor complexidade.

No caso, "divide" a página em mini sistemas, fazendo com que esse código seja reutilizado e escalável.

O uso da componetização tem os seguintes pontos positivos:

1. Reutilização de trechos de código

2. Isolamento de contexto

3. Legibilidade do código

4. Padronização do projeto

5. Maior escalabilidade

# Style Scoped

Um grande diferencial do Vue, limitando o style component somente para o componente em questão. Os outros frameworks não possuem esse recurso, o que faz com que as estilizações dos componentes acabem em conflito.

```html
<template>
  <button>botão estilizado</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}
</style>
```

# Estilizando Filho

Basicamente temos um componente estilizado para ser reutilizado, mas podemos modificar a estilização para alguma situação diferente, então podemos colocar um class dentro do filho e estilizar no componente pai.

PAI:

```html
<template>
  <ButtonStyled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: {
    ButtonStyled
  }
})
</script>

<style scoped>
.button-styled {
  background: red;
}
</style>
```

FILHO

```html
<template>
  <button class="button-styled">botão estilizado</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}
</style>
```

Se quisermos fazer uma estilização em uma tag dentro do componente, que está dentro de outra tag, temos que tuilizar o **::v-deep**.

```html
<template>
  <ButtonStyled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: {
    ButtonStyled
  }
})
</script>

<style scoped>
.button-styled {
  background: red;
}

::v-deep.button-styled span {
  color: blue;
}
</style>
```

# PROPS

As modificações de componentes reutilizáveis podem ser alterados a partir das **props**, e os componentes são colocados como se fossem tags HTML, podendo colocar as props do mesmo jeito.

```html
<template>
  <ButtonStyled passarinho="Cadastro" />
  <ButtonStyled passarinho="Login" />
</template>
```

Para que o componente receba a prop, precisamos declarar no componente que ele vai receber essa prop.

```html
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    passarinho: {
      type: String,
      required: true
    }
  }
})
</script>
```

O text pode ser qualquer nome escolhido quando colocado na tag.

Ela precisa receber atributos, são eles: type, required e default.

**type:** se ela é Number, String, Boolean etc

**required:** true ou false, no caso, se a prop é obrigatória.

**default:** se caso não tiver nenhuma prop, aparece um texto padrão.

Para ser passado o type Number, precisamos colocar na prop da tag o v-bind, assim o vue entende que temos número.

```html
<template>
  <ButtonStyled v-bind:passarinho="112" />
  <ButtonStyled passarinho="Login" />
</template>
```

# Props dinâmica class -> depois exemplifico :D

# Slots tambéeeem

# Events também :D

Global segue o mesmo caminho, exemplificar dps
