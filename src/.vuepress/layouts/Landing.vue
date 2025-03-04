<script setup lang="ts">
import { computed, Fragment, nextTick, onMounted, ref } from "vue";
import { AutoLink, usePageFrontmatter } from "vuepress/client";
import type { ThemeBlogHomePageFrontmatter } from "vuepress-theme-hope/client";
import MarkdownContent from "vuepress-theme-hope/components/MarkdownContent.js";
import ArticleList from "vuepress-theme-hope/modules/blog/components/ArticleList.js";
import BlogHero from "vuepress-theme-hope/modules/blog/components/BlogHero.js";
import BlogWrapper from "vuepress-theme-hope/modules/blog/components/BlogWrapper.js";
import { useArticles } from "vuepress-theme-hope/modules/blog/composables/index.js";

import DropTransition from "../components/DropTransition.vue";
import AboutBox from "../components/AboutBox.vue";
import ContactCard from "../components/ContactCard.vue";
import Funding, { type FundingImage } from "../components/Funding.vue";

import "vuepress-theme-hope/blog/styles/home.scss";

interface LandingFrontmatter extends ThemeBlogHomePageFrontmatter {
	aboutTitle: string;
	fundingImages: FundingImage[];
	fundingTitle: string;
	articlesLength: number;
}

const frontmatter = usePageFrontmatter<LandingFrontmatter>();
const articles = useArticles().value.items.slice(0, frontmatter.value.articlesLength);
const aboutTitle = computed(() => frontmatter.value.aboutTitle);
const fundingTitle = computed(() => frontmatter.value.fundingTitle);
const fundingImages = computed(() => frontmatter.value.fundingImages);

const isMounted = ref(false);

onMounted(() => {
	// Small delay to ensure proper initial state
	setTimeout(() => {
		isMounted.value = true;
	}, 120);
});
</script>

<template>
	<BlogWrapper>
		<div class="vp-blog vp-page">
			<DropTransition :delay="0.08">
				<BlogHero></BlogHero>
			</DropTransition>

			<div class="blog-page-wrapper custom">
				<main id="main-content">
					<div class="two-columns">
						<div class="column">
							<DropTransition :delay="0.12">
								<AboutBox :title="aboutTitle">
									<MarkdownContent :custom="true" />
								</AboutBox>
							</DropTransition>

							<hr class="separator" />

							<h1 class="news-header">
								<AutoLink :config="{ link: '/news/', text: 'What\'s New', ariaLabel: 'News', }" :active="true"
									class="news-link">
									What's New
								</AutoLink>
							</h1>

							<ArticleList :items="articles" />
						</div>
						<div class="column">
							<DropTransition :delay="0.16">
								<ContactCard title="Contact" />
							</DropTransition>
							<DropTransition :delay="0.20">
								<Funding :title="fundingTitle" :funding-images="fundingImages" />
							</DropTransition>
						</div>
					</div>
				</main>
			</div>
		</div>
	</BlogWrapper>
</template>

<style scoped lang="scss">
.vp-blog-hero {
	color: inherit
}

.two-columns {
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	gap: 20px;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
	}
}

.news-header {
	@media (max-width: 768px) {
		margin-left: 1rem;
	}
}

.news-link {
	color: var(--vp-c-text);
	font-size: 1.25rem;
	font-family: var(--vp-font-heading);
	line-height: 1.6;
	cursor: pointer;
}

.vp-article-list {
	margin-top: 0;
	padding-top: 0;
}

.drop-transition {
	/* Set the initial state to match what DropTransition would set */
	transform: translateY(-20px);
	opacity: 0;
	/* Set up the transition properties */
	transition: transform 0.25s ease-in-out 0.12s, opacity 0.25s ease-in-out 0.12s;
}

/* Use mounted hook to trigger the animation by adding a class */
.drop-transition.drop-enter {
	transform: translateY(0);
	opacity: 1;
}
</style>