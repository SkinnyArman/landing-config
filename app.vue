<template>
  <v-app id="app">
    <app-header></app-header>
    <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer>
  </v-app>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { lgAndUp } = useDisplay();
</script>
