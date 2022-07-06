<template>
  <a v-bind:href="product.url" v-bind:class="productClass">{{
    product.name
  }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true
      }
    }
  },
  computed: {
    productClass() {
      return this.product.stock ? 'success' : 'danger'
    }
  }
})
</script>

<style>
.danger {
  color: red;
}
.success {
  color: green;
}
</style>
