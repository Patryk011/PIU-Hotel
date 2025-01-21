<template>
  <section class="opinions-container">
    <h2>Opinie</h2>
    <div class="opinions">
      <button @click="prevSlide" class="arrow left">◀</button>
      <div
        class="opinion-card"
        v-for="(opinion, index) in visibleOpinions"
        :key="index"
      >
        <img :src="getImagePath(opinion.image)" alt="face image" />
        <p>{{ opinion.opinion }}</p>
        <h3>{{ opinion.author }}</h3>
      </div>
      <button @click="nextSlide" class="arrow right">▶</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from "../Shared/Icon/Icon.vue";
import { getImagePath } from "@/utils/imageUtils";
import { computed, ref } from "vue";

export interface IOpinion {
  image: string;
  opinion: string;
  author: string;
}

interface IOpinionsProps {
  opinions: Array<IOpinion>;
}

const props = defineProps<IOpinionsProps>();

const currentIndex = ref(0);

const visibleOpinions = computed(() =>
  props.opinions.slice(currentIndex.value, currentIndex.value + 3)
);

const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const nextSlide = () => {
  if (currentIndex.value + 3 < props.opinions.length) currentIndex.value++;
};
</script>

<style lang="scss" scoped>
.opinions-container {
  text-align: center;

  h2 {
    font-size: 2em;
  }

  .opinions {
    display: flex;
    justify-content: center;
    padding: 5em;

    .opinion-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em;
      width: 30%;

      img {
        width: 150px;
        height: 150px;
      }
    }

    .arrow {
      background: #e6e6e6;
      border: none;
      cursor: pointer;
      align-self: center;
      padding: 1em;
      border-radius: 0.5em;
      color: white;
      width: 5em;

      &:hover {
        color: black;
      }
    }
  }
}
</style>
