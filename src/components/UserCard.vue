<template>
  <div>
    <div class="profile-card">
      <div class="profile-info">
        <h3>{{ item.fullName }}</h3>
        <p>
          {{ item.affiliations[0].name }},
          {{ item.affiliations[0].city }}
        </p>
        <p>
          {{ item.affiliations[0].city }},
          {{ item.affiliations[0].country }}
        </p>
        <div class="stats-content">
          <Stat :value="item.publications" label="Publications" />
          <Stat :value="item.views" label="Views" />
          <Stat :value="item.followers" label="Followers" />
        </div>
      </div>
      <div class="avatar">
        <UserAvatar :item="item" />
      </div>
    </div>
    <div class="view-profile-container">
      <IconOpenProfile />
      <a :href="item.profileUrl" target="_blank" :tabindex="-1">VIEW PROFILE</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserAvatar from "./Avatar.vue";
import IconOpenProfile from "./Icons/IconOpenProfile.vue";
import Stat from "./Stat.vue";

export default defineComponent({
  name: "UserCard",
  components: {
    UserAvatar,
    IconOpenProfile,
    Stat,
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
});
</script>

<style>
.profile-card {
  display: flex;
}
.stats-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.profile-info {
  width: 80%;
}
.profile-card .avatar {
  margin-top: 20px;
  width: 20%;
}
.view-profile-container {
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 2px;
  padding-top: 20px;
}
.view-profile-container a {
  font-size: 12px;
  margin-right: 20px;
  color: rgb(0, 160, 210);
  outline: none;
}
</style>
