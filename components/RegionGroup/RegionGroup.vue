<template>
  <div>
    <h3 class="mb-10 primary--text">
      Region
      <span class="subtitle-2 grey--text">(server location)</span>
    </h3>
    <v-row class="mb-4" dense>
      <v-col v-for="location in locationList" :key="location.id" xs="12" cols="12" sm="6" md="6" lg="4"
        class="navy--text font-weight-medium">
        <tag-manager-wrapper :id="location.name" @click="$emit('setLocation', location)">
          <div class="region-card px-2 py-2 d-flex align-center text--blue-dark font-weight-medium" :id="location.name"
            :class="{
              active: isLocationActive(location),
              disable: isLocationDisabled(location),
            }" @click="setLocation(location)">
            <img class="mr-2" :src="location.image" :alt="location.name" :class="{
              'filter-gray-60': location.disabled,
            }" />
            <div v-if="location.abbr === 'dtx'"
              class="bookmark d-flex caption font-italic justify-center primary lighten-1 white--text">
              10Gbps - NVMe SSD - 2.9+ GHz CPU
            </div>

            <div class="d-flex justify-space-between flex-grow-1 align-center">
              <p class="primary--text subtitle-2">{{ location.name }}</p>
              <span class="caption grey--text text--darken-1 add-price">
                + ${{ parseFloat(location.monthlyPrice.toString()).toFixed(2) }} USD
              </span>
              <!-- <p v-if="isLocationDisabled(location)" class="caption">
              Coming Soon...
            </p> -->
            </div>
          </div>
        </tag-manager-wrapper>
      </v-col>
    </v-row>
    <div class="caption silver--text">
      <v-icon color="accent" class="mr-2">mdi-information-outline </v-icon>
      <span>
        Certain locations may come with lower CPU speed and 1Gbps connection.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Region } from '@/types/region'
import { Location } from '@/models/location'

interface PropsType {
  locationList: Region[],
  defaultLocation: Location
}
const selectedLocation = ref()

const props = defineProps<PropsType>();
selectedLocation.value = props.defaultLocation.id

const emits = defineEmits(['setLocation']);

const setLocation = (location: Location) => {
  selectedLocation.value = location.id;
  emits("setLocation", new Location(selectedLocation.value, location.configId, location.abbr.toUpperCase(), false));
}
const isLocationActive = (location: Location) => {
  return selectedLocation.value === location.id;
}
const isLocationDisabled = (location: Location) => {
  return location.disabled;
}

</script>

<style scoped lang="scss">
@import "./VPSRegionGroup.scss";
</style>
