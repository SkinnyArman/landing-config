<template>
  <v-app id="app">
    <app-header></app-header>
    <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer>
    <region-group
      :locationList="regionList"
      :default-location="instance.region"
    ></region-group>
    <div v-for="os in osList" :key="os.id">{{ os.name }}</div>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { Region } from "./models/Region";
import { Instance } from "./types/instance";
import API_URLS from "./api/urls";

const { lgAndUp } = useDisplay();
const { query } = useRoute();

const { data } = await useFetch<Region[]>(API_URLS.REGION, {
  params: query,
});

const regionList = ref<Region[]>(data.value);
const instance = reactive<Instance>({ region: regionList.value[0] });
const osList = ref<any>([]);

if (instance.region.isZyrrus) {
  console.log("is zyrrus");
  const { data } = await useFetch(API_URLS.OS, {
    params: {
      productId: query.productId,
      regionId: instance.region.id,
      osFamily: "linux"
    },
  });
  osList.value = data.value;
  console.log(osList.value)
}
</script>
