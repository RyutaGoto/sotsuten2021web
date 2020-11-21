<template lang="pug">
  div.container
    div.container_list.explanation
        h2.explanation_title 研究・活動の紹介
        p.explanation_caption
            | 研究活動や作品紹介は当サイトにて常設展示いたします。<br>
            | 研究者本人からのコメントや動画での紹介も行っております。<br>
            | 是非ごゆっくりご覧ください。<br>
    div.container_list.category
    div.container_list.research
    div.container_list.pages
      
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
      data: researchData
    }
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  .container
    

@media screen and (min-width: 701px) //パソコン
  .container
    align-items: center;
    background: no-repeat center/100% url('/background.jpg');
    display: flex;
    flex-direction: column;
    .container_list


</style>
