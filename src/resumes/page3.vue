<template>
  <div class="resume">
    <div class="leftCol m_box">
    placeholder
    </div>

    <div class="rightCol">
      <div class="col-content">
      <div class="section-headline">Sample header</div>
      <div class="block">
        <div class="block-helper"></div>
        <div class="headline"><h3>Test</h3></div>
        <div class="desc">
          content placeholder
        </div>
      </div>
      </div>
      <footer class="footer">
          <p>
            Dieses CV wurde in HTML5/Javascript mit Vue.js erstellt.<br>
            Repository: <a href="https://github.com/AdrianKrebs/resume">https://github.com/AdrianKrebs/resume</a>
          </p>
      </footer>
    </div>

    <div style="clear:both;"></div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import {getVueOptions} from './resumes';

  let name = 'page3';
  export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .langauges, .infos {
    margin-left: 20px;
  }

  .right {
    padding-bottom: 15px;
  }


  .col-content{
    margin-bottom: auto;
  }

  li, ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  a {
    color: darkblue;
  }

</style>
