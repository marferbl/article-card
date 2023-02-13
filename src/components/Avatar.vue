<template>
  <div>
    <img
      v-if="!showDefault"
      :src="item.pictureUrl"
      class="image-avatar"
      @error="showDefault = true"
    />
    <div v-else class="image-avatar image-empty-avatar">
      {{ getAbbreviature() }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserAvatar",
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showDefault: this.item.pictureUrl ? false : true,
    };
  },
  methods: {
    getAbbreviature(): string {
      return (
        this.item?.fullName.substring(0, 1) +
        this.item?.fullName.split(" ")[1].substring(0, 1)
      );
    },
  },
});
</script>
<style scoped>
.image-avatar {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.image-empty-avatar {
  display: grid;
  place-items: center;
  background: rgb(0, 160, 210, 0.05);
  border: 1px solid rgb(0, 160, 210);
  color: rgb(0, 160, 210);
}
</style>
