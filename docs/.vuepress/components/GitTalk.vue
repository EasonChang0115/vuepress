<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import 'gitalk/dist/gitalk.css';
import Gitalk from "gitalk";
export default {
  data() {
    return {
      gitalk: new Gitalk({
        clientID: "d2208819a3a279c3c926",
        clientSecret: "582ba49c8729180e6a475f2c2509fa5c4e820eb9",
        repo: "gitalk",
        owner: "easonchang0115",
        admin: ["easonchang0115"],
        id: window.location.hash, // 默认为pathname,如果你也是像我这样用vue搭建的，我建议使用hash，原因具体后面会讨论到。
        distractionFreeMode: false // Facebook-like distraction free mode
      })
    }
  },

  mounted(){
    this.gitalk.render("gitalk-container");
  },

  methods: {},

  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";
</style>
