<template>
  <div class="theme-container">
    <main class="page">
      <div class="theme-default-content">
        <h1>{{ frontmatter.title || 'About Us' }}</h1>
        <div class="about-content">
          <Content />
        </div>

        <!-- Additional about content can be added here -->
        <div v-if="frontmatter.contact" class="contact-info">
          <h2>Contact Information</h2>
          <div v-html="frontmatter.contact"></div>
        </div>

        <div v-if="frontmatter.research" class="research-areas">
          <h2>Research Areas</h2>
          <div v-html="frontmatter.research"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { usePages, useFrontmatter } from '@vuepress/client'

const frontmatter = useFrontmatter()
</script>

<style scoped>
/* Same styles as before */
</style>