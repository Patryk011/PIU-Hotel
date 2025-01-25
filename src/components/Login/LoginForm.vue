<template>
  <div class="login">
    <h2>Logowanie</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="Email">Email</label>
      <input type="email" v-model="email" :class="{ invalid: emailError }" />
      <p v-if="emailError" class="error">{{ emailError }}</p>

      <label for="Password">Hasło</label>
      <div class="password-wrapper">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          :class="{ invalid: passwordError }"
        />
        <span class="toggle-password" @click="togglePasswordVisibility">
          {{ showPassword ? "🙈" : "👁️" }}
        </span>
      </div>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>

      <button type="submit">Zaloguj się</button>

      <span class="password-reminder" @click="remindPassword"
        >Zapomniałeś hasła?</span
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import bcrypt from "bcryptjs";

const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const showPassword = ref(false);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value)
    ? ""
    : "Podaj prawidłowy adres email";
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = async () => {
  validateEmail();

  if (!emailError.value) {
    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${email.value}`
      );

      if (response.data.length === 0) {
        emailError.value = "Użytkownik nie istnieje";
        return;
      }

      const user = response.data[0];
      const passwordMatch = bcrypt.compareSync(password.value, user.password);

      if (passwordMatch) {
        alert("Logowanie udane!");
      } else {
        passwordError.value = "Nieprawidłowe hasło";
      }
    } catch (error) {
      alert("Błąd logowania");
    }
  }
};

const remindPassword = () => {
  alert("Wysłaliśmy email z przypomnieniem hasła na twój email");
};
</script>

<style lang="scss" scoped>
.login {
  width: 25em;
  font-family: Arial, sans-serif;
  color: #333;

  h2 {
    text-align: center;
    margin-bottom: 2em;
    font-size: 2em;
  }

  .login-form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    input {
      padding: 0.8em;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 0.8em;

      &.invalid {
        border-color: red;
      }
    }

    .error {
      color: red;
      font-size: 0.9em;
      margin-bottom: 0.8em;
    }

    .password-wrapper {
      position: relative;

      input {
        width: 100%;
      }

      .toggle-password {
        position: absolute;
        top: 40%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 1em;
        color: #007bff;
      }
    }

    button {
      padding: 0.9em;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 0.5em;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: #555;
      }
    }

    .password-reminder {
      text-align: left;
      margin-top: 0.8em;
      font-size: 1em;
      cursor: pointer;
      color: #0004ff;
    }
  }
}
</style>
