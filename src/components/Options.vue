<template>
<div style="margin-top: 50px">
  <div>{{ c }}: {{ a }} </div>

  <div>total dentro do child: {{total}}</div>

  <!-- <button @click="a++">++</button> -->
  <button @click="inc">++</button>
  </div>
</template>

<script>
export default {

  props: {
    c: { type: String, defualt: null },
    total: { type: Number, defualt: 0 },
  },

  data() {
    return {
      // a: 'sou o a',
      a: 0,
      b: 'sou o b',
    };
  },

  methods: {
    inc() {
    // -console.log('vamos inc', this.b);
    // --console.log('vamos inc');
    // ---console.log('Antes', this.a);
    // ---this.a++;
    // ---console.log('Depois', this.a);
      console.log('Inc', this.a);
      this.a += 1;

      this.$emit('inc');
    },
  },
};
</script>
<style>
</style>
