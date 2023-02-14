<template>
  <OnClickOutside :do="close">
    <div class="custom-dropdown" @blur="open = false">
      <div :class="{ open: open }" @click="open = !open">
        <slot name="trigger" :open="open" />
      </div>
      <div class="template" :class="{ selectHide: !open }">
        <slot name="content" :open="open" />
      </div>
    </div>
  </OnClickOutside>
</template>

<script lang="ts">
import OnClickOutside from "./OnClickOutside.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomDropdown",
  components: {
    OnClickOutside,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    close(): void {
      this.open = false;
    },
  },
});
</script>

<style scoped>
.custom-dropdown {
  position: relative;
  width: fit-content;
  text-align: left;
  outline: none;
}
.custom-dropdown .template {
  color: black;
  overflow: hidden;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 20px 10px;
  min-width: 400px;
  -webkit-box-shadow: 0px 2px 5px -2px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 2px 5px -2px rgba(128, 128, 128, 1);
  box-shadow: 0px 2px 5px -2px rgba(128, 128, 128, 1);
}

.custom-dropdown .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-dropdown .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
