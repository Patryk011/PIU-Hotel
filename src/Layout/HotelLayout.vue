<template>
  <div class="layout-container">
    <header class="main-header">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Hotel logo" />
      </router-link>
      <NavigationMenu :navItems />
      <button class="login" @click="router.push('/logowanie')">
        Zaloguj się
      </button>
    </header>

    <main class="content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import type { INavItem } from "@/components/Shared/Navigation/NavigationMenu.types";
import NavigationMenu from "@/components/Shared/Navigation/NavigationMenu.vue";
import Footer from "@/components/Shared/Footer/Footer.vue";
import { ref } from "vue";
import router from "@/router";

const navItems = ref<INavItem[]>([
  { label: "Cennik", link: "/cennik" },
  { label: "Pokoje", link: "/pokoje" },
  { label: "O Nas", link: "/o-nas" },
  { label: "Kontakt", link: "/kontakt" },
]);
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #e7e6eb;
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5em;
    gap: 8em;
    z-index: 1;

    img {
      height: 50px;
      width: 80px;
    }

    .login {
      border: none;
      color: white;
      background-color: #1e1e1e;
      border-radius: 0.5em;
      padding: 1em;
      width: 10%;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30%;
      font-family: "Arial", sans-serif;
      cursor: pointer;

      &:hover {
        background-color: #494848;
      }
    }
  }
  .content {
    flex: 1;
  }
}
</style>
