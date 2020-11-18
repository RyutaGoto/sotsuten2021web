<template lang="pug">
div.card(:style="{ 'background-image': 'url('+img+')' }")
  div.bar
    div.bar_top
      p.name {{ name }}
      p.laboratory {{ laboratory }}
    div.bar_bottom
      p.title {{ title }}
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tag: {
      type: Object,
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
  computed: {
    styleVariables() {
      return {
        '--img-url': this.img,
      };
    },
  }
}
</script>


<style lang="sass" scoped>
@media screen and (max-width: 700px) //スマホ
  .card
    

@media screen and (min-width: 701px) //パソコン
  .card
    align-items: center;
    background-color: #999;
    background-position: 50% 10%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: flex-end;
    width: 400px;
    .bar
      width: 100%;
    .bar_top
      display: flex;
      justify-content: space-between;
    p
      color: #000;
      font-size: 22pt;
      margin: 20px;
    

</style>