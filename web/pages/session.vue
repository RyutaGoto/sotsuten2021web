<template lang="pug">
div#session
  div.container
    Header
  
</template>

<script>

import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  .container
    

@media screen and (min-width: 701px) //パソコン
  #session
    .container
    

</style>
