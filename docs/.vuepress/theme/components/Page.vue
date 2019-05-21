<template>
  <main class="page">
    <slot name="top"/>

    <div class="pageImage" v-if="pageImage">
      <img :src="pageImage" alt="">
    </div>

    <Content/>
    <git-talk v-if="this.$page.frontmatter.gitTalk" :key="this.$page.path"></git-talk>
    <OverviewArticles v-if="this.$page.frontmatter.overview" :sidebarItems="sidebarItems"></OverviewArticles>

    <footer class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
        <OutboundLink/>
      </div>

      <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}:</span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </footer>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span>
          <router-link class="prev" v-if="prev" :to="prev.path"><i class="fas fa-arrow-left"></i> {{ prev.title || prev.path }}</router-link>
        </span>

        <span>
          <router-link class="next" v-if="next" :to="next.path">{{ next.title || next.path }} <i class="fas fa-arrow-right"></i></router-link>
        </span>
      </p>
    </div>
    <slot name="bottom"/>
    <Footer v-if="$site.themeConfig.personal.footer">{{ $site.themeConfig.personal.footer }}</Footer>
  </main>
</template>

<script>
import { resolvePage, outboundRE, endingSlashRE } from "../util";

import OverviewArticles from '@theme/components/OverviewArticles.vue';
import Footer from '@theme/components/Footer.vue';

export default {

  props: ["sidebarItems"],
  components: { OverviewArticles, Footer },
  computed: {

    pageImage() {
      if (this.$page.frontmatter.image) {
        return this.$page.frontmatter.image;
      }
    },
    
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    prev() {
      const prev = this.$page.frontmatter.prev;
      if (prev === false) {
        return;
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path);
      } else {
        return resolvePrev(this.$page, this.sidebarItems);
      }
    },

    next() {
      const next = this.$page.frontmatter.next;
      if (next === false) {
        return;
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path);
      } else {
        return resolveNext(this.$page, this.sidebarItems);
      }
    },

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;
      return (
        base.replace(endingSlashRE, "") +
        `/edit` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
        path
      );
    }
  }
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  flatten(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flatten(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flatten(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}
</script>

<style lang="scss">
@import "../styles/config.scss";
@import "../styles/wrapper.scss";

.page {
  .pageImage {
    box-sizing: border-box;
    padding: 4.5rem 2.5rem 0;
    width: 100%;
    img {
      object-fit: cover;
      width: 100%;
      max-height: 480px;
    }
  }
}

.page-edit {
  @extend %wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
  .edit-link {
    display: inline-block;
    a {
      color: lighten($textColor, 25%);
      margin-right: 0.25rem;
    }
  }
  .last-updated {
    float: right;
    font-size: 0.9em;
    .prefix {
      font-weight: 500;
      color: lighten($textColor, 25%);
    }
    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-nav {
  @extend %wrapper;
  padding-top: 1rem;
  padding-bottom: 0;
  .inner {
    box-sizing: border-box;
    min-height: 2rem;
    margin-top: 0;
    padding: 0.5rem;
    overflow: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .prev, .next {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    transition: .3s;
    float: right;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    a i {
      margin: 0px 8px;
    }
    &:hover {
      color: white;
      background-color: rgba($textColor, 0.3);
    }
  }
}

@media (max-width: $MQMobile) {
  .page {
    .pageImage {
      box-sizing: border-box;
      padding: 4.5rem 1.5rem 0;
      width: 100%;
      img {
        object-fit: cover;
        width: 100%;
        max-height: 480px;
      }
    }
  }
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }
    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}
</style>
