<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import IntroCard from './components/IntroCard.vue';
import FooterBar from './components/FooterBar.vue';
import Seperator from './components/Seperator.vue';
import SectionStudies from './components/SectionStudies.vue';
import Study from './components/Study.vue';
import studies from './assets/data/studies.json';

</script>

<template>
  <Navbar :links="[
    { text: 'BEMUTATKOZÁS', url: '#' },
    { text: 'TANULMÁNYOK', url: '#' },
    { text: 'TAPASZTALAT', url: '#' },
    { text: 'TECHNOLÓGIÁK', url: '#' },
    { text: 'PROJEKTEK', url: '#' },
  ]"/>
  <IntroCard 
  name="Tóth Henrik" 
  description="Programtervező Informatikus szakon tanulok az ELTE Informatikai karán.
              Már gyerekkorom óta érdeklődtem az informatika világa iránt, és ez ma sincsen másként.
              Munkámban preciz és alapos vagyok, könnyen dolgozom csapatban, és szeretek érdekes projektekben részt venni.
              Különösen érdeklődöm a szoftverek kliensoldali fejlesztése iránt."/>
  <Seperator/>
  <SectionStudies>
    <Study 
      v-for="(study, index) in studies" 
      :key="index"
      :year="study.year"
      :name="study.name"
      :subname="study.subname"
      :data='study.data'
    />
  </SectionStudies>
  <FooterBar/>
</template>