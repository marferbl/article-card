<template>
  <div id="app">
    <div class="icon-div">
      <transition name="fade">
        <IconChecked v-if="showIcon" />
      </transition>
    </div>
    <h2>Thank you for considerating participating to this paper</h2>
    <InfoCard msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import InfoCard from "./components/InfoCard.vue";
import IconChecked from "./components/Icons/IconChecked.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    InfoCard,
    IconChecked,
  },
  data() {
    return {
      showIcon: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showIcon = true;
    }, 1000);
  },
});
</script>

<style scope>
@font-face {
  font-family: "Museo-sans-300";
  src: url("./assets/fonts/MuseoSans-300.otf");
}
@font-face {
  font-family: "Museo-sans-500";
  src: url("./assets/fonts/MuseoSans_500.otf");
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  width: 100%;
  gap: 10px;
  font-family: "Museo-sans-300";
}
h2 {
  font-family: "Museo-sans-500";
}
.icon-div {
  height: 61px;
}
.icon-div .fade-enter-active,
.icon-div .fade-leave-active {
  transition: opacity 2s;
}
.icon-div .fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
