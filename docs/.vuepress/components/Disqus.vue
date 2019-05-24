<template>
  <div class="gitalk-container">
    <div id="disqus_thread"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    var disqus_config = function() {
      this.page.url = window.location.origin;
      this.page.identifier = window.location.pathname;
    };
    (function() {
      var d = window.document,
        s = d.createElement("script");
      s.src = "https://https-easonchang0115-github-io.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
};
</script>

<style lang="scss">
@import "../styles/config.scss";
.gitalk-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 2.5rem 2rem 2.5rem;
  #gitalk-container {
    .gt-container .gt-meta {
      z-index: 2; 
    }
  }
  @media (max-width: $MQMobile) {
    padding: 0 1.5rem 1rem 1.5rem;
  }
}
</style>