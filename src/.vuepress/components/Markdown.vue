<template>
	<div v-html="renderMarkdown(props.content)" />
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { ref } from 'vue';


interface MarkdownProps {
	// Markdown content to render
	content: string;
}

const props = withDefaults(defineProps<MarkdownProps>(), {});

const renderMarkdown = (content): Promise<void> => {
	if (!content) return;

	// Create a new markdown-it instance
	const md = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true,
	});

	// Render the markdown content to HTML
	return md.render(content);
};
</script>