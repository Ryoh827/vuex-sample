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
import { mapState } from 'vuex';

@Component({
  computed: mapState(['count']),
})
export default class Counter extends Vue {
  private increment() {
    this.$store.commit('increment');
  }
  private decrement() {
    this.$store.commit('decrement');
  }
}
</script>
