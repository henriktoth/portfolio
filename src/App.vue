<script setup>
import Navbar from './components/Navbar.vue';
import IntroCard from './components/IntroCard.vue';
import FooterBar from './components/FooterBar.vue';
import Seperator from './components/Seperator.vue';
import Section from './components/Section.vue';
import RefCard from './components/RefCard.vue';
import studies from './assets/data/studies.json';
import jobs from './assets/data/jobs.json';
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
  <Section title="Tanulmányok">
    <!-- Add studies entry at "@/assets/data/studies.json" -->
    <RefCard
      v-for="(study, index) in studies" 
      :key="index"
      :type="study.type"
      :icon="study.icon"
      :year="study.year"
      :name="study.name"
      :subname="study.subname"
      :data='study.data'
    />
  </Section>
  <Seperator/>
  <Section title="Tapasztalat">
    <RefCard
      v-for="(job, index) in jobs" 
      :key="index"
      :type="job.type"
      :icon="job.icon"
      :year="job.year"
      :name="job.name"
      :subname="job.subname"
      :data='job.data'
    />
  </Section>
  <FooterBar/>
</template>