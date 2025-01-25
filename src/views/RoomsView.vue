<template>
  <div class="rooms-container">
    <div v-for="(room, index) in rooms" class="image-container">
      <img :src="getImagePath(room.image)" alt="Room image" />
      <Banner :label="room.label" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/Rooms/Banner.vue";
import { getImagePath } from "@/utils/imageUtils";
import { ref } from "vue";

interface RoomsInterface {
  image: string;
  label: string;
}

const rooms = ref<RoomsInterface[]>([
  { image: "room4", label: "Pokój 1 osobowy" },
  { image: "room5", label: "Pokój dla pary" },
  { image: "room6", label: "Pokój dla 2 osób" },
]);
</script>

<style lang="scss" scoped>
.rooms-container {
  padding-top: 5em;

  img {
    width: 100%;
  }
}
</style>
