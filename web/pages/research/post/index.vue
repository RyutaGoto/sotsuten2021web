<template lang="pug">
  div.container
    div.container_research
      div.research_abstract
        div.research_abstract-first
          img(:src="data.img[0]")
        div.research_abstract-second
          p(v-for="(i, index) in data.tag") {{ i }}
          h1 {{ data.title }}
          p 公立はこだて未来大学
          p システム情報科学部{{ data.department }}学科 {{ data.course }}コース
          p {{ data.laboratory }}研究室 
            //コース名をデータベースに追加
          p {{ data.name }}
          p {{ id }}
      div.research_background
      div.research_content
    div.container_menu
      nuxt-link(:to=" '/research/post?id=3'") next
      
</template>

<script>
import Card from '~/components/Card.vue'
import Title from '~/components/Title.vue'
import researchData from '~/assets/json/research.json'

export default {
  components: {
    Card
  },

  data(){
    return{
      data: researchData[this.$route.query.id],
      nextId: Number.parseInt(this.$route.query.id) + 1 + 2
    }
  },

  methods: {
    viewNext: function(){
      this.id = this.id + 1;
      console.log(this.id);
    }
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  .container
    

@media screen and (min-width: 701px) //パソコン
  .container



</style>
