<template>
	<div class="theme-container">
		<main class="page">
			<div class="theme-default-content">
				<h1>{{ frontmatter.title || 'Lab Members' }}</h1>
				<div class="members-content">
					<Content />
				</div>

				<!-- Member cards will be rendered here -->
				<div class="members-grid">
					<div v-for="page in memberPages" :key="page.path" class="member-card">
						<div v-if="page.frontmatter.image" class="member-image">
							<img :src="page.frontmatter.image" :alt="page.title" />
						</div>
						<div class="member-info">
							<h2>{{ page.title }}</h2>
							<p v-if="page.frontmatter.position" class="member-position">
								{{ page.frontmatter.position }}
							</p>
							<p v-if="page.frontmatter.email" class="member-email">
								<a :href="`mailto:${page.frontmatter.email}`">{{ page.frontmatter.email }}</a>
							</p>
							<p v-if="page.frontmatter.website" class="member-website">
								<a :href="page.frontmatter.website" target="_blank" rel="noopener noreferrer">
									Website
								</a>
							</p>
							<div class="member-bio">
								<router-link :to="page.path">View Profile</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { usePages, useFrontmatter } from '@vuepress/client'

const frontmatter = useFrontmatter()
const pages = usePages()

// Filter to get only member pages (excluding the index page)
const memberPages = computed(() => {
	return pages.value
		.filter(p =>
			p.path.startsWith('/members/') &&
			p.path !== '/members/' &&
			!p.path.includes('.html')
		)
		.sort((a, b) => {
			// Sort by some property if needed, for example by name (title)
			return a.title.localeCompare(b.title)
		})
})
</script>

<style scoped>
.members-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}

.member-card {
	border: 1px solid #eaecef;
	border-radius: 6px;
	overflow: hidden;
	transition: transform 0.3s, box-shadow 0.3s;
}

.member-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.member-image {
	height: 200px;
	overflow: hidden;
}

.member-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.member-info {
	padding: 1rem;
}

.member-info h2 {
	margin-top: 0;
	font-size: 1.4rem;
}

.member-position {
	color: #3eaf7c;
	font-weight: 500;
}

.member-email,
.member-website {
	margin: 0.5rem 0;
}

.member-bio {
	margin-top: 1rem;
}
</style>