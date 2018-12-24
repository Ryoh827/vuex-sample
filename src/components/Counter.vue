<template>
  <div class="counter">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Counter extends Vue {
  get count() {
    return this.$store.state.count;
  }
  private increment() {
    this.$store.commit('increment');
  }
  private decrement() {
    this.$store.commit('decrement');
  }
}
</script>
