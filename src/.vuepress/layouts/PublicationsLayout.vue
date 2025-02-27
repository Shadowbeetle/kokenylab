<template>
	<div class="theme-container">
		<main class="page">
			<div class="theme-default-content">
				<h1>{{ frontmatter.title || 'Publications' }}</h1>
				<div class="publications-content">
					<Content />
				</div>

				<!-- Publications list -->
				<div class="publications-list">
					<div v-for="publication in publicationsByYear" :key="publication.year" class="publication-year-group">
						<h2 class="year-heading">{{ publication.year }}</h2>
						<div v-for="page in publication.items" :key="page.path" class="publication-item">
							<h3 class="publication-title">
								<router-link :to="page.path">{{ page.title }}</router-link>
							</h3>
							<p class="publication-authors">{{ page.frontmatter.authors }}</p>
							<p class="publication-venue">{{ page.frontmatter.venue }}</p>
							<div class="publication-links">
								<a v-if="page.frontmatter.doi" :href="`https://doi.org/${page.frontmatter.doi}`" target="_blank"
									rel="noopener noreferrer" class="publication-doi">
									DOI: {{ page.frontmatter.doi }}
								</a>
								<a v-if="page.frontmatter.url" :href="page.frontmatter.url" target="_blank" rel="noopener noreferrer"
									class="publication-url">
									Link
								</a>
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

// Group publications by year
const publicationsByYear = computed(() => {
	// Get all publication pages
	const publications = pages.value
		.filter(p =>
			p.path.startsWith('/publications/') &&
			p.path !== '/publications/' &&
			!p.path.includes('.html')
		)

	// Group by year
	const years = {}
	publications.forEach(pub => {
		if (pub.frontmatter.date) {
			const year = new Date(pub.frontmatter.date).getFullYear()
			if (!years[year]) {
				years[year] = []
			}
			years[year].push(pub)
		}
	})

	// Convert to array and sort by year (descending)
	return Object.entries(years)
		.map(([year, items]) => ({
			year,
			items: items.sort((a, b) =>
				new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
			)
		}))
		.sort((a, b) => b.year - a.year)
})
</script>

<style scoped>
/* Same styles as before */
</style>