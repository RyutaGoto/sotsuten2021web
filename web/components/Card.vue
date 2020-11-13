<template lang="pug">
div.card
  p test
</template>


<script>
export default {
    
}
</script>


<style lang="sass" scoped>
@media screen and (max-width: 700px) //スマホ
  .card
    

@media screen and (min-width: 701px) //パソコン
  .card
    height: 300px;
    width: 100%;
    p
      color: #000;
      font-size: 22pt;
    

</style>