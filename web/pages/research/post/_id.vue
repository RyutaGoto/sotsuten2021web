<template lang="pug">
div#post
  div.container
    Header
    div.container_research
      div.research_list.abstract
        div.abstract-first
          img.visual(:src="data[$route.params.id].img[0]")
        div.abstract-second
          p.title {{ data[$route.params.id].title }}
          p.affiliation {{ data[$route.params.id].name }}({{ data[$route.params.id].laboratory }}研究室) 
          div.tag
            p.tag_item(v-for="(i, index) in data[$route.params.id].tag") {{ i }}
      div.research_list.background
        Research(num="01" attribute="研究背景" :text="data[$route.params.id].background" :img="data[$route.params.id].img[1]")
      div.research_list.content
        Research(num="02" attribute="研究内容" :text="data[$route.params.id].contents" :img="data[$route.params.id].img[2]")
    div.container_menu
      div.research_link
        nuxt-link(to="/research") 一覧へ戻る
        div.arrow-right
      //nuxt-link(:to=" '/research/post?id=3'") next
      
</template>

<script>
import Header from '~/components/Header.vue'
import Research from '~/components/Research.vue'
import researchData from '~/assets/json/jojo.json'

export default {
  components: {
    Header,
    Research
  },
  data(){
    return{
      data: researchData
    }
  },
  
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  #post
    .container
      background: url('');
      .container_research
        .research_list
        .abstract
          .abstract-first
            .visual
              height: auto;
              object-fit: cover;
              width: 100vw;
          .abstract-second
            padding: 0 36px;
            .title
              font-size: 14pt
              font-weight: 800;
              margin: 16px auto 0 auto;
            .affiliation
              font-size: 12pt;
              font-weight: 600;
              margin: 8px auto 0 auto;
            .tag
              display: flex;
              flex-wrap: wrap;
              .tag_item
                background-color: #000;
                color: #fff;
                font-size: 9pt;
                font-weight: 600;
                margin: 4px 4px 0 0;
                padding: 2px 4px;
        .background
        .content
      .container_menu
        display: flex;
        justify-content: center;
        margin: 10vh 0 10vh 0;
        .research_link
          align-items: center;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          outline: 3px solid #000;
          padding: 0 30px 0 70px;
          width: 160px;
          transition: background-color 0.3s, border-top 0.3s, border-right 0.3s;
          &:hover
            background-color: #000;
            .arrow-right
              border-top: solid 2px #fff;
              border-right: solid 2px #fff;
          a
            color: #000;
            font-size: 12pt;
            font-weight: 700;
            padding: 12px 40px 12px 15px;
            text-decoration: none;
            transition: color 0.3s;
            &:hover
              color: #fff;
          .arrow-right
            border-top: solid 2px #000;
            border-right: solid 2px #000;
            width: 8px;
            height: 8px;
            transform: rotate(45deg);


    

@media screen and (min-width: 701px) //パソコン
  #post
    .container
      background: url('');
      .container_research
        padding: 0 10vw;
        .research_list
        .abstract
          .abstract-first
            .visual
              height: 90vh;
              object-fit: cover;
              width: 80vw;
          .abstract-second
            .title
              font-size: 16pt
              font-weight: 800;
              margin: 16px auto 0 auto;
            .affiliation
              font-size: 12pt;
              font-weight: 600;
              margin: 8px auto 0 auto;
            .tag
              display: flex;
              .tag_item
                font-size: 10pt;
                font-weight: 400;
                margin-right: 16px;
        .background
        .content
      .container_menu
        display: flex;
        justify-content: center;
        margin: 15vh 0 25vh 0;
        .research_link
          align-items: center;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          outline: 3px solid #000;
          padding: 0 30px 0 100px;
          transition: background-color 0.3s, border-top 0.3s, border-right 0.3s;
          &:hover
            background-color: #000;
            .arrow-right
              border-top: solid 2px #fff;
              border-right: solid 2px #fff;
          a
            color: #000;
            font-size: 12pt;
            font-weight: 700;
            padding: 12px 100px 12px 30px;
            text-decoration: none;
            transition: color 0.3s;
            &:hover
              color: #fff;
          .arrow-right
            border-top: solid 2px #000;
            border-right: solid 2px #000;
            width: 8px;
            height: 8px;
            transform: rotate(45deg);




</style>
