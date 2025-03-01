<script setup>
// Cannot use TS when import from @temp
import { ref } from 'vue';
import { contact as contactData } from '@temp/contact-data/contact.js';

const props = defineProps(['title']);
const contact = ref(contactData);
</script>
<template>
	<div class="content-box contact-box">
		<header class="content-title" v-html="props.title"></header>
		<div>
			<img width="150" height="150" :src="contact.contactPersonPhoto" />
			<h3>{{ contact.contactPersonName }}</h3>
			<p>{{ contact.contactPersonPosition }}</p>
			<p>{{ contact.contactEmail }}</p>
			<p>{{ contact.contactPhone }}</p>
		</div>
		<div>
			<img width="150" height="150" :src="contact.institutionLogo" />
			<p>{{ contact.institutionName }}</p>
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