<template lang="pug">
  div.container
    div.container_list.top
      div.top_title
        p.school 公立はこだて未来大学情報デザインコース
        p.exihibition 卒業研究展覧会2021「波紋」
      div.top_subtitle
        p.pickup pickup
      //div.list_card
        Card(:postID="index" :title="i.title" :tag="i.tag" :laboratory="i.laboratory" :name="i.name" :img="i.img[0]")(v-for="(i, index) in data", v-if="index < 3")
    div.container_list.hamon
      h2.list_title 波紋
      p.list_caption
        | 私たち公立はこだて未来大学情報デザインコースは、情報社会で豊かに生きるためのデザイン理論や<br>表現方法に加え、情報科学屋認知科学の最新の理論と実践を学んできました。<br><br>
        | これまでの集大成として「波紋」をテーマとした社会に一石を投じる<br>新たなデザインの可能性を提示する展覧会を開催します。<br><br>
        | 本展覧会が社会へ波紋を呼び、形を変えながら新たな波を起こし、<br>起こし続けるきっかけとなることを期待しています。
    div.container_list.introduction
      h2.list_title 研究・活動の紹介
      p.list_caption
        | 今年度の卒業展覧会は新型コロナウイルスの感染拡大防止の観点から、<br>対面形式ではなくオンラインでの開催といたします。<br><br>
        | そのため、研究活動や作品紹介は当サイトにて常設展示いたします。<br>研究者本人からのコメントや動画での紹介も行っております。<br>是非ごゆっくりご覧ください。<br><br>
      div.list_card
        Card(:postID="index" :title="i.title" :tag="i.tag" :laboratory="i.laboratory" :name="i.name" :img="i.img[0]")(v-for="(i, index) in data", v-if="index < 3")
    div.container_list.session
      h2.list_title オンラインセッション
      p.list_caption
        | 出展者と来場者の皆様との対話の場は日時を設定の上、実施いたします。（詳細はこちらをご覧ください）<br><br>
        | 例年と異なる形式となりますが、より多くの方々にご来場いただけることを楽しみにしております。
      
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
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
    width: 1366px;
    .container_list
      color: #fff;
      //padding: 10vw 20%;
      text-align: center;
      width: 100%;
      .list_card
        display: flex;
        justify-content: space-evenly;
        // padding: 0;
        width: 90%;
      .list_title
        font-size: 32px;
        margin: 0 0 4vw 0;
      .list_caption
        font-feature-settings: "palt" 1;
        font-size: 18px;
        line-height: 1.8;
        margin: 24px auto;
    .top
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 80vh;
      padding: 8vw 20%;
      .top_title
        background-color: #fff;
        box-shadow: 2px 2px 5px #666;
        color: #444;
        margin: 16px auto 48px auto;
        width: 45%;
        .school
          font-size: 14pt;
          margin: 5% auto 1% auto;
        .exihibition
          font-size: 32pt;
          font-weight: 700;
          margin: 0 auto 5% auto;
      .top_subtitle
        background-color: #fff;
        box-shadow: 2px 2px 5px #666;
        color: #555;
        font-size: 20pt
        font-weight: 500;
        margin: 16px;
        width: 10%;
        .pickup
          margin: 10% 0;
    .hamon
      background-color: #417BBF;
      padding: 8vw 20%;
    .introduction
      align-items: center;
      background-color: #E94917;
      display: flex;
      flex-direction: column;
      padding: 8vw 20%;
    .session
      background-color: #6AB82C;
      padding: 8vw 20%;

</style>
