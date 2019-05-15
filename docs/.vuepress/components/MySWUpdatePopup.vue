<template>
  <SWUpdatePopup>
    <div
      slot-scope="{ enabled, reload, message, buttonText }"
      v-if="enabled"
      class="my-sw-update-popup">
      {{ message }}<br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style lang="scss">
.my-sw-update-popup {

  position: fixed;
  bottom: 20px;
  right: 20px;

  box-shadow: 0px 0px 2px rgba(black, 0.2);
  border-radius: 10px;
  background-color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: bounce 3s ease-in-out infinite;

}

.my-sw-update-popup button {
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #fff;
  border: 1px solid rgba(#1E90FF, 0.5);
  border-radius: 5px;
  font-size: 0.6rem;
  font-weight: bold;
  font-family: inherit;
  padding: 0.2rem 1.2rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: .3s;
  &:hover {
    color: #fff;
    font-weight: 400;
    border: 1px solid #fff;
    background-color: rgba(#1E90FF, 0.5);
  }
}

@keyframes bounce{
  0% {
    bottom: 20px;
    box-shadow: 0px 0px 2px rgba(black, 0.2);
  }
  50% {
    bottom: 40px;
    box-shadow: 0px 20px 20px rgba(black, 0.2);
  }
  100% {
    bottom: 20px;
    box-shadow: 0px 0px 2px rgba(black, 0.2);
  }
}
</style>