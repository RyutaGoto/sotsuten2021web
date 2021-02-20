<template lang="pug">
div.header
  div.link_wrap
    div.link
      nuxt-link.link_top(to="/")
        img.icon(src='/sotsuten2021/icon-top.png')
    div.link.nav
      div#nav-drawer
        input#nav-input.nav-unshown(type="checkbox")
        label#nav-open(for="nav-input")
          span
          span
        label#nav-close.nav-unshown(for="nav-input")
        div#nav-content
          div.link_listIntermal
            nuxt-link(to="/research") #[span.en INTRODUCTION]#[span.jp 研究紹介]
            nuxt-link(to="/session") #[span.en ONLINE SESSION]#[span.jp オンラインセッション]
            nuxt-link(to="/contact") #[span.en CONTACT]#[span.jp お問い合わせ]
          div.link_listExternal
            a(href="https://twitter.com/FUN2021sotsuten" rel="noopener noreferrer" target="_blank")
              object.twitter(type="image/svg+xml" data="/sotsuten2021/svg/twitter.svg")
            a(href="https://www.facebook.com/sotsuten.funIFD/" rel="noopener noreferrer" target="_blank")
              object.facebook(type="image/svg+xml" data="/sotsuten2021/svg/facebook.svg")
          
</template>


<script>
export default {
    
}
</script>


<style lang="sass" scoped>
@media screen and (max-width: 700px) //スマホ
  .header
    background-color: #fff;
    display: flex;
    flex-direction: column;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    .link_wrap
      align-items: center;
      display: flex;
      flex-dirextion: row;
      height: 60px;
      justify-content: space-between;
      padding: 0 5%;
      .link
        display: flex;
    a
      text-decoration: none;
    .link_top
      color: #333;
      font-size: 24pt;
      font-weight: 600;
      .icon
        height: 26px;
    

    .background_wrap
      display: block;
      height: 120px;
      width: 100vw;
      .background
        width: 100%;

    //ハンバーガーメニューのところ
    .nav
      position: fixed;
      z-index: 100;
      top: 3%;
      right: 6%;
      #nav-drawer
        position: relative;
        .nav-unshown
          display: none;
        #nav-open
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 20px;
          width: 32px;
          span
            background: #555;
            //border-radius: 3px;
            //box-shadow: 0 1px 4px 0 #5a5a5a;
            content: '';
            cursor: pointer;
            display: block;
            height: 4px;
            width: 32px;
        #nav-close
        #nav-content
          background: #fff;
          display: flex;
          flex-direction: column;
          height: 100%;
          //justify-content: center;
          left: 100%;
          //max-width: ;
          overflow: auto;
          padding: 0;
          position: fixed;
          top: 60px;
          transition: .3s ease-in-out;
          width: 100%;
          z-index: 999;
          .link_listIntermal
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 80px 0;
            a
              align-items: center;
              color: #000;
              display: flex;
              flex-direction: column;
              margin: 20px 0;
              padding: 8px 5px;
              .en
                font-size: 20pt;
                font-weight: 800;
                margin: -8px 0;
              .jp
                background-color: #000;
                color: #fff;
                font-size: 14pt
                font-weight: 900;
                padding: 1px 2px;
          .link_listExternal
            display: flex;
            flex-direction: row;
            justify-content: center;
            a
              display: inline-block;
              margin: 0 12px;
              .twitter
                height: 36px;
                pointer-events: none;
                width: auto;
              .facebook
                height: 36px;
                pointer-events: none;
                width: auto;
        #nav-input:checked ~ #nav-close
          display: block;
        #nav-input:checked ~ #nav-content
          -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
          box-shadow: 6px 0 25px rgba(0, 0, 0, .15);
          

          

        
    

@media screen and (min-width: 701px) //パソコン
  .header
    background-color: #fff;
    //box-shadow: 0 4px 8px #eee;
    display: flex;
    flex-direction: column;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    .link_wrap
      align-items: center;
      display: flex;
      flex-dirextion: row;
      height: 60px;
      justify-content: space-between;
      padding: 0 5%;
      .link
        #nav-input
          display: none;
        #nav-content
          display: flex;
    a
      text-decoration: none;
    .link_top
      color: #333;
      font-size: 24pt;
      font-weight: 600;
      .icon
        height: 24px;
    .link_listIntermal
      .en
        display: none;
      a
        color: #000;
        font-size: 11pt;
        font-weight: 600;
        margin: 0 12px;
        padding: 8px 5px;
        transition: background-color 0.3s, color 0.3s;
        &:hover
          background-color: #000;
          color: #fff;
    .link_listExternal
      a
        display: inline-block;
        margin: 0 12px;
        .twitter
          height: 20px;
          pointer-events: none;
          width: auto;
        .facebook
          height: 20px;
          pointer-events: none;
          width: auto;

    .background_wrap
      display: block;
      height: 120px;
      width: 100vw;
      .background
        //background-size: contain;
        //heihgt: 100%;
        //object-fit: cover;
        width: 100%;



</style>