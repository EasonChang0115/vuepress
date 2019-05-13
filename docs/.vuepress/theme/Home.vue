<template>
  <div class="home">
    <div class="hero">
      <div class="bgImg" :style="{backgroundImage: `url('${$withBase(data.heroImage)}')`}"></div>

      <div class="welcome-text">
        <div class="imgbox">
          <img v-if="data.heroImage" class="personalPhoto" :src="$withBase($site.themeConfig.personal.photo)" alt="hero">
        </div>
        <div class="slogan">
          <h1>{{ data.heroText || $title || 'Hello' }}</h1>
          <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
        </div>
      </div>

  
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>


    <div class="introduces" v-if="data.introduces && data.introduces.length">
      <div class="introduce" v-for="(introduce, index) in data.introduces" :key="index">
        <h2>{{ introduce.title }}</h2>
        <p>{{ introduce.details }}</p>
      </div>
    </div>

    <div class="articles" v-if="lastedArticle && lastedArticle.length">
      <h2><span class="text-box">N</span><span class="text-box delay-1">e</span><span class="text-box delay-2">w</span></h2>
      <div>
      <ArticleCard class="article" v-for="(article, index) in lastedArticle.slice(0, 3)" :key="index" :article="article"></ArticleCard>
      </div>
    </div>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2><a :href="feature.link">{{ feature.title }}</a></h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>


    <Content custom/>
    <Footer v-if="$site.themeConfig.personal.footer">{{ $site.themeConfig.personal.footer }}</Footer>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import ArticleCard from "./ArticleCard.vue";
import Footer from "./Footer.vue";

export default {
  components: { NavLink, ArticleCard, Footer },
  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },
    // 文章依日期排序(最新到最舊)
    lastedArticle() {
      let articles = this.$site.pages.filter(page => /\.html$/.test(page.path));
      articles = articles.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
      return articles;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/config.scss";
@import "./styles/animated.scss";

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  
  .hero {
    position: relative;
    text-align: center;
    margin-left: -2rem;
    margin-right: -2rem;
    min-height: 25rem;

    .bgImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.9;
      filter: blur(1px);
      z-index: -1;
    }
    
    
    .welcome-text {
      position: absolute;
      bottom: -3rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .imgbox {
        position: relative;
        width: 120px;
        height: 130px;
        border-radius: 50%;
        border: 1px solid $accentColor;
        overflow: hidden;
        img.personalPhoto {
          width: 100%;
        }
      }
    }

    h1 {
      font-size: 3rem;
      margin: 1.2rem 1rem 0;
      text-align: left;
      text-shadow:  black 0.1em 0.1em 0.2em;
      color: #eeeeee;
    }

    .description,
    .action {
      margin: 0.8rem 1rem 1.2rem 1rem;
    }

    .description {
      max-width: 35rem;
      font-size: 1rem;
      line-height: 1.3;
      color: $textColor;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features, .introduces, .articles {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }
  
  .introduce {
    flex-grow: 1;
  }
  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
  }
  .feature, .introduce, .articles {
    h2, h2 a {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .welcome-text {
      flex-direction: column;
      h1 {
        text-align: center;
      }
    }

    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }

      .description {
        margin: 1.2rem 1rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
