<template>
  <v-app id="app">
    <app-header></app-header>
    <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer>
    <region-group :locationList="regionList" :default-location="instance.selectedLocation"></region-group>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { Region } from './types/region'
import { Instance } from './types/instance'

const { lgAndUp } = useDisplay();

const regionList = ref<Region[]>([])
const instance = ref(<Instance>{
  selectedLocation: { id: "DTX", configId: null, abbr: "dtx" }
})
const { data } = await useFetch<Region[]>('https://dev3.cloudzy.com/api/regions?productId=172&slug=home')
regionList.value = data.value

</script>
