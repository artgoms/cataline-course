<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae officiis
      expedita labore tempora neque ratione fugiat et, excepturi obcaecati
      tenetur saepe corporis quae consequuntur eaque at rem, inventore
      perferendis fuga.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Beatae officiis expedita labore tempora neque ratione fugiat et, excepturi
      obcaecati tenetur saepe corporis quae consequuntur eaque at rem, inventore
      perferendis fuga.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Beatae officiis expedita labore tempora neque ratione fugiat et, excepturi
      obcaecati tenetur saepe corporis quae consequuntur eaque at rem, inventore
      perferendis fuga.
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação Ibook" />
  </div>
</template>



<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
