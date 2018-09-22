<template>
  <section>
    Exchange info
  </section>
</template>
<script>

export default {
  name: 'exchangeInfo',
  mounted() {
    this.fetchExchangeInfo();
  },
  methods: {
    fetchExchangeInfo() {
      this.$store.dispatch('fetchExchangeInfo');
    },
  },
};
</script>
