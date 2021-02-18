<template lang="pug">
  div.container
    div.container_list.top
      div.container_list-wrap
        nuxt-link(to="/research") 研究紹介
        nuxt-link(to="/session") オンラインセッション
        nuxt-link(to="/contact") お問い合わせ
    div.container_list.hamon
      h2.list_title-en ABOUT
      h2.list_title-jp 波紋
      p.list_caption
        | 私たち公立はこだて未来大学情報デザインコースは、情報社会で豊かに生きるためのデザイン理論や表現方法に加え、情報科学屋認知科学の最新の理論と実践を学んできました。<br><br>
        | これまでの集大成として「波紋」をテーマとした社会に一石を投じる新たなデザインの可能性を提示する展覧会を開催します。<br><br>
        | 本展覧会が社会へ波紋を呼び、形を変えながら新たな波を起こし、起こし続けるきっかけとなることを期待しています。
    div.container_list.introduction
      div.introduction_right
        h2.list_title-en INTRODUCTION
        h2.list_title-jp 研究・活動の紹介
        p.list_caption
          | 今年度の卒業展覧会は新型コロナウイルスの感染拡大防止の観点から、対面形式ではなくオンラインでの開催といたします。<br><br>
          | そのため、研究活動や作品紹介は当サイトにて常設展示いたします。研究者本人からのコメントや動画での紹介も行っております。<br>是非ごゆっくりご覧ください。<br><br>
      div.introduction_left
        //div.list_card
          Card(:postID="index" :title="i.title" :tag="i.tag" :laboratory="i.laboratory" :name="i.name" :img="i.img[0]")(v-for="(i, index) in data", v-if="index < 3")
      div.container_link
        nuxt-link(to="/research") MORE
        div.arrow-right
    div.container_list.session
      div.session_right
      div.session_left
      h2.list_title-en ONLINE SESSION
      h2.list_title-jp オンラインセッション
      p.list_caption
        | 出展者と来場者の皆様との対話の場は日時を設定の上、実施いたします。（詳細はこちらをご覧ください）<br><br>
        | 例年と異なる形式となりますが、より多くの方々にご来場いただけることを楽しみにしております。<br><br>
      div.container_link
        nuxt-link(to="/session") MORE
        div.arrow-right
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
    background: no-repeat center/100% url('/background-top.png');
    background-position: 50% -4%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    //height: 100vh;
    .container_list
      //padding: 10vw 20%;
      .list_card
        display: flex;
        justify-content: space-evenly;
        //text-align: center;
        width: 90%;
      .list_title-en
        color: #000;
        font-size: 28pt;
        margin: -16px 0;
      .list_title-jp
        color: #fff;
        background-color: #000;
        font-size: 16pt;
        margin: 0 0 4vw 0;
        padding: 5px 8px;
        width: auto;
      .list_caption
        color: #000;
        font-feature-settings: "palt" 1;
        font-size: 12pt;
        font-weight: 600;
        line-height: 1.8;
        margin: 0;
        padding: 24px 8%;
        //width: 100%;
      .container_link
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
    .top
      height: 100vh;
      .container_list-wrap
        align-items: flex-end;
        display: flex;
        flex-direction: row;
        height: 95%;
        justify-content: center;
        a
          color: #000;
          font-size: 13pt;
          font-weight: 700;
          margin: 0 80px;
          padding: 10px 10px;
          text-decoration: none;
          transition: background-color 0.3s, color 0.3s;
          &:hover
            background-color: #000;
            color: #fff;
    .hamon
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 50vh;
      padding: 10vw 0 0 0;
      text-align: center;
      width: 80%;
      .list_caption
        padding: 0;
    .introduction
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 70vh;
      justify-content: center;
      width: 80%;
      .introduction_right
        align-items: center;
        display: flex;
        flex-direction: column;
        .list_caption
          margin: 0;
          padding: 0;
          text-align: center;
          //width: 150%;
      .introduction_left
        //width: 40%;
    .session
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 50vh;
      padding: 10vw 0;
      text-align: center;
      width: 80%;
      .list_caption
        padding: 0;
      .session_right
      .session_left

</style>
