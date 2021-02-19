<template lang="pug">
div#contact
  div.container
    Header
    div.container_list.explanation
      h2.explanation_title-en CONTACT
      h2.explanation_title-jp お問い合わせ
    div.container_list.phrase
      //p.phrase-first ここにお問い合わせ
      p.phrase-second 研究成果、およびオンラインセッション等に関するお問い合わせはこちらから
    div.container_list.form
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf_UFE_LV0mwtLdYCQV4ASzDJnr5KHh85vk0eHHCuihbL8Q0w/viewform?embedded=true" width="640" height="653" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>

</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  #contact
    .container
      background: no-repeat url('/sotsuten2021/background.jpg');
      background-attachment: fixed;
      background-position: 50% 50%;
      background-size: cover;
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
      .phrase
        align-items: center;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin: 0 0 0 0;
        padding: 80px 0 48px 0;
        width: 100%;
        .phrase-first
        .phrase-second
          font-size: 10pt;
          font-weight: 600;
          margin-top: 4px;
          text-align: center;
          width: 80%;
      .form
        background-color: #fff;
        display: flex;
        justify-content: center;
        margin: 0 0 60px 0;
        padding: 0 0 40px 0;
        width: 100%;
    
    

@media screen and (min-width: 701px) //パソコン
  #contact
    .container
      background: no-repeat center/100% url('/sotsuten2021/background.jpg');
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
      .phrase
        align-items: center;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin: 0 0 0 0;
        padding: 80px 0 48px 0;
        width: 100%;
        .phrase-first
          font-size: 14pt;
          font-weight: 600;
          margin: 0;
        .phrase-second
          font-weight: 600;
          margin-top: 4px;
          text-align: center;
          width: 80%;
      .form
        background-color: #fff;
        display: flex;
        justify-content: center;
        margin: 0 0 120px 0;
        padding: 0 0 40px 0;
        width: 100%;
    

</style>
