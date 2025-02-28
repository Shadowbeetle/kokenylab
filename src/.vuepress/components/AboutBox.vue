<template>
	<div class="content-box about-box">
		<header class="content-title" v-html="props.title"></header>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import Markdown from './Markdown.vue';

// Define props with validation and types
interface AboutBoxProps {
	// Markdown content to render
	title: string;
}

const props = withDefaults(defineProps<AboutBoxProps>(), {
});
</script>

<style scoped>
.about-box {
	margin: 1rem 0;
}
</style>