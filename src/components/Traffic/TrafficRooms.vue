<template>
  <section class="traffic-offer">
    <h2>Cennik</h2>
    <div class="offers">
      <div class="offer-card" v-for="(offer, index) in offers" :key="index">
        <h3>{{ offer.title }}</h3>
        <div class="image-container">
          <img :src="getImagePath(offer.image)" :alt="offer.title" />
        </div>
        <div class="offer-details">
          <h3>{{ offer.cost }}</h3>
        </div>
        <button class="reserve" @click="reserveRoom(offer.title, offer.cost)">
          Zarezerwuj
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getImagePath } from "@/utils/imageUtils";

interface ITrafficFields {
  image: string;
  title: string;
  cost: string;
}

interface ITrafficProps {
  offers: Array<ITrafficFields>;
}

defineProps<ITrafficProps>();

const reserveRoom = (title: string, cost: string) => {
  alert(`Rezerwacja dla ${title}, koszt: ${cost}`);
};
</script>

<style lang="scss" scoped>
.traffic-offer {
  display: flex;
  flex-direction: column;
  gap: 5em;
  padding: 10em;

  h2 {
    text-align: center;
    font-size: 2em;
  }

  .offers {
    display: flex;
    justify-content: center;
    gap: 10em;

    .offer-card {
      border: 1px solid #e7e6eb;
      border-radius: 0.2em;
      padding: 1.2em 0.7em 1.5em 0.7em;
      display: flex;
      flex-direction: column;
      gap: 0.75em;

      .image-container {
        img {
          width: 100%;
          height: auto;
        }
      }

      .offer-details {
        line-height: 2;
        font-size: 1em;
      }

      .reserve {
        border: none;
        color: white;
        background-color: #1e1e1e;
        cursor: pointer;
        padding: 0.5em;
        border-radius: 0.5em;
        width: 100%;
      }
    }
  }
}
</style>
