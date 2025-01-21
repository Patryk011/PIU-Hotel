<template>
  <div class="contact">
    <h2>Formularz kontaktowy</h2>
    <form @submit.prevent="validateForm" class="contact-form">
      <label for="Name">Imię</label>
      <input type="text" v-model="name" />
      <label for="Surname">Nazwisko</label>
      <input type="text" v-model="surname" />
      <label for="Email">Email</label>
      <input
        type="email"
        v-model="email"
        :class="{ invalid: emailError }"
        @blur="validateEmail"
      />
      <p v-if="emailError" class="error">{{ emailError }}</p>
      <label for="Message">Wiadomość</label>
      <textarea name="message" id="message" v-model="message" />

      <button :disabled="hasErrors">Wyślij</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const name = ref("");

const surname = ref("");

const email = ref("");

const message = ref("");

const emailError = ref("");

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  emailError.value = emailRegex.test(email.value)
    ? ""
    : "Podaj prawidłowy adres email";
};

const hasErrors = computed(() => emailError.value !== "");

const validateForm = () => {
  validateEmail();

  if (hasErrors.value) return;

  alert("Formularz wysłany");
  name.value = "";
  surname.value = "";
  email.value = "";
  message.value = "";
};
</script>

<style lang="scss" scoped>
.contact {
  text-align: center;
  padding: 10em;

  h2 {
    font-size: 3.5em;
    margin-bottom: 1.5em;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 32%;
    padding: 2em;
    background: gray;
    text-align: left;
    background: linear-gradient(to bottom, #c4c4c4, #808080);
    border: none;
    border-radius: 0.5em;

    label {
      padding: 2em 0 0.5em 0;

      &:last-of-type {
        padding-top: 4em;
      }
    }

    input {
      padding: 0.8em;
      border: none;
      border-radius: 0.5em;
    }

    textarea {
      height: 13em;
      border-radius: 0.5em;
      border: none;
    }

    button {
      color: white;
      background-color: black;
      padding: 0.5em;
      font-size: 1em;
      border: none;
      border-radius: 0.5em;
      margin-top: 5em;
      cursor: pointer;

      &:disabled {
        color: gray;
        opacity: 0.8;
        cursor: not-allowed;
      }
    }

    .error {
      color: red;
      padding-top: 0.2em;
      font-weight: bold;
    }

    .invalid {
      border: 3px solid red;
    }
  }
}
</style>
