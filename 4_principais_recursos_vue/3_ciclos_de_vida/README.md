# Life Cycle HOOKS

**<mark>Ganchos de ciclo de vida de um componente Vue.</mark>**

Quando criamos um arquivo Vue, ele já é um componente. Sendo um componente, ele tem ciclos de vida.

## Hooks ou Ganchos

São momentos do nosso ciclo, que podemos realizar alguma ação.

<img src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-04-21-51-13-image.png" title="" alt="" width="406">

## beforeCreate

Antes da criação do componente. 

* Observar os dados - Ele observa todos os dados colocados em data(), retornando um objeto.

* Eventos de inicialização - Começa a ouvir os eventos.

## created

Após o componente ser ativado, o beforeCreate ativa o gancho created.

* Nesse momento ele localiza o HTML ~ Template e JSX.

## BeforeMount

Nesse momento ele monta a página ~ no caso, ele pega somente os dados do HTML e fornecer para o Template.

Resultando na DOM

## mounted

Nesse momento o componente é montado, estável e pausado. Sempre fica de olho na alteração de dados e vai atualizar a DOM

NESSE MOMENTO, sempre que ele atualizar a DOM, teremos mais dois ganchos:

## beforeUpdate e updated

O último ciclo, antes de ser desmontado para ser criado de novo é:

## beforeUnmount

Nesse, ele destroi todas informações e para de ouvir eventos.

## Unmount

Depois de passado o evento do beforeUnmount, ele fica no estado de Unmount.