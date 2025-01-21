<template>
  <section class="rooms-offer">
    <h2>Oferty</h2>
    <div class="offers">
      <div class="offer-card" v-for="(offer, index) in offers" :key="index">
        <div class="image-container">
          <img :src="getImagePath(offer.image)" :alt="offer.title" />
          <div class="rating">⭐ {{ offer.rating }}</div>
        </div>
        <div class="offer-details">
          <h3>{{ offer.title }}</h3>
          <p>{{ offer.cost }}</p>
        </div>
        <div class="icons">
          <Icon :icon-type="'Bed'" :width="20" :height="20" />
          <Icon :icon-type="'User'" :width="20" :height="20" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getImagePath } from "@/utils/imageUtils";
import Icon from "../Shared/Icon/Icon.vue";

interface IOfferFields {
  image: string;
  title: string;
  cost: string;
  rating: string;
}

interface IOffersProps {
  offers: Array<IOfferFields>;
}

defineProps<IOffersProps>();
</script>

<style lang="scss" scoped>
.rooms-offer {
  display: flex;
  flex-direction: column;
  gap: 5em;
  padding: 5em;

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
      border-radius: 0.5em;
      padding: 0.5em 0.5em 1em 0.5em;

      .image-container {
        position: relative;

        img {
          width: 100%;
          height: auto;
        }

        .rating {
          position: absolute;
          top: 0.95em;
          left: 0.625em;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 0.5em;
          width: 4em;
          height: 2em;
          padding-top: 0.4em;
          text-align: center;
        }
      }

      .offer-details {
        padding-top: 1em;
        line-height: 1.8;
        font-size: 1em;
      }
      .icons {
        display: flex;
        justify-content: start;
        gap: 3em;
        padding-top: 0.5em;
      }
    }
  }
}
</style>
