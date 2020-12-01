<template lang="pug">
//- div.card(:style="{ 'background-image': 'url('+img+')' }")
  div.bar
    div.bar_top
      p.name {{ name }}
      p.laboratory {{ laboratory }}プロダクション
    div.bar_bottom
      p.title {{ title }}
    div.bar_hide
      p.contents {{ contents }}
nuxt-link.card(:style="{ 'background-image': 'url('+img+')' }" :to=" '/research/post?id=' +postID")
  div.bar
    div.bar_top
      p.name {{ name }}
      p.laboratory {{ laboratory }}プロダクション
    div.bar_bottom
      p.title {{ title }}
    div.bar_hide
      p.contents {{ contents }}
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
  .card
    align-items: center;
    background-color: #999;
    background-position: 50% 10%;
    background-repeat: no-repeat;
    background-size: 120%;
    display: flex;
    flex-direction: column;
    font-size: 16pt;
    height: 240px;
    justify-content: flex-end;
    margin: 16px;
    text-decoration: none;
    transition: all 0.5s ease;
    width: 380px;
    .bar
      background-color: #555;
      color: #fff;
      display: flex;
      flex-direction: column;
      height: 32%;
      justify-content: flex-start;
      transition: height 0.7s;
      width: 100%;
    .bar_top
      display: flex;
      height: 16px;
      justify-content: space-between;
      margin: 16px 0 8px 0;
      .name
        font-size: 10pt;
        margin: 0 16px;
      .laboratory
        font-size: 10pt;
        margin: 0 16px;
    .bar_bottom
      display: flex;
      height: 20px;
      margin: 0px 0 16px 0;
      .title
        font-size: 14pt;
        margin: 0 16px;
    .bar_hide
      // display: none;
      font-size: 12pt;
      margin: 0 16px;
      opacity: 0;
      transition: all 0.5s ease-in;
      // transition: display 0.1s ease;
    
  .card:hover .bar
    height: 60%;

  .card:hover .bar_hide
    // display: flex;
    opacity: 1;

</style>