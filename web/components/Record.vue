<template lang="pug">
  div#Record
    div.bar_left
      p.time {{ time }}
    div.bar_right
      p.title {{ title }}
      p.name {{ name }}
</template>


<script>
export default {
  props: {
    time:{
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    contents: {
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
  #Record
    display: flex;
    margin-bottom: 12px;
    .bar_left
      font-size: 10pt;
      font-weight: 600;
      letter-spacing: -1px;
      width: 35%;
      .time
        margin-top: 0;
    .bar_right
      margin-left: 1%;
      width: 64%;
      .title
        font-size: 11pt
        font-weight: 600;
        margin-bottom: 8px;
        margin-top: 0;
      .name
        font-size: 10pt;
        margin-top: 0;
    

@media screen and (min-width: 701px) //パソコン
  #Record
    display: flex;
    margin-bottom: 24px;
    .bar_left
      font-size: 11pt;
      font-weight: 600;
      width: 30%;
    .bar_right
      margin-left: 1%;
      width: 69%;
      .title
        font-size: 11pt
        font-weight: 600;
        margin-bottom: 8px;
      .name
        font-size: 10pt;
        margin-top: 0;

</style>