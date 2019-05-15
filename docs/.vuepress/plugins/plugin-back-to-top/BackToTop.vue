<template>
  <transition name="fade">
    <i class="go-to-top fas fa-hand-point-up" 
       v-if="show"
       @click="scrollToTop">
    </i>
  </transition>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  props: {
    threshold: {
      type: Number,
      default: 300
    },
    delayInMs: {
      type: Number,
      default: 16.66
    },
    scrollStepInPx: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      scrollTop: null,
      intervalId: null
    };
  },

  mounted() {
    this.scrollTop = this.getScrollTop();
    window.addEventListener(
      "scroll",
      debounce(() => {
        this.scrollTop = this.getScrollTop();
      }, 100)
    );
  },

  methods: {
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    },

    // scrollToTop() {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    //   this.scrollTop = 0;
    // },

    scrollStep() {
      if (window.pageYOffset === 0) {
        clearInterval(this.intervalId);
        this.scrollTop = 0;
      }
      window.scroll(0, window.pageYOffset - this.scrollStepInPx);
    },

    scrollToTop() {
      let intervalId = setInterval(this.scrollStep, this.delayInMs);
      this.intervalId = intervalId;
    }
  },

  computed: {
    show() {
      return this.scrollTop > this.threshold;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/config.scss';
.go-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  width: 2rem;
  color: rgba($accentColor, 0.6);
  z-index: 10;
  font-size: 2.4rem;
  transition: .3s;
}
.go-to-top:hover {
 color: $accentColor;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
