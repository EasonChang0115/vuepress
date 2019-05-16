<template>
  <article class="little-article-card">
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
      <div v-html="article.excerpt" class="card-content"></div>
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
article.little-article-card {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 9fr;
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
      height: 120px;
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
      margin: 4px 0;
      a {
        color: #696969;
      }
    }
    .card-content {
      p {
        margin: 0px;
        font-size: 0.9rem;
        color: lighten($textColor, 25%);

        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
    width: calc(50% - 8px);
    grid-template-columns: 100%;
    &:first-child {
      margin-top: 2rem;
    }
    &:nth-child(odd) {
      margin-right: 8px;
    }
    &:nth-child(even) {
      margin-left: 8px;
    }
    .information-box {
      padding: 8px 15px;
    }
    .image-box {
      padding: 0;
      img {
        height: 250px;
      }
    }
  }
  @media (max-width: 519px) {
    width: 100%;
    &:nth-child(odd) {
      margin: 0;
      margin-top: 1.5rem;
    }
    &:nth-child(even) {
      margin: 0;
      margin-top: 1.5rem;
    }
    &:first-child {
      margin: 0;
    }
  }
}
</style>