<script setup>
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
              Különösen érdeklődöm a szoftverek kliensoldali fejlesztése iránt."
  profilePic="/pfp/profile_picture.png"/>
  <Seperator/>
  <SectionStudies class="pb-20">
    <!-- Add studies entry at "@/assets/data/studies.json" -->
    <Study
      class="transition-transform duration-300 hover:scale-105 cursor-default"
      v-for="(study, index) in studies" 
      :key="index"
      :icon="study.icon"
      :year="study.year"
      :name="study.name"
      :subname="study.subname"
      :data='study.data'
    />
  </SectionStudies>
  <FooterBar/>
</template>