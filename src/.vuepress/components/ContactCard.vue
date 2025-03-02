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
			<img width="150" height="150" :src="contact.contactPersonPhoto" />
			<h3>{{ contact.contactPersonName }}</h3>
			<p>{{ contact.contactPersonPosition }}</p>
			<p><a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a></p>
			<p><a :href="`tel:${contact.contactPhone}`"> {{ contact.contactPhone }}</a></p>
		</div>
		<div>
			<img width="150" height="150" :src="contact.institutionLogo" />
			<p><strong>{{ contact.institutionName }}</strong></p>
			<p>{{ contact.institutionAddress }}</p>
			<img width="150" height="150" :src="contact.institutionPhoto" />
		</div>
	</div>
</template>

<style scoped>
.contact-box {
	margin: 0 0 1.25rem 0;
}
</style>