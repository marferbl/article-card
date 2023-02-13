<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["do"],
  mounted() {
    const handler = (e) => {
      if (e.target === this.$el || this.$el.contains(e.target)) {
        return;
      }

      !this.disabled && this.do();
    };
    setTimeout(() => {
      document.addEventListener("click", handler);
    }, 0);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("click", handler);
    });
  },
  render() {
    return this.$slots.default[0];
  },
});
</script>
