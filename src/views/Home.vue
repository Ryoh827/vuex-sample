<template>
  <div class="home">
    <h1>This page is Home</h1>
    <Counter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter.vue'; // @ is an alias to /src

@Component({
  components: {
    Counter,
  },
})
export default class Home extends Vue {}
</script>
