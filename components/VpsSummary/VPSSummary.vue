<template>
  <div class="card-container sticky ml-md-2 ml-lg-4 pt-4 pb-6 px-5">
    <span class="caption text--blue-dark font-weight-medium mb-2"
      >Specification</span
    >
    <order-summary :instance="props.instance"></order-summary>
    <v-divider class="mb-3"></v-divider>
    <div class="mb-2">
      <div class="d-flex justify-space-between align-center">
        <span class="body-2">Base Price</span>
        <span class="subtitle-1 font-weight-bold navy--text"
          >$ {{ moneyFormat(props.basePrice) }}</span
        >
      </div>
      <div class="d-flex justify-space-between align-center">
        <span class="body-2">Region-based Price</span>
        <span class="subtitle-1 font-weight-bold navy--text"
          >$ {{ moneyFormat(props.regionPrice) }}</span
        >
      </div>
    </div>
    <v-divider class="mb-3"></v-divider>
    <div
      class="total navy--text d-flex align-center justify-space-between mb-2 px-2"
    >
      <p class="subtitle-2 font-weight-bold">Estimated Total</p>
      <p class="subtitle-1 font-weight-bold">
        {{ "$" + moneyFormat(props.price) }}
        <span class="caption grey--text text--darken-1 font-weight-bold"
          >/m</span
        >
      </p>
    </div>

    <base-button
      id="deploy-vps"
      size="full"
      class="text-white pl-5 mt-4"
      theme="success"
      :loading="isSending"
      :disabled="!isDeployEnabled"
      @click="$emit('submit')"
      >Order NOW</base-button
    >
  </div>
</template>

<script setup lang="ts">
import { moneyFormat } from "./utils";

export interface Props {
  price?: number;
  basePrice?: number;
  regionPrice?: number;
  isSending: boolean;
  isDeployEnabled: boolean;
  instance: object;
}
const props = withDefaults(defineProps<Props>(), {
  price: 0,
  basePrice: 0,
  regionPrice: 0,
});
</script>

<style scoped lang="scss">
@import "./VPSSummary.scss";
</style>
