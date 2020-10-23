<template lang="pug">
  div.container
    div.header
      Header
    div.section
    div.section
    div.section
    div.footer

      Logo
      h1.title
        sotsuten2021
      div.links
        a.button--green(href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer") Documentation
        a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer") GitHub
</template>

<script>
import Card from '~/components/Card.vue'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import Title from '~/components/Title.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  .container
    

@media screen and (min-width: 701px) //パソコン
  .container
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


  .title
    color: #35495e;
    display: block;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    font-size: 100px;
    letter-spacing: 1px;

  .subtitle
    color: #526488;
    font-weight: 300;
    font-size: 42px;
    padding-bottom: 15px;
    word-spacing: 5px;

  .links
    padding-top: 15px;
</style>
