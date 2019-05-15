<template>
  <div class="overview-articles">
      <LittleArticleCard v-for="(article, index) in allArticles" :key="index" :article="article"></LittleArticleCard>
  </div>
</template>

<script>
  import LittleArticleCard from './LittleArticleCard.vue';
  export default {
    props: ['sidebarItems'],
    components: {
      LittleArticleCard
    },
    computed: {
      allArticles() {
        let allArticles = [];
        this.sidebarItems.forEach(items => {
          items.children.forEach(child => {
            allArticles.push(child);
          })
        });
        allArticles = allArticles.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
        return allArticles;
      }
    }
  }
</script>

<style lang="scss">
  .overview-articles {
    max-width: 740px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
  }
</style>