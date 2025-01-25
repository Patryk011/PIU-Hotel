<template>
  <footer class="footer">
    <div class="general-info">
      <div class="contact-info block-info">
        <h3>Dane kontaktowe</h3>
        <p>Telefon: +48 123 456 789</p>
        <p>Email: kontakt@przyklad.com</p>
      </div>
      <div class="adress block-info">
        <h3>Adres</h3>
        <p>ul. Przykładowa 12</p>
        <p>00-123 Warszawa</p>
      </div>

      <div class="menu block-info">
        <h3>Menu</h3>
        <router-link :to="'/'">Cennik </router-link>
        <router-link :to="'/'">Pokoje</router-link>
        <router-link :to="'/'">O nas</router-link>
        <router-link :to="'/kontakt'">Kontakt</router-link>
      </div>
    </div>

    <div class="social-links">
      <Icon icon-type="Phone" />
      <Icon icon-type="Facebook" />
      <Icon icon-type="Youtube" />
      <Icon icon-type="Instagram" />
      <Icon icon-type="Telegram" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 3em 4em 1.5em 4em;

  background-color: #f3f2f0;

  .general-info {
    display: flex;
    gap: 10em;
    border-bottom: 2px solid #999999;
    padding-bottom: 2em;

    .block-info {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      color: #262729;
    }

    .menu {
      a {
        text-decoration: none;
        color: #262729;
      }
    }
  }

  .social-links {
    display: flex;
    justify-content: end;
    gap: 1em;
    margin-top: 1em;
  }
}
</style>
