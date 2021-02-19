<template lang="pug">
  div#app
    div#body
      Nuxt
    div#footer
      div.footer_funLogo
        img.logo(src="/sotsuten2021/funLogo.png")
      div.footer_copyRight ©公立はこだて未来大学　情報デザインコース2021
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
      width: 100%;
    #footer
      align-items: center;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-evenly;
      padding: 0 15%;
      .footer_funLogo
        justify-content: center;
        display: flex;
        .logo
          height: auto;
          width: 70%

      .footer_copyRight
        color: #000;
        font-size: 8pt;
        font-weight: 600;


@media screen and (min-width: 701px) //パソコン
  #app
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
      width: 100%;
    #footer
      align-items: center;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-evenly;
      padding: 0 15%;
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
