<template>
  <footer class="footer">
    <a href="https://github.com/jfernandezpe" target="_blank" rel="noopener noreferrer" :title="$t('the_footer.author_link')">{{ $t('the_footer.author', { author: 'José Luis Fernández Pérez'}) }}</a> ~
    {{$t('the_footer.info_data')}}
  </footer>
</template>
<script>
export default {
  name: 'cesFooter',
};
</script>
