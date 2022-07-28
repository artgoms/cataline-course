# Escalando Vue com Nuxt

Vue CLI é uma ótima escolha para aplicações, mas não é uma estrutura pronta para produção.

O Nuxt.js é um framework de alto nível construído sobre o Vue.js, para nos ajudar a construir aplicações Vue, prontas para produção.

Para iniciar um projeto do Nuxt.js precisamos digitar apenas:

```
npx create-nuxt-app nome_app
```

Problemas que o Nuxt resolve:

1. **Combinar bibliotecas.**
   
   O Nuxt vem pré-configurado com Vuex, Vue Router e Vue Meta, além disso, configura o projeto com padrões inteligentes de boas práticas.

2. **Organização do código.**
   
   A estrutura padrão do Vue oferece o básico, já o Nuxt oferece pastas adicionais baseadas em boas práticas, como pages, layout, middlewares, etc. Cada coisa tem seu devido lugar, tornando o desenvovilmento mais rápido, intuitivo, organizado e escalável.

3. **SEO**
   
   Vue, React e Angula não são favoráveis para SEO, pois estamos criando SPA (Single Page Application), página que não se recarrega quando mudamos de página. SPA tem seu conteúdo carregado dinamicamente via JavaScript, ou seja, a interface que enxergamos no navegador não tem um HTML por trás, é tudo construído via Javascript, assim dificultando a indexação dessas páginas no Google, por exemplo.
   
   A melhor alternativa é fazer um SSR (Server Side Rendering), ou seja, pré-renderizar as páginas no servidor e ter o HTML palpável no browser. Fazer isso com o Vue é uma tarefa árdua e o Nuxt faz isso automaticamente.

4. **Velocidade**
   
   O carregamento de aplicações Vue pode ser lento, mas com o Nuxt temos duas alternativas de implementações, estaticamente (HTML, CSS e Javascript) ou SERVER (SSR, onde o HTML é renderizado no servidor, fazendo a página sendo carregada mais rapidamente).

<img title="" src="file:///D:/1 Projetos/Cataline/26b19c858398d676f4d0540d15544e6dccbc2b51.png" alt="" width="382" data-align="center">

---

## Navegação entre rotas

O navegador padrão, utilizando rotas, tende a recarregar as páginas a cada clique em link de rota

```javascript
<template>
  <div>
    <ul>
      <a href="/">Home</a>
      <a href="/sobre">Sobre</a>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
</style>
```

Utilizando a tag <NuxtLink> a página tem reflash, tendo o cache de cores e imagens salvas em memória.

```javascript
<template>
  <div>
    <ul>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/sobre">Sobre</NuxtLink>
    </ul>

    <h1>Home</h1>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
</style>
```

## Tipos de View

No Nuxt existe três tipos de view:

1. Layouts

2. Paginas

3. Componentes

## Layout

Layouts foi implementado para ser usado como modelo, somente mudando dados. Evita no caso a repetição de estruturas sem necessidade. Podemos criar a pasta de /layouts e colocar um website.vue com estrutura

Estrutura Layout website.vue

```javascript
<template>
    <div class="home">
        <Nuxt />
        <h1> Home </h1>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    layout: 'website'
})
</script>
```

Estrutura index.vue:

```javascript
<template>
    <div class="cataline">
       <ul>
        <NuxtLink to="/"> Home </NuxtLink>
        <NuxtLink to="/sobre"> Sobre </NuxtLink>
       </ul>

        <Nuxt />
    </div>
</template>
```

É interessante deixar um layout default.vue como um layout em branco, assim sendo um padrão caso não encontre o layout certo.

Estrutura default.vue:

```javascript
<template>
    <div class="default-layout">
        <Nuxt />
    </div>
</template>
```

Essa estrutura em branco também faz sentido para caso tenha uma página de erro, exibindo somente uma estrutura sem "conteúdo padrão".

## Página de ERRO

Podemos fazer um layout para páginas de erro, seguindo a estrutura e nome:

Nome: error.vue

```javascript
<template>
    <h1>Error 404</h1>
</template>
```

## Plugins

Funções ou lógicas que seram executadas quando a aplicação é criada.

## Módulos

São bibliotecas ou pacotes que fazem uma integração com o Nuxt.
