<template lang="pug">
  div#card_components
    nuxt-link.card(:style="{ 'background-image': 'url('+img+')' }" :to=" '/research/post/' +postID")
    div.bar
      p.title {{ title }}
      p.name {{ name }} ({{ laboratory }}研究室)
      p.category {{  }}
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
  #card_components
    //position: absolute;
    //display: flex;
    //flex-direction
    width: 100vw;
    .card
      background-color: #999;
      background-position: 50% 10%;
      background-repeat: no-repeat;
      background-size: 120%;
      display: flex;
      flex-direction: column;
      height: 200px;
      margin: 8px 0;
      opacity: 1.0;
      text-decoration: none;
      transition: all 0.5s;
      width: 100%;
      &:before
        display: block;
        width: 100%;
        height: 200px;
        content: " ";
        position: absolute;
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), 70%, rgba(0, 0, 0, 0.6));
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), 70%, rgba(0, 0, 0, 0.6));
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), 70%, rgba(0, 0, 0, 0.6));

  .bar
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 32%;
    justify-content: flex-start;
    margin: 0 auto;
    position: relative;
    text-align: left;
    top: -75px;
    transition: height 0.7s;
    width: 320px;
    .title
      font-size: 10pt;
      font-weight: 700;
      margin: 6px 0 2px 0;
    .name
      font-size: 8pt;
      font-weight: 600;
      margin: 2px 0 0 0;
    .category
      display: none;
      

@media screen and (min-width: 701px) //パソコン
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
      font-size: 9pt;
      font-weight: 500;
      margin: 4px 0;
    .category
      display: inline;
      font-size: 8pt;
      margin: 4px 0;
    
  .card:hover
    opacity: 0.5;



</style>