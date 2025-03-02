<script setup>
// Cannot use TS when import from @temp
import { ref } from 'vue';
import { contact as contactData } from '@temp/contact-data/contact.js';

const contact = ref(contactData);
</script>
<template>
	<div class="flex-container">
		<div>
			<img width="150" height="150" :src="contact.contactPersonPhoto" />
		</div>
		<div class="info-container">
			<h3>{{ contact.contactPersonName }}</h3>
			<p>{{ contact.contactPersonPosition }}</p>
			<p><a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a></p>
			<p><a :href="`tel:${contact.contactPhone}`"> {{ contact.contactPhone }}</a></p>
		</div>
	</div>
	<div class="flex-container align-center">
		<div>
			<img width="150" height="150" :src="contact.institutionLogo" />
		</div>
		<div class="info-container">
			<p><strong>{{ contact.institutionName }}</strong></p>
			<p>{{ contact.institutionAddress }}</p>
		</div>
		<div>
			<img width="150" height="150" :src="contact.institutionPhoto" />
		</div>
	</div>
	<hr />
</template>

<style scoped>
.flex-container {
	display: flex;
}

.align-center {
	align-items: center;
}

.info-container {
	margin-left: 2rem;
	margin-right: 2rem;
}

.flex-container h3 {
	margin-top: 0;
}
</style>