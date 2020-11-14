<template lang="pug">
div.card
  p {{ title }}
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    laboratory: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    }
  },
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