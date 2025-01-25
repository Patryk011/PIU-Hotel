<template>
  <div class="register">
    <h2>Nie masz konta? Zarejestruj się</h2>
    <form @submit.prevent="register" class="register-form">
      <label for="Email">Email</label>
      <input type="text" v-model="email" :class="{ invalid: emailError }" />
      <p v-if="emailError" class="error">{{ emailError }}</p>

      <label for="Telephone">Telefon</label>
      <input
        type="text"
        v-model="telephone"
        :class="{ invalid: telephoneError }"
      />
      <p v-if="telephoneError" class="error">{{ telephoneError }}</p>

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

      <button type="submit">Zarejestruj się</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import bcrypt from "bcryptjs";

const email = ref("");
const telephone = ref("");
const password = ref("");
const emailError = ref("");
const telephoneError = ref("");
const passwordError = ref("");
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value)
    ? ""
    : "Podaj prawidłowy adres email";
};

const validateTelephone = () => {
  const phoneRegex = /^[0-9]{9}$/;
  telephoneError.value = phoneRegex.test(telephone.value)
    ? ""
    : "Podaj poprawny numer telefonu (9 cyfr)";
};

const validatePassword = () => {
  const passwordCriteria = [
    {
      test: (value: string) => value.length >= 8,
      error: "Hasło musi mieć co najmniej 8 znaków",
    },
    {
      test: (value: string) => /[A-Z]/.test(value),
      error: "Hasło musi zawierać co najmniej jedną wielką literę",
    },
    {
      test: (value: string) => /[a-z]/.test(value),
      error: "Hasło musi zawierać co najmniej jedną małą literę",
    },
    {
      test: (value: string) => /\d/.test(value),
      error: "Hasło musi zawierać co najmniej jedną cyfrę",
    },
    {
      test: (value: string) => /[^A-Za-z0-9]/.test(value),
      error: "Hasło musi zawierać co najmniej jeden znak specjalny",
    },
  ];

  for (const criterion of passwordCriteria) {
    if (!criterion.test(password.value)) {
      passwordError.value = criterion.error;
      return;
    }
  }

  passwordError.value = "";
};

const register = async () => {
  validateEmail();
  validateTelephone();
  validatePassword();

  if (!emailError.value && !telephoneError.value && !passwordError.value) {
    try {
      const hashedPassword = bcrypt.hashSync(password.value, 10);
      const user = {
        email: email.value,
        telephone: telephone.value,
        password: hashedPassword,
      };

      await axios.post("http://localhost:3000/users", user);
      alert("Rejestracja udana!");
      email.value = "";
      telephone.value = "";
      password.value = "";
    } catch (error) {
      alert("Błąd rejestracji");
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  width: 25em;
  font-family: Arial, sans-serif;
  color: #333;

  h2 {
    text-align: center;
    margin-bottom: 2em;
    font-size: 2em;
  }

  .register-form {
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
  }
}
</style>
