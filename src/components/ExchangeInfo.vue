<template>
  <section>
    Exchange info
    <ul>
      <li v-for="price in prices" :key="price.name" >
        {{price.name}}({{price.shortname}}) {{price.price | currency(currency) }}

      </li>
    </ul>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'exchangeInfo',
  computed: {
    ...mapGetters(['currencies', 'currency', 'prices']),
  },
  filters: {
    currency(amount, currency) {
      return `${parseFloat(amount.toFixed(4))} ${currency.symbol}`;
    },
  },
  methods: {
    fetchExchangeInfo() {
      this.$store.dispatch('fetchExchangeInfo', { currencies: this.currencies, currency: this.currency.shortname });
    },
  },
  mounted() {
    this.fetchExchangeInfo();
  },
};
</script>
