<template>
  <div class="container">
    <div class="conteudo">
      <img src="@/assets/images/astronaut.svg" alt="" />
      <h2>Perguntas frequentes</h2>
      <p>Escolha a categoria</p>
      <ul>
        <li v-for="category in $allCategories" :key="category.id">
          {{ category.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $allCategories() {
      return this.$store.getters.$allCategories
    }
    // $allTodos() {
    //   return this.$store.getters.$doneTodos
    // }
  },
  created() {
    this.$store.dispatch('fetchFaqCategories')
    // this.$store.dispatch('fetchTodos')
  }
}
</script>

<style lang="scss" scoped></style>
