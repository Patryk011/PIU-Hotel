<template>
  <div class="about-container">
    <div class="image-section">
      <img :src="getImagePath('about')" alt="Hotel img" />
    </div>

    <section class="text-section">
      <h3>O Nas</h3>
      <p>
        Witamy w miejscu, które od lat zachwyca swoich gości wyjątkową
        atmosferą, luksusowymi udogodnieniami oraz niezrównaną gościnnością.
        Naszym celem jest zapewnienie każdemu klientowi niezapomnianych
        wspomnień oraz poczucia, że jest w centrum uwagi.
      </p>
      <p>
        Nasz obiekt położony jest w malowniczym miejscu, które łączy
        nowoczesność z naturalnym pięknem. Oferujemy szeroką gamę usług: od
        przestronnych, komfortowo wyposażonych pokoi, przez luksusowe
        apartamenty, aż po relaksacyjne strefy SPA, które pozwolą Ci odpocząć od
        codziennego zgiełku.
      </p>
      <p>
        Dzięki naszemu zespołowi profesjonalistów, zawsze gotowemu pomóc, każdy
        aspekt Twojego pobytu jest dokładnie dopracowany. Zorganizujemy dla
        Ciebie romantyczną kolację, niezapomnianą uroczystość lub udane
        spotkanie biznesowe. Z nami każda chwila staje się wyjątkowa.
      </p>
      <div class="additional-info">
        <h4>Dlaczego my?</h4>
        <ul>
          <li>
            Lokalizacja w pobliżu najpiękniejszych atrakcji turystycznych.
          </li>
          <li>Indywidualne podejście do każdego klienta.</li>
          <li>Wieloletnie doświadczenie i zaufanie gości z całego świata.</li>
          <li>
            100% satysfakcji – Twoje zadowolenie jest dla nas najważniejsze.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getImagePath } from "@/utils/imageUtils";
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;

  .image-section {
    position: relative;
    padding-top: 5em;

    img {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  .text-section {
    flex: 2;
    padding: 1rem;

    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #004085;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.8;
      font-size: 1.1rem;
    }

    .additional-info {
      margin-top: 2rem;
      padding: 1.5rem;
      background-color: #f8f9fa;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h4 {
        margin-bottom: 1rem;
        color: #0056b3;
        font-size: 1.5rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 0.5rem;
          font-size: 1rem;
          padding-left: 1.5rem;
          position: relative;

          &::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #28a745;
          }
        }
      }
    }
  }
}
</style>
