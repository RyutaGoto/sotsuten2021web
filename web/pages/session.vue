<template lang="pug">
div#session
  div.container
    Header
    div.container_list.explanation
      h2.explanation_title-en ONLINE SESSION
      h2.explanation_title-jp オンラインセッション
    div.container_list.dates
      h2.list_title 開催日時
      p.dates_date 2021.#[span 2.20]土#[span ／2.21]日
      p.dates_time 10:30~(AM)
      p.dates_caption 
        | YouTubeにて配信開始予定！<br>
        | 発表内容へのご意見・ご質問はぜひチャット欄へ！発表後にMCがお答えさせていただくかもしれません。<br>
      p.dates_supplement
        | オンラインセッションのアーカイブ動画は予告なく非公開にする場合がございます。<br>
        | あらかじめご了承ください。<br>
      div.dates_link
        a(href="https://www.youtube.com/channel/UC0t8OgTsK7UfqohpG0HSQMw" target="_blank" rel="noopener noreferrer") 配信チャンネルを開く
        div.arrow-right
    div.container_list.schedule
      h2.list_title タイムスケジュール
      p.annotaion ※記載されている時間は目安となります。
      div.schedule_record_wrap
        div.record-left
          p.schedule_date #[span 2.20]土
          Record(:time="i.time" :title="i.title" :name="i.name" :contents="i.contents")(v-for="i in data.first")
          div.link_button
            a(href="https://youtu.be/G6QZyTiMoyQ" target="_blank" rel="noopener noreferrer") 配信ページを開く
            div.arrow-right
        div.record-right
          p.schedule_date #[span 2.21]日
          Record(:time="i.time" :title="i.title" :name="i.name" :contents="i.contents")(v-for="i in data.second")
          div.link_button
            a(href="https://youtu.be/h-o7RfnZTJo" target="_blank" rel="noopener noreferrer") 配信ページを開く
            div.arrow-right
      div.schedule_link_wrap
        div.link-left
          div.link_button
            a(href="https://youtu.be/G6QZyTiMoyQ" target="_blank" rel="noopener noreferrer") 配信ページを開く
            div.arrow-right
        div.link-right
          div.link_button
            a(href="https://youtu.be/h-o7RfnZTJo" target="_blank" rel="noopener noreferrer") 配信ページを開く
            div.arrow-right
    //div.container_list.guest
      h2.list_title ゲスト紹介
  
</template>

<script>

import Header from '~/components/Header.vue'
import Record from '~/components/Record.vue'
import tableData from '~/assets/json/table-4.json'

export default {
  components: {
    Header,
  },

  data(){
    return{
      data: tableData
    }
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 700px) //スマホ
  #session
    .container
      align-items: center;
      background: no-repeat url('/sotsuten2021/background.jpg');
      background-attachment: fixed;
      background-position: 50% 50%;
      background-size: cover;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 10;
      .container_list
        width: 100%;
        .list_title
          background-color: #000;
          color: #fff;
          display: inline-block;
          font-size: 14pt;
          padding: 6px 5px;
          width: auto;
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
      .dates
        align-items: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        text-align: center;
        .dates_date
          font-family: 'Inter', sans-serif;
          font-size: 16pt;
          font-weight: 900;
          margin-bottom: 0;
          span
            font-size: 24pt;
        .dates_time
          font-family: 'Inter', sans-serif;
          font-size: 16pt;
          font-weight: 900;
          margin: 0;
        .dates_caption
          font-size: 11pt;
          font-weight: 600;
          line-height: 1.4em;
          margin: 30px 0;
          padding: 0 32px;
        .dates_supplement
          font-size: 11pt;
          padding: 8px 32px 80px 32px;
        .dates_link
          align-items: center;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          margin: 0 32px;
          outline: 3px solid #000;
          padding: 0 28px 0 40px;
          a
            color: #000;
            font-size: 10pt;
            font-weight: 700;
            padding: 12px 24px 12px 24px;
            text-decoration: none;
            transition: color 0.3s;
          .arrow-right
            border-top: solid 2px #000;
            border-right: solid 2px #000;
            width: 8px;
            height: 8px;
            transform: rotate(45deg);

      .schedule
        align-items: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        margin-bottom: 120px;
        padding: 80px 0;
        text-align: center;
        .schedule_record_wrap
          display: flex;
          flex-direction: column;
          margin-top: 24px;
          padding: 0;
          width: 75vw;
          .schedule_date
            border-bottom: 0.2rem solid;
            font-size: 14pt;
            font-weight: 700;
            margin: 4px 0 24px 0;
            padding: 4px;
            text-align: center;
            span
              font-size: 24pt;
              margin: 0;
          .record-left
            margin: 0;
            text-align: left;
            width: 100%;
          .record-right
            margin: 120px 0 0 0;
            text-align: left;
            width: 100%;
          .link_button
            align-items: center;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            margin: 0;
            outline: 3px solid #000;
            padding: 0 12px 0 56px;
            a
              color: #000;
              font-size: 10pt;
              font-weight: 700;
              padding: 12px 16px 12px 24px;
              text-decoration: none;
              transition: color 0.3s;
            .arrow-right
              border-top: solid 2px #000;
              border-right: solid 2px #000;
              width: 8px;
              height: 8px;
              transform: rotate(45deg);
          
        .schedule_link_wrap
          display: none;
          
      .guest
        align-items: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        text-align: center;

    

@media screen and (min-width: 701px) //パソコン
  #session
    .container
      align-items: center;
      background: no-repeat center/100% url('/sotsuten2021/background.jpg');
      background-attachment: fixed;
      background-position: 50% -4%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 10;
      .container_list
        width: 100%;
        .list_title
          background-color: #000;
          color: #fff;
          display: inline-block;
          font-size: 16pt;
          padding: 6px 5px;
          width: auto;
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
      .dates
        align-items: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        text-align: center;
        .dates_date
          font-family: 'Inter', sans-serif;
          font-size: 16pt;
          font-weight: 900;
          margin-bottom: 0;
          span
            font-size: 28pt;
        .dates_time
          font-family: 'Inter', sans-serif;
          font-size: 16pt;
          font-weight: 900;
          margin: 0;
        .dates_caption
          font-weight: 700;
          line-height: 1.8em;
          margin: 30px 0;
        .dates_supplement
          font-size: 11pt;
          padding: 16px 0 100px 0;
        .dates_link
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
            font-size: 10pt;
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

      .schedule
        align-items: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        margin-bottom: 120px;
        padding: 80px 0;
        text-align: center;
        .schedule_date_wrap
          display: flex;
          width: 75vw;
          .schedule_date
            border-bottom: 0.2rem solid;
            font-size: 14pt;
            font-weight: 700;
            padding-bottom: 8px;
            text-align: left;
            span
              font-size: 24pt;
              margin-right: 4px;
          .date-left
            margin: 40px;
            text-align: left;
            width: 50%;
          .date-right
            margin: 40px;
            text-align: left;
            width: 50%;
        .schedule_record_wrap
          display: flex;
          width: 75vw;
          .record-left
            margin: 40px;
            text-align: left;
            width: 50%;
          .record-right
            margin: 40px;
            text-align: left;
            width: 50%;
        .schedule_link_wrap
          display: flex;
          width: 75vw;
          .link_button
            align-items: center;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            outline: 3px solid #000;
            padding: 0 30px 0 90px;
            transition: background-color 0.3s, border-top 0.3s, border-right 0.3s;
            &:hover
              background-color: #000;
              .arrow-right
                border-top: solid 2px #fff;
                border-right: solid 2px #fff;
            a
              color: #000;
              font-size: 10pt;
              font-weight: 700;
              padding: 12px 80px 12px 30px;
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
          .link-left
            border-top: 0.2rem solid;
            margin: 0 40px;
            padding-top: 32px;
            width: 50%;
          .link-right
            border-top: 0.2rem solid;
            margin: 0 40px;
            padding-top: 32px;
            width: 50%;
          
      .guest
        align-items: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        text-align: center;

</style>
