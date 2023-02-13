<template>
  <div class="card">
    <span class="subtitle">Original Research </span>
    <h3>
      An analysis of the four jellyfish types of galaxies and a advance
      description of the galaxies close to Andromeda
    </h3>
    <ListWithLabel
      label="Authors"
      :list="data.authors"
      class="vertical-separation"
    />
    <ElementWithLabel label="Editor" :item="data.editor" />
    <ElementWithLabel label="Yourself" :item="data.yourself" />

    <CollapseWord :items="getAllAffiliations()" />

    <p>Journal of Astronomy and Space Sciences | Extragalactic Astronomy</p>
  </div>
</template>

<script lang="ts">
import ListWithLabel from "./ListWithLabel.vue";
import ElementWithLabel from "./ElementWithLabel.vue";
import { defineComponent } from "vue";
import CollapseWord from "./Collapse.vue";
import data from "../json/object.json";
import { Affiliation, User, Article } from "../types/index";

export default defineComponent({
  name: "InfoCard",
  components: {
    ListWithLabel,
    ElementWithLabel,
    CollapseWord,
  },
  data() {
    return {
      data: data as Article,
    };
  },
  methods: {
    getAllAffiliations(): Array<Affiliation> {
      let array = this.data.authors.map((e: User) => e.affiliations).flat();
      array = array.filter(
        (value: Affiliation, index: number, self) =>
          index === self.findIndex((t: any) => t.id === value.id)
      );
      array = array.sort((a, b) => a.name.localeCompare(b.name));
      return array;
    },
  },
});
</script>

<style scoped>
.card {
  width: 40%;
  padding: 25px;
  -webkit-box-shadow: 0px 2px 5px -2px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 2px 5px -2px rgba(128, 128, 128, 1);
  box-shadow: 0px 2px 5px -2px rgba(128, 128, 128, 1);
}
.subtitle {
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
}
h3 {
  margin: 5px 0;
  font-family: "Museo-sans-500";
}
p {
  font-family: "Museo-sans-500";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
}
.vertical-separation {
  margin: 15px 0;
}
</style>
