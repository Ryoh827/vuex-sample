<template>
  <div class="about">
    <h1>This page is About</h1>
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
export default class About extends Vue {}
</script>
