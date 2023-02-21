<template>
  <v-app id="app">
    <app-header></app-header>
    <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer>
    <h2>{{ instance }}</h2>
    <region-group :locationList="data" :default-location="instance.selectedLocation"></region-group>
  </v-app>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { lgAndUp } = useDisplay();
const instance = ref({
  selectedLocation: { id: "dtx", configId: null, abbr: "DTX" },
})
const { data } = await useFetch('https://dev3.cloudzy.com/api/regions?productId=172&slug=home')
</script>
