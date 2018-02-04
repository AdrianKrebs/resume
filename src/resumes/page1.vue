<template>
  <div class="resume">
    <div class="leftCol m_box">
      <div class="shadow"></div>
      <div class="heading" id="myselfpic">
      </div>
      <div class="section-headline">
        {{ lang.headings.contact }}
      </div>
      <div class="item">
        <div class="icon">
          <i class="material-icons">location_city</i>
        </div>
        <div class="text">
          <ul>
            <li>{{person.contact.street}}</li>
            <li>{{person.contact.city}}</li>
          </ul>
        </div>
      </div>

      <a :href="'tel:'+person.contact.phone">
        <div class="item">
          <div class="icon">
            <i class="material-icons">phone</i>
          </div>
          <div class="text">
            {{person.contact.phone}}
          </div>
        </div>
      </a>

      <a :href="'mailto:'+person.contact.email">
        <div class="item">
          <div class="icon">
            <i class="material-icons">email</i>
          </div>
          <div class="text">
            {{person.contact.email}}
          </div>
        </div>
      </a>

      <a v-if="person.contact.github" :href="'https://github.com/'+person.contact.github" target="_blank">
        <div class="item">
          <div class="icon">
            <i class="fa fa-github"></i>
          </div>
          <div class="text">
            <span>@{{person.contact.github}}</span>
            <span>github.com/{{person.contact.github}}</span>
          </div>
        </div>
      </a>

      <a v-if="person.contact.website" :href="person.contact.website" target="_blank">
        <div class="item">
          <div class="icon">
            <i class="material-icons">language</i>
          </div>
          <div class="text">
            <span>{{person.contact.website}}</span>
          </div>
        </div>
      </a>

      <div class="item last">
        <div class="section-headline">
          {{ lang.headings.skills }}
        </div>
        <div class="skill" v-for="skill in person.skills" :key="skill.name">
          <div class="right">
            <span>{{skill.name}}&nbsp;</span>
            <div class="progress">
              <div class="determinate" :style="'width: '+skill.level+'%;'">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rightCol">
      <div class="title">
        <h2>{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h2>
        <div>{{person.position}}</div>
      </div>

      <div class="section-headline">{{ lang.headings.experience }}</div>
      <div class="block" v-for="experience in person.experience" :key="experience.company">
        <div class="block-helper"></div>
        <div class="headline"><h3>{{experience.position}} - {{experience.company}}</h3>
          <div class="subheadline">{{experience.timeperiod}}</div>
          <p class="info">
            {{experience.description}}
          </p>
        </div>
      </div>
      <div class="section-headline">{{ lang.headings.education }}</div>
      <div class="block" v-for="education in person.education" :key="education.degree">
        <div class="block-helper"></div>
        <div class="headline"><h3>{{education.degree}}</h3></div>
        <div class="subheadline">{{education.timeperiod}}</div>
        <div class="desc">
          <div v-for="desc in education.description">
            {{desc}}
          </div>
          <div>
            {{education.school}}
          </div>
        </div>
      </div>
    </div>

    <div style="clear:both;"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {getVueOptions} from './resumes';

  let name = 'page1';
  export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
