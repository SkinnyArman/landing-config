<template>
  <div>
    <h3 class="mb-10 text-primary">
      Region
      <span class="text-subtitle-2 text-grey">(server location)</span>
    </h3>
    <v-row class="mb-4" dense>
      <v-col
        v-for="location in locationList"
        :key="location.id"
        xs="12"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="text-navy font-weight-medium"
      >
        <div :id="location.name">
          <div
            class="region-card text-body-2 px-2 py-2 d-flex align-center text-blue-dark font-weight-medium"
            :id="location.name"
            :class="{
              active: isLocationActive(selectedLocation, location),
              disable: isLocationDisabled(location),
            }"
            @click="setLocation(location)"
          >
            <img
              class="mr-2"
              :src="location.image"
              :alt="location.name"
              :class="{
                'filter-gray-60': location.disabled,
              }"
            />
            <div
              v-if="location.isPremium"
              class="bookmark d-flex text-caption font-italic justify-center bg-accent white--text"
            >
              10Gbps - NVMe SSD - 2.9+ GHz CPU
            </div>

            <div class="d-flex justify-space-between flex-grow-1 align-center">
              <p class="text-primary text-subtitle-2">{{ location.name }}</p>
              <span class="text-caption text-grey text--darken-1 add-price">
                + ${{ parseFloat(location.monthlyPrice.toString()).toFixed(2) }}
                USD
              </span>
              <!-- <p v-if="isLocationDisabled(location)" class="caption">
              Coming Soon...
            </p> -->
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="caption text-silver">
      <v-icon color="accent" class="mr-2">mdi-information-outline </v-icon>
      <span>
        Certain locations may come with lower CPU speed and 1Gbps connection.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Region } from "../../models/Region";
import { ref } from "vue";
import { isLocationDisabled, isLocationActive } from "./utils";

interface PropsType {
  locationList: Region[];
  defaultLocation: Region;
}
const props = defineProps<PropsType>();
const selectedLocation = ref<Region>(props.defaultLocation);

const emits = defineEmits(["region"]);

const setLocation = (location: Region) => {
  if (location.disabled) {
    return;
  }
  selectedLocation.value = location;
  emits("region", location);
};
</script>

<style scoped lang="scss">
@import "./VPSRegionGroup.scss";
</style>
