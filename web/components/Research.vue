<template lang="pug">
  div#research
    div.research-top
      div.context-left
        p.num {{ num }}
        p.attribute {{ attribute }}
      div.context-right
        p.text {{ text }}
    div.research-bottom
      img.visual(:src="img")
</template>


<script>
export default {
  props: {
    num:{
      type: Number,
      required: true
    },
    attribute: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    }
  },
  computed: {
    
  }
}
</script>


<style lang="sass" scoped>
@media screen and (max-width: 700px) //スマホ
  #research
    .research-top
      align-items: center;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      margin: 10vh auto 0 auto;
      .context-left
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 20%;
        .num
          font-size: 24pt;
          font-weight: 700;
          margin: 0;
        .attribute
          background-color: #000;
          color: #fff;
          font-size: 14pt;
          font-weight: 600;
          margin: 0;
          padding: 2px 4px;
          width: 100%;
      .context-right
        font-size: 10pt;
        font-weight: 300;
        line-height: 1.5rem;
        width: 80%;
    .research-bottom
      .visual
        height: auto;
        object-fit: cover;
        width: 100vw;

    

@media screen and (min-width: 701px) //パソコン
  #research
    .research-top
      display: flex;
      margin: 10vh auto 0 auto;
      .context-left
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 20%;
        .num
          font-size: 24pt;
          font-weight: 700;
          margin: 0;
        .attribute
          background-color: #000;
          color: #fff;
          font-size: 14pt;
          font-weight: 600;
          margin: 0;
          padding: 4px 8px;
          width: 45%;
      .context-right
        font-size: 10pt;
        font-weight: 300;
        line-height: 1.5rem;
        width: 80%;
    .research-bottom
      .visual
        height: auto;
        object-fit: cover;
        width: 80vw;



</style>