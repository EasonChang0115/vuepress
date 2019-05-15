<template>
  <article class="article-card">
    <div class="image-box">
      <router-link :to="article.path">
        <img
          :src="article.frontmatter.image ? $withBase(article.frontmatter.image) : $withBase('/program.jpeg')"
          :alt="article.title"
          width="100%"
        >
      </router-link>
    </div>
    <div class="information-box">
      <h2 class="card-title">
        <router-link :to="article.path">{{ article.title }}</router-link>
      </h2>
      <div class="card-content">
        <div v-html="article.excerpt" class="excerpt"></div>
      </div>
      <h4 class="author">
        <router-link class="article-link" :to="article.path">閱讀全文</router-link>
        <span>{{ new Date(article.lastUpdated).Format("yyyy-MM-dd hh:mm:ss") }}</span>
      </h4>
    </div>
  </article>
</template>

<script>
export default {
  props: ["article"],
  created() {
    // 日期format
    Date.prototype.Format = function(fmt) {
      //author: meizz
      let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (this.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    };
  }
};
</script>

<style lang="scss">
@import "./../styles/config.scss";
article.article-card {
  display: grid;
  grid-template-columns: 5fr 7fr;
  transition: 0.3s;
  margin-top: 2rem;
  &:first-child {
    margin: 0;
  }
  .image-box {
    padding: 0 1rem 0 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 200px;
      object-fit: contant;
      border-radius: 3px;
      box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);
      transition: 0.3s;
    }
  }
  .article-link {
    cursor: pointer;
  }
  .information-box {
    h2.card-title {
      font-size: 1.5rem;
      margin: 8px 0;
    }
    .card-content {
      .excerpt {
        width: 100%;
        p {
          margin: 0px;
          display: -webkit-box;
          overflow: hidden;
          font-size: 0.9rem;
          color: lighten($textColor, 25%);
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      a.article-link {
        color: $accentColor;
        font-size: 0.8rem;
      }
    }
    h4.author {
      margin: 8px 0px;
      font-size: 0.9rem;
      font-weight: 900px;
      display: flex;
      justify-content: space-between;
      span {
        font-weight: 400px;
        color: #999999;
        margin: 0px 8px;
      }
    }
  }
  &:hover {
    border-radius: 5px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    .image-box {
      img {
        transform: translateY(-2px);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }
  @media (max-width: $MQMobile) {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    .image-box {
      padding: 0;
    }
    grid-template-columns: 100%;
  }
}
</style>