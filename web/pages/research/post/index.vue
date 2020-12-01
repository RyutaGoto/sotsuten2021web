<template lang="pug">
  div.container
    div.container_research
      div.research_abstract
        div.research_abstract-right
          h1 {{ data.title }}
          p(v-for="(i, index) in data.tag") {{ i }}
          p 公立はこだて未来大学
          p システム情報科学部{{ data.department }}学科
          p コース {{ data.laboratory }}研究室 
            //コース名をデータベースに追加
          p {{ data.name }}
        div.research_abstract-left
          img(:src="data.img[0]")
      div.research_background
      div.research_content
    div.container_relation
      
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
      data: researchData[this.$route.query.id]
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
