<template>
  <div class="traffic-container">
    <TrafficRooms :offers />
  </div>
</template>

<script setup lang="ts">
import TrafficRooms from "@/components/Traffic/TrafficRooms.vue";
import { ref } from "vue";

const offers = ref([
  {
    title: "Pokój 1 osobowy",
    cost: "250 zł/noc",

    image: "room1",
  },

  {
    title: "Pokój 2 osobowy",
    cost: "350 zł/noc",

    image: "room2",
  },

  {
    title: "Pokój 3 osobowy",
    cost: "450 zł/noc",

    image: "room3",
  },
]);
</script>

<style lang="scss" scoped></style>
