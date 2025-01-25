<template>
  <div class="home-view">
    <div class="img-wrapper">
      <img src="../assets/Banner.png" alt="" />
    </div>

    <Info />

    <Offers :offers />

    <Opinions :opinions />
  </div>
</template>

<script setup lang="ts">
import Info from "@/components/Home/Info.vue";
import Offers from "@/components/Home/Offers.vue";
import Opinions, { type IOpinion } from "@/components/Home/Opinions.vue";
import Footer from "@/components/Shared/Footer/Footer.vue";

import { ref } from "vue";

const opinions = ref<IOpinion[]>([
  {
    image: "human1",
    opinion: "To miejsce jest niesamowite!",
    author: "Jan Kowalski",
  },
  {
    image: "human2",
    opinion: "Świetna obsługa i atmosfera.",
    author: "Anna Nowak",
  },
  {
    image: "human3",
    opinion: "Niezapomniane doświadczenie.",
    author: "Piotr Zieliński",
  },
  { image: "human4", opinion: "Polecam każdemu!", author: "Ewa Wiśniewska" },
  {
    image: "human5",
    opinion: "Idealne miejsce na relaks.",
    author: "Michał Wójcik",
  },
]);

const offers = ref([
  {
    title: "Pokój 1 osobowy",
    cost: "250 zł/noc",

    rating: "4.7",
    image: "room1",
  },

  {
    title: "Pokój 2 osobowy",
    cost: "350 zł/noc",

    rating: "4.8",
    image: "room2",
  },

  {
    title: "Pokój 3 osobowy",
    cost: "450 zł/noc",

    rating: "4.8",
    image: "room3",
  },
]);
</script>

<style lang="scss" scoped>
.home-view {
  margin-top: 5em;
  display: flex;
  flex-direction: column;

  .img-wrapper {
    padding: 1em;
    align-self: center;
  }
}
</style>
