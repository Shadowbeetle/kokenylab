<script setup>
// Cannot use TS when import from @temp
import { ref } from 'vue';
import { contact as contactData } from '@temp/contact-data/contact.js';
import { AutoLink } from "vuepress/client";

const props = defineProps(['title']);
const contact = ref(contactData);
</script>
<template>
	<div class="content-box contact-box">
		<AutoLink :config="{ link: '/contact/', text: 'Contact', }" :active="true" class="news-link">
			<header class="content-title" v-html="props.title"></header>
		</AutoLink>
		<div>
			<div class="flex-container">
				<img width="150" height="150" :src="contact.contactPersonPhoto" />
			</div>
			<div class="info-container">
				<h3>{{ contact.contactPersonName }}</h3>
				<p>{{ contact.contactPersonPosition }}</p>
				<p><a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a></p>
				<p><a :href="`tel:${contact.contactPhone}`"> {{ contact.contactPhone }}</a></p>
			</div>
		</div>
		<div>
			<div class="flex-container">
				<img width="150" height="150" :src="contact.institutionLogo" />
			</div>
			<p><strong>{{ contact.institutionName }}</strong></p>
			<p>{{ contact.institutionAddress }}</p>
			<div class="flex-container">
				<img width="150" height="150" :src="contact.institutionPhoto" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.flex-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.info-container {
	@media (max-width: 768px) {
		text-align: center;
	}
}

.contact-box {
	margin: 0 0 1.25rem 0;
}

.contact-box img {
	text-align: center;
}
</style>