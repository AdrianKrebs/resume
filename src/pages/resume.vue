<template>
  <div class="page-wrapper">
    <div class="page">
      <div class="page-inner">
        <component :is="$route.params.resumeid"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import '../resumes/resumes';

  export default Vue.component('resume', {
    name: 'app'
  });
</script>

<style lang="less">
  .page-inner {
    height: 100%;
    width: 100%;
  }

  .page-wrapper {
    overflow-x: hidden;
    background: #eeeeee;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
  }

  .resume {
    height: 100%;
    width: 100%;
  }

  .resume {
    font-family: 'Roboto' !important;
    background: #eeeeee;

  }

  a {
    cursor: pointer;
  }

  .description-personal {
    margin-left: 20px;
    margin-top: 20px;
    padding-right: 40px;
    text-align: justify;
    font-family: Roboto;

  }

  .title {
    font-family: Exo;
    right: 25px;
    padding-left: 20px;
    padding-top: 20px;
    bottom: 25px;
    h2 {
      display: block;
      font-size: 1.5em;
      font-weight: bold;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      color: white;
      color: rgba(0, 0, 0, 0.7);
      padding-top: 0;
      margin-top: 0;
      letter-spacing: 5px;
    }
    div {
      margin-top: -5px;
      margin-top: 0;
      margin: 0;
      padding: 0;
      line-height: 15pt;
      font-weight: 300;
      font-weight: 500;
      letter-spacing: 2px;
      letter-spacing: 3px;
      color: white;
      color: #16151c;
      color: rgba(63, 61, 60, 0.71);
      display: block;
      font-size: 0.67em;
      font-size: 10pt;
      -webkit-margin-before: 2.33em;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      padding-top: 0;
      text-transform: uppercase;
      opacity: 0.8;
    }
  }

  .section-headline {
    font-size: 1.2em;
    font-weight: 500;
    opacity: 0.8;
    margin-left: 20px;
    margin-top: 40px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.870588);
  }

  .c {
    clear: both;
  }

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding-top: 9px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  p {
    margin-top: 0;
    margin-bottom: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 10pt;
    line-height: 17pt;
  }

  .m_box {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .fa, .material-icons {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 26px;
  }

  h1, h3, h5, h6 {
    font-weight: 400;
    margin: 0;
  }

  h2 {
    font-weight: 400;
    font-weight: 500;
    margin: 0;
    margin: 0;
    font-size: 22pt;
    line-height: 37pt;
  }

  h4 {
    font-weight: 400;
    margin: 0;
    font-size: 12pt;
    line-height: 20pt;
    opacity: 1;
  }

  .rightCol {
    width: 63.5%;
    height: 100%;
    float: right;
    display: flex;
    flex-direction: column;
    .block {
      width: 90%;
      position: relative;
      background-color: #ffffff;
      padding: 20px;
      margin-top: 5px;
      margin-bottom: 5px;
      display: inline-block;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
      .headline {
        font-weight: 300;
        display: block;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.870588);
      }
      .subheadline {
        color: rgba(0, 0, 0, 0.541176);
        font-size: 14px;
        font-weight: 300;
      }
      .info {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.870588);
        margin-bottom: 0;
        padding-top: 10px;
      }
      .icon {
        width: 16%;
        float: left;
        margin-left: 0;
        .fa, .material-icons {
          text-align: center;
          display: block;
          font-size: 30pt;
        }
      }
      .content {
        width: 80%;
        position: absolute;
        height: 96%;
        left: 17%;
        padding-right: 3%;
        text-align: left;
        display: flex;
        flex-direction: column;
        .item {
          border-bottom: 1px solid #bdbdbd;
          flex: 1;
          width: 97%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          padding-top: 0;
          span {
            color: #d8ab94;
            margin-top: 0;
            font-size: 10pt;
            line-height: 16pt;
          }
          p {
            margin-top: 5px;
          }
        }
        .item:last-of-type {
          border-bottom-style: none;
          border-bottom-style: none;
        }
      }
    }
  }

  .leftCol {
    width: 35%;
    height: 100%;
    float: left;
    padding: 0;
    text-align: left;
    color: #444444;
    color: rgba(0, 0, 0, 0.870588);
    background-color: #ffffff;
    overflow: hidden;
    display: block;
    .section-headline {
      color: rgba(0, 0, 0, 0.870588);
    }
    a {
      color: rgba(0, 0, 0, 0.870588);
      text-decoration: none;
    }
    .heading {
      background-color: rgba(0, 0, 0, 0.12);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      width: 100%;
      height: 277px;
    }
    .item {
      width: 100%;
      margin-top: 13px;
      float: left;
      .fa, .material-icons {
        display: inherit;
        text-align: center;
      }
      .icon {
        width: 20%;
        float: left;
      }
      .text {
        float: right;
        width: 69%;
        padding-right: 10%;
        padding-top: 0;
        display: block;
        font-size: 15px;
        font-weight: 300;
        li {
          padding-top: 0;
          display: block;
          font-size: 15px;
          font-weight: 300;
        }
      }
      span {
        font-weight: 300;
      }
      .skill {
        clear: both;
        width: 97%;
        padding-top: 4px;
        .left {
          float: left;
          width: 10%;
          padding-top: 3px;
          i:nth-child(2) {
            float: left;
            padding-top: 4px;
          }
        }
        .right {
          float: right;
          width: 93%;
          .progress {
            float: left;
            position: relative;
            height: 8px;
            display: block;
            width: 95%;
            background-color: rgba(0, 0, 0, 0.19);
            border-radius: 3px;
            margin: 0.5rem 0 1rem;
            overflow: visible;
            margin-bottom: 10px;
            .determinate {
              background-color: #757575;;
              position: absolute;
              border-bottom-left-radius: 3px;
              border-top-left-radius: 3px;
              top: 0;
              bottom: 0;
            }
          }
        }
      }
    }
    .item.last .text {
      border-bottom-style: none;
      padding-bottom: 0;
    }
  }

  #myselfpic {
    background-image: url('../assets/person.png');
    color: black;
  }

  #githubIcon {
    width: 25px;
    padding-left: 17px;
  }

  .page {
    background: white;
    position: relative;
    width: 21cm;
    height: 29.68cm;
    display: block;
    page-break-after: auto;
    overflow: hidden;
  }

  .desc {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 17pt;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.870588);
    margin-bottom: 0;
    padding-top: 9px;
  }

  .points {
    font-size: 14px;
    ul li {
      list-style-position: outside;

      /*
     * Because the bullet is outside of the list’s
     * container, indent the list entirely
     */
      margin-left: 1em;
    }

  }

  .footer {
    p {
      margin-bottom: 10px;
    }
  }

</style>
