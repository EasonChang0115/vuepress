<template>
  <div class="overview-articles">
    <LittleArticleCard
      v-for="(article, index) in allArticles.slice(pageStart, pageStart + countOfPage)"
      :key="index"
      :article="article"
    ></LittleArticleCard>
    <Pagination
      v-if="totalPage > 1"
      :page-count="totalPage"
      :current-page="currentPage"
      :page-range="3"
      :init-page="0"
      :margin-pages="2"
      :click-handler="pageCallback"
      :container-class="'pagination-container'"
      :out-container-class="'pagination-content'"
      :page-class="'page-item'" 
      :page-link-class="'page-link-item'"
      :prev-class="'page-item prev'" 
      :prev-link-class="'page-link-item prev'" 
      :next-class="'page-item next'"
      :next-link-class="'page-link-item next'"
      :drowpDown="true"
    />
  </div>
</template>

<script>
import LittleArticleCard from "./LittleArticleCard.vue";
import Pagination from "./Pagination.vue";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      countOfPage: 8,
      listdata: [],
      currentPage: 1
    };
  },
  mounted() {
    // console.log(this.sidebarItems);
  },
  props: ["sidebarItems"],
  components: {
    LittleArticleCard,
    Pagination
  },
  computed: {
    totalPage() {
      return Math.ceil(this.allArticles.length / this.countOfPage);
    },
    pageStart: function() {
      return (this.currentPage - 1) * this.countOfPage;
    },
    allArticles() {
      let allArticles = [];
      this.sidebarItems.forEach(items => {
        items.children.forEach(child => {
          allArticles.push(child);
        });
      });
      allArticles = allArticles.sort(
        (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
      );
      return allArticles;
    }
  },
  methods: {
    pageCallback(page) {
      this.currentPage = page;
      setTimeout(() => {
        window.scrollTo({'behavior': 'smooth', 'top': 0});
      }, 0);
    }
  }
};
</script>

<style lang="scss">
@import '../styles/config.scss';
.overview-articles {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  .pagination-content {
    width: 100%;
    text-align: center;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
  }
  .pagination-container {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 0px 2px rgba($textColor, 0.5);
    overflow: hidden;
    &.drowpDown {
      display: none;
      select {
        outline: none;
        border: none;
        border-radius: 0;
        -webkit-appearance: none;
        padding: 0.2rem 0.8rem;
        width: 5rem;
        font-size: 1rem;
        text-align: center;
        color: $textColor;
        background-color: #efefefef;
        border-right: 1px solid rgba($textColor, 0.1);
        text-align-last: center;
        padding-right: 19px;
        option {
          padding: 0.2rem 0.8rem;;
        }
      }
    }
    .page-item {
      display: inline-block;
      border-right: 1px solid rgba($textColor, 0.1);
      box-sizing: border-box;
      &.active {
        .page-link-item {
          color: white;
          background-color: rgba($accentColor, 0.8);
        }
      }
      &.disabled {
        .page-link-item {
          cursor: not-allowed;
          color: #aaaaaa;
          background-color: rgba(grey, 0.1);
          &:hover {
            color: #aaaaaa;
            background-color: rgba(grey, 0.1);
          }
        }
      }
      .page-link-item {
        display: inline-block;
        outline: none;
        font-size: 1rem;
        padding: 0.2rem 0.8rem;
        cursor: pointer;
        color: $textColor;
        transition: .3s;
        &:hover {
          color: white;
          background-color: rgba($accentColor, 0.8);
        }
      }
    }
    @media (max-width: $MQMobile) {
      display: none;
      &.drowpDown {
        display: flex;
      }
    }
  }
}
</style>