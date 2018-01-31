<template>
  <div class="resume">
    <div class="leftCol m_box">
      <div class="shadow"></div>
      <div class="section-headline">
        {{ lang.headings.languages }}
      </div>
      <div class="langauges" v-for="lang in person.languages">
        <div class="right">
          <span>{{lang.name}}&nbsp;</span>
          <div>
            <span>{{lang.level}}</span>
          </div>
        </div>
      </div>

      <div class="item last">
        <div class="section-headline">
          {{ lang.headings.personal }}
        </div>
        <div class="infos" v-for="lang in person.infos">
          <div class="right">
            <span>{{lang.title}}&nbsp;</span>
            <div>
              <span>{{lang.description}}</span>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>

    <div class="rightCol">
      <div class="col-content">
      <div class="section-headline">{{ lang.headings.projects }}</div>
      <div class="block" v-for="experience in person.projects">
        <div class="block-helper"></div>
        <div class="headline"><h3>{{experience.position}} - {{experience.company}}</h3>
          <div class="subheadline">{{experience.timeperiod}}</div>
          <div class="points">
          <ul>
          <div v-for="point in experience.description">
          <li>{{point}}</li>
          </div>
          </ul>
        </div>
        </div>
      </div>
      <div class="section-headline">{{ lang.headings.activity }}</div>
      <div class="block" v-for="act in person.activities">
        <div class="block-helper"></div>
        <div class="headline"><h3>{{act.title}}</h3></div>
        <p class="info">
         {{act.description}}
        </p>
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

  let name = 'page2';
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
