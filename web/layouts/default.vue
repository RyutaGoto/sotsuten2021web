<template lang="pug">
  div#app
    //div#header
      div.link
        nuxt-link.link_top(to="/") 卒業研究展覧会2021
      div.link
        div.link_listIntermal
          nuxt-link(to="/research") 研究紹介
          nuxt-link(to="/") オンラインセッション
          nuxt-link(to="/contact") お問い合わせ
        div.link_listExternal
          a(href="#" rel="noopener noreferrer" target="_blank")
          a(href="#" rel="noopener noreferrer" target="_blank")     
    div#body
      Nuxt
    div#footer
      div.footer_funLogo
        img.logo(src="/funLogo.png")
      div.footer_copyRight ©公立はこだて未来大学　情報デザインコース

</template>

<style lang="sass">
html
  box-sizing: border-box;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;


@media screen and (max-width: 700px) //スマホ
  #app

@media screen and (min-width: 701px) //パソコン
  #app
    //width: 100vw;
    #header
      align-items: center;
      box-shadow: 0 4px 8px #eee;
      display: flex;
      height: 60px;
      justify-content: space-between;
      padding: 0 10%;
      width: 80%;
      a
        text-decoration: none;
      .link_top
        color: #333;
        font-size: 24pt;
        font-weight: 600;
      .link_listIntermal
        a
          color: #555;
          font-size: 16pt;
          font-weight: 600;
          padding: 0 0 0 16px;
    #body
      //background: no-repeat center/100% url('/background.jpg');
      //background-attachment: fixed;
      //padding-bottom: 100px;
      width: 100%;
    #footer
      align-items: center;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-evenly;
      padding: 0 15%;
      //width: 100%;
      .footer_funLogo
        justify-content: center;
        display: flex;
        .logo
          height: auto;
          width: 70%

      .footer_copyRight
        color: #000;
        font-size: 10pt;
        font-weight: 700;


</style>
