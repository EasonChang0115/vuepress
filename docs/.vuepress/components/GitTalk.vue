<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
export default {
  mounted() {
    let id = window.location.pathname.slice(-50);
    let gitalk = new Gitalk({
      clientID: "d2208819a3a279c3c926",
      clientSecret: "582ba49c8729180e6a475f2c2509fa5c4e820eb9",
      repo: "gitalk",
      owner: "easonchang0115",
      admin: ["easonchang0115"],
      id: id,
      distractionFreeMode: false
    });
    gitalk.render("gitalk-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";
.gitalk-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 2.5rem 2rem 2.5rem;
}
</style>
