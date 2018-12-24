<template>
  <div class="counter">
    <p>{{ positiveCount }}</p>
    <p>{{ count }}</p>
    <p>
      <button @click="increment(10)">+10</button>
      <button @click="increment(1)">+</button>
      <button @click="decrement(1)">-</button>
      <button @click="decrement(10)">-10</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapState(['count']),
    ...mapGetters(['positiveCount']),
  },
})
export default class Counter extends Vue {
  private increment(n: number): void {
    this.$store.commit('increment', { amount: n });
  }
  private decrement(n: number): void {
    this.$store.commit('decrement', { amount: n });
  }
}
</script>
