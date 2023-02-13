<template>
  <div class="container">
    <div class="title" @click="toggleMenu">
      Affiliations
      <IconArrowDown :class="{ iconUp: menuOpen }" />
    </div>
    <transition name="fade">
      <div v-if="menuOpen" class="children-wrapper">
        <ul class="children-menu">
          <li v-for="(item, index) in items" :key="index">
            <span class="attribute">{{ index + 1 }}</span>
            {{ item.name }}, {{ item.city }}, {{ item.country }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconArrowDown from "./Icons/IconArrowDown.vue";
export default defineComponent({
  name: "CollapseWord",
  components: {
    IconArrowDown,
  },
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu(): void {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>

<style>
.container {
  width: fit-content;
  cursor: pointer;
}
.title {
  color: #00a0d2;
  margin-top: 15px;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
}

.children-wrapper {
  overflow: hidden;
}

.children-menu {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
li {
  margin: 2px 0;
}
.iconUp {
  transform: rotate(180deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
