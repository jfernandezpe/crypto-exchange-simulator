<template>
  <section>
    Exchange info
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'exchangeInfo',
  computed: {
    ...mapGetters(['currencies']),
  },
  mounted() {
    this.fetchExchangeInfo();
  },
  methods: {
    fetchExchangeInfo() {
      this.$store.dispatch('fetchExchangeInfo', this.currencies);
    },
  },
};
</script>
