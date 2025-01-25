<template>
  <div class="forms-flex">
    <LoginForm />
    <RegisterForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/components/Login/LoginForm.vue";
import RegisterForm from "@/components/Login/RegisterForm.vue";
</script>

<style lang="scss" scoped>
.forms-flex {
  display: flex;
  gap: 25em;
  padding: 20em;
  align-items: center;
}
</style>
