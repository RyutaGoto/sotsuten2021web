<template lang="pug">
div.card(:style="{ 'background-image': 'url('+img+')' }")
  div.bar
    div.bar_top
      p.name {{ name }}
      p.laboratory {{ laboratory }}プロダクション
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
    /*
    tag: {
      type: Object,
      required: true
    },
    */
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
    font-size: 16pt;
    height: 300px;
    justify-content: flex-end;
    margin: 20px;
    width: 100%;
    .bar
      background-color: #555;
      color: #fff;
      display: flex;
      flex-direction: column;
      height: 30%;
      justify-content: space-evenly;
      width: 100%;
    .bar_top
      display: flex;
      justify-content: space-between;
      .name
        font-size: 10pt;
        margin: 0 16px;
      .laboratory
        font-size: 10pt;
        margin: 0 16px;
    .bar_bottom
      display: flex;
      .title
        font-size: 16pt;
        margin: 0 16px;
    

</style>