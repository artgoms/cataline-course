# MÉTODOS E DIRETIVAS



## **Métodos**

**Metodos** é uma função.

Exemplo:

```v
function showName(name) {
    alert(name);
}
```

Dentro do script App do Vue:

```javascript
methods: {
    showName(name) {
        alert(name);
    },
},
```

## **Diretivas**

Uma **Diretiva** é um atributo no HTML para facilitar a vida.



**v-on**

Esta diretiva tem a função de ficar ouvindo alterações no HTML, como evento de click/digitação/passar mouse por cima etc. 

```javascript
<button v-on:click="showName">Botão</button>
```

podemos substituir o **v-on:click** por **@click**, ficando

```javascript
<button @click="showName">Botão</button>
```

**v-for**

Esta diretiva tem a função de fazer loop, seguindo o exemplo abaixo:

```javascript
// DADOS
data() {
    return {
    name: 'Cataline',
    users: ['Artur', 'João', 'Maria']
    }
}

// HTML

<div v-for="user in users">
        {{ user }}
</div>
```

Isto é, fazer um loop no array users e mostrar cada user em users.
