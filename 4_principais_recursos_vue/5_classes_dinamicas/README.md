# Classes Dinâmicas

Classes baseadas no javascript/estados dentro do javascript.

A classe só será adicionada a tag a depender da condição no javascript.

```html
<template>
  <h1 class="static">Cataline</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false
    }
  }
})
</script>
```

colocando as condições

```html
<template>
  <h1 class="static" :class="{ active: isActive }">Cataline</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false
    }
  }
})
</script>
```

# Sintaxe de Array

Para esse tipo de atribuição de classe, fica mais fácil por juntar tudo em uma só solução.

~falta comentar mais coisas~

```html
<template>
  <h1 :class="['static', { 'text-danger': hasError }, className]">Cataline</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: true,
      className: 'artur-gomes'
    }
  }
})
</script>
```
