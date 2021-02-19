<template lang="pug">
div#research
  div.container
    Header
    div.container_list.explanation
      h2.explanation_title-en INTRODUCTION
      h2.explanation_title-jp 研究・活動の紹介
    div.container_list.research
      p.research_caption
        | 研究活動や作品紹介は当サイトにて常設展示いたします。<br>
        | 研究者本人からのコメントや動画での紹介も行っております。<br>
        | 是非ご覧ください。<br>
      div.research_wrap
        Card(:postID="index" :title="i.title" :tag="i.tag" :laboratory="i.laboratory" :name="i.name" :img="i.img[0]" )(v-for="(i, index) in data")
      
</template>

<script>
import Card from '~/components/Card.vue'
import Header from '~/components/Header.vue'
import researchData from '~/assets/json/jojo.json'

export default {
  components: {
    Card,
    Header
  },

  data(){
    return{
      data: researchData
    }
  }
}
</script>

<style lang="sass" >

@media screen and (max-width: 700px) //スマホ
  #research
    .container
      align-items: center;
      background: no-repeat center/100% url('/background.jpg');
      background-attachment: fixed;
      background-position: 50% -4%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 10;
      .explanation
        margin: 120px 0 0 0;
        padding: 2vw 0 0 0;
        position: relative;
        text-align: center;
        top: 20px;
        .explanation_title-en
          color: #000;
          font-size: 20pt;
          margin: -8px 0;
        .explanation_title-jp
          background-color: #000;
          color: #fff;
          display: inline-block;
          font-size: 12pt;
          margin: 0 0 -30px 0;
          padding: 2px 5px;
          width: auto;
        .explanation_caption

      .research
        background: #fff;
        margin-bottom: 120px;
        padding: 5vh 0 0 0 ;
        .research_caption
          font-size: 12pt;
          font-weight: 600;
          letter-spacing: 2px;
          line-height: 1.6em;
          padding: 0 0 40px 0;
          text-align: center;
        .research_wrap
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 0 60px 0;
      .container_background

    

@media screen and (min-width: 701px) //パソコン
  #research
    .container
      align-items: center;
      background: no-repeat center/100% url('/background.jpg');
      background-attachment: fixed;
      background-position: 50% -4%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 10;
      .explanation
        margin: 200px 0 0 0;
        padding: 2vw 0 0 0;
        position: relative;
        text-align: center;
        top: 20px;
        .explanation_title-en
          color: #000;
          font-size: 28pt;
          margin: -16px 0;
        .explanation_title-jp
          background-color: #000;
          color: #fff;
          display: inline-block;
          font-size: 16pt;
          margin: 0 0 -30px 0;
          padding: 0px 8px;
          width: auto;
        .explanation_caption

      .research
        background: #fff;
        margin-bottom: 120px;
        padding: 5vh 0 0 0 ;
        .research_caption
          font-size: 12pt;
          font-weight: 600;
          letter-spacing: 2px;
          line-height: 1.6em;
          padding: 0 0 40px 0;
          text-align: center;
        .research_wrap
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 0 60px 0;
      .container_background




</style>
