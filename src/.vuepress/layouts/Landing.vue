<script setup lang="ts">
import { computed } from "vue";
import { AutoLink, usePageFrontmatter } from "vuepress/client";
import type { ThemeBlogHomePageFrontmatter } from "vuepress-theme-hope/client";
import MarkdownContent from "vuepress-theme-hope/components/MarkdownContent.js";
import { DropTransition } from "vuepress-theme-hope/components/transitions/index.js";
import ArticleList from "vuepress-theme-hope/modules/blog/components/ArticleList.js";
import BlogHero from "vuepress-theme-hope/modules/blog/components/BlogHero.js";
import BlogWrapper from "vuepress-theme-hope/modules/blog/components/BlogWrapper.js";
import { useArticles } from "vuepress-theme-hope/modules/blog/composables/index.js";

import AboutBox from "../components/AboutBox.vue";
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

console.log(frontmatter.value)
</script>

<template>
	<BlogWrapper>
		<div class="vp-blog vp-page">
			<BlogHero>
			</BlogHero>

			<div class="blog-page-wrapper custom">
				<main id="main-content">
					<div class="two-columns">
						<div class="column">
							<DropTransition appear :delay="0.16">
								<AboutBox :title="aboutTitle">
									<MarkdownContent :custom="true" />
								</AboutBox>
							</DropTransition>

							<hr class="separator" />

							<h1>
								<AutoLink :config="{ link: '/news/', text: 'What\'s New', ariaLabel: 'News', }" :active="true"
									class="news-link">
									What's New
								</AutoLink>
							</h1>

							<DropTransition appear :delay="0.24">
								<ArticleList :items="articles" />
							</DropTransition>
						</div>
						<div class="column">
							<DropTransition appear :delay="0.20">
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
</style>