<script setup lang="ts">
import { computed } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import type { ThemeBlogHomePageFrontmatter } from "vuepress-theme-hope/client";
import MarkdownContent from "vuepress-theme-hope/components/MarkdownContent.js";
import { DropTransition } from "vuepress-theme-hope/components/transitions/index.js";
import ArticleList from "vuepress-theme-hope/modules/blog/components/ArticleList.js";
import BlogHero from "vuepress-theme-hope/modules/blog/components/BlogHero.js";
import BlogWrapper from "vuepress-theme-hope/modules/blog/components/BlogWrapper.js";
import ProjectPanel from "vuepress-theme-hope/modules/blog/components/ProjectPanel.js";
import { useArticles } from "vuepress-theme-hope/modules/blog/composables/index.js";

import "vuepress-theme-hope/blog/styles/home.scss";
import AboutBox from "../components/AboutBox.vue";
import Funding, { type FundingImage } from "../components/Funding.vue";

interface LandingFrontmatter extends ThemeBlogHomePageFrontmatter {
	aboutTitle: string;
	fundingImages: FundingImage[];
	fundingTitle: string;
}

const articles = useArticles();
const frontmatter = usePageFrontmatter<ThemeBlogHomePageFrontmatter>();
const projects = computed(() => frontmatter.value.projects ?? []);
const aboutTitle = computed(() => (frontmatter.value as LandingFrontmatter).aboutTitle);
const fundingTitle = computed(() => (frontmatter.value as LandingFrontmatter).fundingTitle);
const fundingImages = computed(() => (frontmatter.value as LandingFrontmatter).fundingImages);

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


							<DropTransition appear :delay="0.24">
								<ArticleList :items="articles.items" />
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

<style lang="scss">
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
</style>