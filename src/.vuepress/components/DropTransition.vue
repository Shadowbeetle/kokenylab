<template>
	<div class="drop-transition" :class="{ 'drop-enter': isMounted }">
		<slot></slot>
	</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const isMounted = ref(false);

const props = defineProps<{
	delay: number;
}>();

onMounted(() => {
	// Small delay to ensure proper initial state
	setTimeout(() => {
		isMounted.value = true;
	}, props.delay * 1000);
});
</script>

<style scoped>
.drop-transition {
	transition: transform 0.5s, opacity 0.5s;
	opacity: 0;
	transform: translateY(-20px);
}

.drop-enter {
	opacity: 1;
	transform: translateY(0);
}
</style>