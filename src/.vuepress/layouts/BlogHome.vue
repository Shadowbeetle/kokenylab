<script setup lang="ts">
import { computed } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import type { ThemeBlogHomePageFrontmatter } from "vuepress-theme-hope/client";

import MarkdownContent from "vuepress-theme-hope/components/MarkdownContent.js";
import { DropTransition } from "vuepress-theme-hope/components/transitions/index.js";
import ArticleList from "vuepress-theme-hope/modules/blog/components/ArticleList.js";
import BlogWrapper from "vuepress-theme-hope/modules/blog/components/BlogWrapper.js";
import InfoPanel from "vuepress-theme-hope/modules/blog/components/InfoPanel.js";
import ProjectPanel from "vuepress-theme-hope/modules/blog/components/ProjectPanel.js";
import { useArticles } from "vuepress-theme-hope/modules/blog/composables/index.js";

import "vuepress-theme-hope/blog/styles/home.scss";

const articles = useArticles();
const frontmatter = usePageFrontmatter<ThemeBlogHomePageFrontmatter>();
const projects = computed(() => frontmatter.value.projects ?? []);
</script>

<template>
	<BlogWrapper>
		<div class="vp-blog vp-page">
			<div class="blog-page-wrapper custom">
				<main id="main-content" class="vp-blog-home">
					<DropTransition appear :delay="0.16">
						<ProjectPanel :items="projects" />
					</DropTransition>

					<DropTransition appear :delay="0.24">
						<ArticleList :items="articles.items" />
					</DropTransition>
				</main>

				<DropTransition appear :delay="0.16">
					<InfoPanel />
				</DropTransition>
			</div>

			<DropTransition appear :delay="0.28">
				<MarkdownContent />
			</DropTransition>
		</div>
	</BlogWrapper>
</template>

<style scoped lang="scss">
.vp-blog-home {
	margin-top: calc(var(--navbar-height) - 2.9rem)
}
</style>