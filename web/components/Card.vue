<template lang="pug">
  div
    nuxt-link.card(:style="{ 'background-image': 'url('+img+')' }" :to=" '/research/post?id=' +postID")
    div.bar
      p.title {{ title }}
      p.name {{ name }} ({{ laboratory }}プロダクション)
      p.category {{ contents }}
</template>


<script>
export default {
  props: {
    postID:{
      type: Number,
      required: true
    },
    title: {
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
    },
    contents: {
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
    //#header
    .card
      background-color: #999;
      background-position: 50% 10%;
      background-repeat: no-repeat;
      background-size: 120%;
      display: flex;
      flex-direction: column;
      height: 200px;
      margin: 8px 16px;
      opacity: 1.0;
      text-decoration: none;
      transition: all 0.5s;
      width: 300px;

    .bar
      color: #000;
      display: flex;
      flex-direction: column;
      height: 32%;
      justify-content: flex-start;
      margin: 0 16px 40px 16px;
      text-align: left;
      transition: height 0.7s;
      width: 300px;
      .title
        font-size: 12pt;
        font-weight: 700;
        margin: 6px 0;
      .name
        font-size: 10pt;
        font-weight: 600;
        margin: 4px 0;
      .category
        display: inline;
        font-size: 8pt;
        margin: 4px 0;
      
    .card:hover
      opacity: 0.5;



</style>