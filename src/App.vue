<script setup>
import Navbar from './components/Navbar.vue';
import IntroCard from './components/IntroCard.vue';
import FooterBar from './components/FooterBar.vue';
import Seperator from './components/Seperator.vue';
import Section from './components/Section.vue';
import RefCard from './components/RefCard.vue';
import studies from './assets/data/studies.json';
import jobs from './assets/data/jobs.json';
import TechCard from './components/TechCard.vue';
import techStack from './assets/data/techstack.json';
import projects from './assets/data/projects.json'
import { defineSSRCustomElement } from 'vue';
</script>

<template>
  <Navbar :links="[
    { text: 'BEMUTATKOZÁS', url: '#' },
    { text: 'TANULMÁNYOK', url: '#s1' },
    { text: 'TAPASZTALAT', url: '#s2' },
    { text: 'TECHNOLÓGIÁK', url: '#s3' },
    { text: 'PROJEKTEK', url: '#s4' },
  ]"/>
  <IntroCard 
  name="Tóth Henrik" 
  description="Programtervező Informatikus szakon tanulok az ELTE Informatikai karán.
              Már gyerekkorom óta érdeklődtem az informatika világa iránt, és ez ma sincsen másként.
              Munkámban preciz és alapos vagyok, könnyen dolgozom csapatban, és szeretek érdekes projektekben részt venni.
              Különösen érdeklődöm a szoftverek kliensoldali fejlesztése iránt."
  profilePic="/pfp/profile_picture.png"/>
  <Seperator id="s1"/>
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
  <Seperator id="s2"/>
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
  <Seperator id="s3"/>
  <Section title="Technológiák" subtitle="Programozási nyelvek és technológiák, melyeket egyetemi feladatok, projektmunkák keretein belül használtunk.">
    <TechCard
      v-for="(tech, index) in techStack"
      :key="index"
      :icon="tech.icon"
      :name="tech.name"/>
  </Section>
  <Seperator id="s4"/>
  <Section title="Projektek" subtitle="Alkalmazások, melyeket az egyetemen és szabadidőmben készítettem.">  
    <ProjectCard
    v-for="(project, index) in projects"
    :key="index"
    :name = "project.name"
    :techstack = "project.techStack"
    :description = "project.description"
    :icon = "project.icon"/>
  </Section>
  <FooterBar/>
</template>