<template>
  <footer class="footer">
    <slot />
    <div class="social">
      <a href="https://github.com/EasonChang0115" target="_blank"><i><img :src="$withBase('/github.png')" width="18px" alt="github"></i></a>
      <a href="https://www.facebook.com/EasonChang0115" target="_blank"><i><img :src="$withBase('/facebook.png')" width="18px" alt="facebook"></i></a>
      <a href="https://codepen.io/JasonChang" target="_blank"><i><img :src="$withBase('/codepen.png')" width="18px" alt="codepen"></i></a>
      <a href="https://www.cakeresume.com/s8710606" target="_blank"><i><img :src="$withBase('/cakeresume.png')" width="18px" alt="cakeresume"></i></a>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
@import "./styles/config.scss";
footer.footer {
  padding: 2.5rem;
  border-top: 1px solid $borderColor;
  text-align: center;
  color: lighten($textColor, 25%);
  .social {
    margin-top: 1rem;
    a {
      margin: 0 8px;
    }
  }
}
</style>
