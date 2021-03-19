<template>
  <!-- <div class="mt">Sou composition</div> -->
  <div class="mt">
      <div>Sou composition: {{a}}</div>
      <button @click="inc">++</button>
      </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const a = ref(0);
    console.log('sou um comp composition');

    const inc = () => {
      console.log('vamos inc', a);
      a.value += 1;
    };
    return { a, inc };
  },
};
</script>

<style lang="scss" scoped>
.mt {
    margin-top: 50px;
}

</style>
