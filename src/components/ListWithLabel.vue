<template>
  <div class="flex wrap">
    <span class="label">{{ label }}</span>
    <div v-for="(item, index) in list" :key="index" class="list">
      <CustomDropdown>
        <template #trigger>
          <span v-if="index === list.length - 1">and </span>
          <span class="text"> {{ ` ${item.fullName}` }} </span>
          <span class="attribute">{{ item.affiliations.length }}</span>
          <span v-if="index !== list.length - 1" class="comma">, </span>
        </template>
        <template #content>
          <UserCard :item="item" />
        </template>
      </CustomDropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomDropdown from "./Dropdown.vue";
import Stat from "./Stat.vue";
import UserAvatar from "./Avatar.vue";
import IconOpenProfile from "./Icons/IconOpenProfile.vue";
import UserCard from "./UserCard.vue";

export default defineComponent({
  name: "ListWithLabel",
  components: {
    CustomDropdown,
    UserCard,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    list: {
      type: Array || Object,
      required: false,
    },
  },
});
</script>

<style>
.flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.label {
  font-weight: bold;
  font-size: 16px;
  margin-right: 4px;
}
.list {
  display: flex;
  align-items: center;
  margin: 2px 0;
}
.text {
  width: fit-content;
  text-decoration: underline;
  cursor: pointer;
}
.attribute {
  font-size: 11px;
  vertical-align: super;
  margin-bottom: 6px;
}
.comma {
  margin-right: 6px;
}
</style>
