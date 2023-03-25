<template>
  <v-app id="app">
    <app-header></app-header>
    <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer>
    <region-group
      :locationList="regionList"
      :default-location="instance.region"
    ></region-group>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { Region } from "./models/Region";
import { Instance } from "./types/instance";

const { lgAndUp } = useDisplay();

const regionList = ref<Region[]>([]);
const { data } = await useFetch<Region[]>(
  "https://dev3.cloudzy.com/api/regions?productId=172&slug=home"
);
const instance = reactive<Instance>({ region: data.value[0] });
regionList.value = data.value;

</script>
