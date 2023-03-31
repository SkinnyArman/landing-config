<template>
  <v-app id="app">
    <app-header></app-header>
    <!-- <app-footer :class="{ 'mt-45': lgAndUp }"></app-footer> -->
    <div class="content">
      <h3 class="mr-auto ml-auto">Configure your Cloud VPS</h3>
      <v-row>
        <v-col lg="9">
          <region-group
            :locationList="regionList"
            :default-location="instance.region"
            @region="instance.region = $event"
          ></region-group>
          <v-select
            placeholder="Select Os"
            :items="
              osList.filter(
                (os) => os.family !== 'almalinux' && os.family !== 'kali'
              )
            "
          >
            <template v-slot:item="{ item }">
              <div @click="selectOs(item.value)">
                <img class="mr-2" :src="itemImage(item.value.family)" />
                <span class="text-subtitle-2 text-silver">{{
                  item.value.name
                }}</span>
              </div>
            </template>
          </v-select>
        </v-col>
        <v-col lg="3">
          <VPS-summary
            :instance="instance"
            :is-sending="false"
            :is-deploy-enabled="true"
          ></VPS-summary>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<style lang="scss">
.content {
  margin-right: auto;
  margin-left: auto;
  max-width: 1264px;
  p {
    margin-bottom: unset !important;
  }
  @media screen and (max-width: 1264px) {
    padding: 0 80px;
    padding-bottom: 110px;
  }
  @media screen and (max-width: 960px) {
    padding: 0 32px;
    padding-bottom: 110px;
  }
}
</style>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { Region } from "./models/Region";
import { Instance } from "./types/instance";
import API_URLS from "./api/urls";
import { url } from "inspector";

const { lgAndUp } = useDisplay();
const { query } = useRoute();

const { data, error } = await useFetch<Region[]>(API_URLS.REGION, {
  params: query,
  onRequestError({ request, options, error }) {
    console.log(error);
  },
});

const regionList = ref<Region[]>(data.value);
const instance = reactive<Instance>({ region: regionList.value[0], os: {} });
const osList = ref<any>([]);

if (instance.region.isZyrrus) {
  const { data } = await useFetch(API_URLS.OS, {
    params: {
      productId: query.productId,
      regionId: instance.region.id,
      osFamily: query.osFamily,
    },
  });
  osList.value = data.value;
}

const selectOs = (os) => {
  instance.os = os;
};

const itemImage = (family: string) => {
  return new URL(`./assets/images/${family}.svg`, import.meta.url).href;
};
</script>
