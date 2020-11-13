<template lang="pug">
  div.container
    p ここにお問い合わせ
    Card
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card,
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  .container
    

@media screen and (min-width: 701px) //パソコン
  .container
    

</style>
