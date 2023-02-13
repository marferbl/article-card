<template>
  <div class="flex">
   <span class="stat-value"> {{ value }}</span>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "CustomStat",
  props: {
    value: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.stat-value{
  color: #00A0D2;
  margin-right:4px;
  font-weight: bold
}
</style>
