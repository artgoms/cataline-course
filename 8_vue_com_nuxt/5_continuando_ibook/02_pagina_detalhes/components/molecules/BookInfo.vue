<template>
  <div class="book-info">
    <h2 class="book-title">{{ $book.title }}</h2>

    <div class="book-description" v-html="$book.description"></div>

    <BookCategories />

    <div class="book-release-details">
      <ul>
        <li>
          <p>Lançamento</p>
          <p>{{ $book.releaseDate }}</p>
        </li>
        <li>
          <p>Autor</p>
          <p>{{ $book.author }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.book-details {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1.4rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
}
</style>
