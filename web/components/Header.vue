<template lang="pug">
div.header
  div.link_wrap
    div.link
      nuxt-link.link_top(to="/")
        img.icon(src='/icon-top.png')
    div.link
      div.link_listIntermal
        nuxt-link(to="/research") 研究紹介
        nuxt-link(to="/session") オンラインセッション
        nuxt-link(to="/contact") お問い合わせ
      div.link_listExternal
        a(href="#" rel="noopener noreferrer" target="_blank")
          object.twitter(type="image/svg+xml" data="/svg/twitter.svg")
        a(href="#" rel="noopener noreferrer" target="_blank")
          object.facebook(type="image/svg+xml" data="/svg/facebook.svg")
        //a(href="#" rel="noopener noreferrer" target="_blank")
  //div.background_wrap
    img.background(src='/background.jpg')
      
</template>


<script>
export default {
    
}
</script>


<style lang="sass" scoped>
@media screen and (max-width: 700px) //スマホ
  .header
    

@media screen and (min-width: 701px) //パソコン
  //.header
    //box-shadow: 0 0px 5px #ccc;
    //width: 100vw;
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
        display: flex;
    a
      text-decoration: none;
    .link_top
      color: #333;
      font-size: 24pt;
      font-weight: 600;
      .icon
        //background-size: cover;
        height: 24px;
    .link_listIntermal
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