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
import projects from './assets/data/projects.json';
import ProjectCard from './components/ProjectCard.vue';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  <Navbar :links="[
    { text: t('navbar.introduction'), url: '#' },
    { text: t('navbar.education'), url: '#s1' },
    { text: t('navbar.experience'), url: '#s2' },
    { text: t('navbar.technologies'), url: '#s3' },
    { text: t('navbar.projects'), url: '#s4' },
  ]" />
  <IntroCard :name="t('main.name')" :description="t('main.description')" profilePic="/pfp/profile_picture.png" />

  <Seperator id="s1" />
  <Section :title="t('sections.sectionTitle.education')">
    <RefCard v-for="(study, index) in studies" :key="index" :id="study.id" :type="study.type" :icon="study.icon"
      :year="study.year" :name="t(`study.${study.id}.name`)" :subname="t(`study.${study.id}.subname`)"
      :data='study.data' />
  </Section>
  <Seperator id="s2" />
  <Section :title="t('sections.sectionTitle.experience')">
    <RefCard v-for="(job, index) in jobs" :key="index" :id="job.id" :type="job.type" :icon="job.icon" :year="job.year"
      :name="t(`job.${job.id}.name`)" :subname="t(`job.${job.id}.subname`)" :data='job.data' />
  </Section>
  <Seperator id="s3" />
  <Section :title="t('sections.sectionTitle.technologies')" :subtitle="t('sections.sectionSubtitle.technologies')">
    <TechCard v-for="(tech, index) in techStack" :key="index" :icon="tech.icon" :name="tech.name" />
  </Section>
  <Seperator id="s4" />
  <Section :title="t('sections.sectionTitle.projects')" :subtitle="t('sections.sectionSubtitle.projects')">
    <ProjectCard v-for="(project, index) in projects" :key="index" :name="project.name" :isInDev="project.isInDev"
      :techStack="project.techStack" :description="t(`projects.${project.id}.description`)" :icon="project.icon"
      :github="project.github" :demo="project.demo" />
  </Section>
  <FooterBar />
</template>