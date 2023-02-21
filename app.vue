<template>
  <v-app id="app">
    <app-header></app-header>
    <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer>
    <h2>{{ data }}</h2>
    <h1>s</h1>
  </v-app>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { lgAndUp } = useDisplay();
const { data } = await useFetch('https://api.abrhold.com/products?region_id=DTX&type=VM')

</script>
