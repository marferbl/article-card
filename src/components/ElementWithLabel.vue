<template>
  <div class="flex">
    <span class="label">{{ label }}</span>
    <div class="flex">
      <CustomDropdown>
        <template #trigger>
          <span v-if="index > 0" class="comma"
            >, <span v-if="index === list.length - 1">and </span></span
          >
          <span class="text"> {{ ` ${item.fullName}` }} </span>
          <span class="attribute">{{ item.affiliations.length }}</span>
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
    item: {
      type: Object,
      default: null,
    },
  },
});
</script>

<style>
.flex {
  display: flex;
  align-items: center;
}
.label {
  font-weight: bold;
  font-size: 16px;
  font-family: "Museo-sans-500";
  margin-right: 4px;
}
.text {
  text-decoration: underline;
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
