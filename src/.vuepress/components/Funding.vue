<template>
	<div class="content-box funding-box">
		<header class="content-title" v-html="props.title"></header>
		<div class="funding-img-container">
			<img v-for="(image, index) in props.fundingImages" :key="index" :src="image.src" class="funding-img"
				:width="image.width" :height="image.height" />
		</div>
	</div>
</template>

<script setup lang="ts">
interface FundingProps {
	// Markdown content to render
	title: string;
	fundingImages: FundingImage[];
}

export interface FundingImage {
	src: string;
	height: number;
	width: number;
}

const props = withDefaults(defineProps<FundingProps>(), {
});
</script>

<style scoped>
.funding-box {
	margin-bottom: 1.25rem;
}

.funding-img-container {
	display: flex;
	flex-direction: column;
}

.funding-img {
	margin: 1rem 0;
}
</style>