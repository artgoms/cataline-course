# CSS Grid Layout

Flexbox foi feito em termos unidimensional, em linha, tendo quebra da linha quando não couber na linha (basicamente).

Com o **Grid Layout** podemos criar layouts bidimensionais mais complexos, fatiando em linhas e colunas. Podemos dizer onde cada coisa pode ficar etc.

## Interpretação do grid

Temos dois eixos, x e y. Horizontal Linha, Vertical Coluna.

---

Aqui temos 1 linha, 3 colunas.

<img src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-07-23-50-50-image.png" title="" alt="" width="293"> 

---

Aqui temos 3 linhas e uma coluna.

<img src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-07-23-51-49-image.png" title="" alt="" width="104">

---

Aqui temos 2 linhas e 3 colunas.

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-07-23-52-35-image.png" alt="" width="292" data-align="inline">

---

<img src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-07-23-53-29-image.png" title="" alt="" width="295">

---

Aqui temos 3 linhas e 4 colunas.

<img src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-07-23-54-28-image.png" title="" alt="" width="294">

<u><mark>Definição de **colunas** e **linhas** -> sempre pela MAIOR quantidade.</mark></u>

# Colunas e Linhas

Colunas e linhas podem ser definidas pela propriedade grid-template-columns e grid-template-rows.

**<u>grid-template-columns: </u>** Define o número total de colunas que serão criadas no grid. (from Origamid)

<u>**grid-template-rows**</u>: Define a quantidade de linhas no grid. (from Origamid)

```css
      .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 200px 200px;
      }
```

Podemos utilizar diversas unidades como, px, rem, em, % e fr, sendo fr pertencente ao grid layout.

Podemos colocar 1fr como uma fração do espaço. Se um container tem no total 10fr, temos 10 frações em 100% do espaço, sendo 1fr = 10%.

# Espaçamentos

Espaçamento interno: padding

Espaçamento externo: margin

A boa prática é fazer o espaçamento direto no container e não utilizar o margin nos itens.

**Define o gap (gutter) entre os elementos do grid.** (from Origamid)

```css
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
        grid-gap: 1rem;
```

Hoje essa propriedade foi atualizada para:

**column-gap: 1rem**

**row-gap: 1rem**

**gap: 1rem**



# Fluxo automático

O fluxo de criação é por padrão em linha (**row**), elemento em cima de elemento. Para alterar esse fluxo podemos usar o:

**grid-auto-flow**

O **grid-auto-flow** define o fluxo dos itens no grid. Se eles vão automaticamente gerar novas linhas ou colunas. (from Origamid)

Essa propriedade faz com que seja empilhado da maneira que definiu, se definiu column, ele irá empilhar para o lado, e se for row, para baixo.

```css
      .container {
        display: grid;
        gap: 1rem;
        grid-auto-flow: row;
      }
```



# Repetição Automática

Para que façamos linhas automáticas sem precisar repetir código como:

```css
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 30px;
        grid-gap: 1rem;
      }
```

Utilizamos então a função **repeat(número_de_repetições, tamanho)**

```css
      .container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 30px;
        grid-gap: 1rem;
      }
```



# Preenchimento Implícito

Essa propriedade facilita quando não temos certeza de quantas linhas ou colunas temos, como por exemplo em um blog/posts.

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-21-19-03-image.png" alt="" width="317" data-align="center">

**grid-auto-columns**: 

Define o tamanho das colunas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma coluna que não foi definida).

**grid-auto-rows**: 

Define o tamanho das linhas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma linha que não foi definida).



# Tamanho Dinâmico

Essa função pode ser usada quando um container fica estourando, o que fica visualmente ruim. Sendo assim, temos a possibilidade de deixar o tamanho dinâmico com a tela.

A função usado é **minmax(minimo_tamanho, máximo_tamanho)**

```css
      .container {
        display: grid;
        grid-template-columns: minmax(300px, 900px);
        grid-template-rows: 200px;
        grid-gap: 1rem;
      }
```

<mark>Isso faz com que a coluna tenha no máximo 900px e quando a tela diminuir, o mínimo será 300px.</mark>

Essa função pode ser usada no grid-auto-columns, como também no rows.



# Ajuste Automático

O ajuste automático chega perto de um media-query, tornando estruturas responsivas.

Usamos junto com o **minmax(min, max)** o **auto-fit**.

```css
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 200px;
        grid-gap: 1rem;
      }
```

Com o **minmax** podemos definir um máximo e um mínimo, mas acaba ficando um tamanho fixo. Quando temos vários itens, o grid acaba empilhando para o lado (no caso por estar com uma linha e repetições para colunas), o que faz aparecer a barra horizontal. 

```css
.container {
    display: grid;
    grid-template-columns: minmax(200px, 1fr);
    grid-template-rows: 200px;
    grid-gap: 1rem;
}
```

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-22-01-30-image.png" alt="" width="389" data-align="center">

Para o exemplo, temos vários items que são empilhados um do lado do outro, e queremos que fique abaixo a depender do tamanho da tela.

Para o ajuste automático, usaremos o repeat com a seguinte configuração.

```css
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-template-rows: 200px;
        grid-gap: 1rem;
      }
```

O **auto-fit** fará com que coloque o máximo de colunas na mesma linha, fazendo o resto não ser visível a depender do tamanho da tela. O que não couber mais, irá para próxima linha.

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-22-00-34-image.png" alt="" width="357" data-align="center">

Para aparecer na próxima linha, temos que definir que as linhas são automáticas com um tamanho máximo de 200px:

```css
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 200px;
        grid-gap: 1rem;
      }
```

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-22-00-58-image.png" alt="" width="307" data-align="center">

A cada vez que diminiur o tamanho da tela, irá ter uma menor quantidade de colunas, e quanto maior a tela, mais quantidade de colunas.

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-22-04-17-image.png" alt="" width="164" data-align="center">

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-22-03-01-image.png" alt="" width="407" data-align="center">

---

# Grid template areas

Define áreas específicas no grid. O ponto (.) pode ser utilizado para criar áreas vazias. (from Origamid)



É usado quando queremos deixar lugares definidos no layout.

<img title="" src="file:///C:/Users/artur/AppData/Roaming/marktext/images/2022-07-11-22-16-22-image.png" alt="" width="263" data-align="center">

```css
      .container {
        display: grid;
        grid-template-columns: 1fr 150px;
        grid-template-rows: auto 500px auto;
        grid-template-areas: "header header" "content nav" "footer nav";
        gap: 1rem;
      }
      .header {
        grid-area: header;
      }
      .content {
        grid-area: content;
      }
      .footer {
        grid-area: footer;
      }
      .nav {
        grid-area: nav;
      }
```



---- VOLTAR AQUI DEPOIS.



# Atalhos gerais

Seria os atalhos para ao invés de utilizar grid-template-areas, grid-template-columns e rows, utilizar somente grid.



```css
      .container {
        display: grid;
        /* grid-template-columns: 1fr 1fr;
        grid-template-rows: 200px 200px; */
        grid: 200px 200px / 1fr 1fr;
        gap: 1rem;
      }
```

Isso faz com que fique menos verboso.



# Alinhamentos

### justify-content

Justifica os itens do grid em relação ao eixo x (horizontal).

- **justify-content: *start*** // Justifica os itens ao início.
- **justify-content: *end*** // Justifica os itens ao final.
- **justify-content: *stretch*** // Estica os itens.
- **justify-content: *space-around*** // Distribui espaço entre os elementos. (O início e final são menores que os espaços internos).
- **justify-content: *space-between*** // Cria um espaço entre os elementos, ignorando o início e final.
- **justify-content: *space-evenly*** // Cria um espaço igual entre as colunas (no início e final também).
- **justify-content: *center*** // Centraliza o conteúdo.

### align-content

Alinha os itens do grid em relação ao eixo y (vertical).

- **align-content: start** // Alinha os itens ao início.
- **align-content: end**// Alinha os itens ao final.
- **align-content: *stretch*** // Estica os itens.
- **align-content: space-around** // Distribui espaço entre os elementos. (O início e final são menores que os espaços internos).
- **align-content: *space-between*** // Cria um espaço entre os elementos, ignorando o início e final.
- **align-content: *space-evenly***// Cria um espaço igual entre as colunas (no início e final também).
- **align-content: *center*** // Centraliza o conteúdo.



### justify-items

Justifica o conteúdo dos itens do grid em relação ao eixo x (horizontal). Justifica em relação a célula.

- **justify-items: *start*** // Justifica os itens ao início.
- **justify-items: *end*** // Justifica os itens ao final.
- **justify-items: *center*** // Centraliza o conteúdo.
- **justify-items: *stretch*** // Estica os itens.



### align-items

Alinha o conteúdo dos itens do grid em relação ao eixo y (vertical). Alinha em relação a célula.

- **align-items: *start*** // Alinha os itens ao início.
- **align-items: *end*** // Alinha os itens ao final.
- **align-items: *center*** // Centraliza o conteúdo.
- **align-items: *stretch*** // Estica os itens.




