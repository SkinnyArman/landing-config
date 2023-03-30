<template>
  <div
    class="summary my-2 text-caption d-flex flex-column flex-sm-row flex-lg-column"
  >
    <div>
      <div class="info-row d-flex justify-space-between px-2">
        <p class="text-grey text--darken-1">Region:</p>
        <p class="text-capitalize text-navy">
          {{ "s" }}
        </p>
      </div>
      <div class="info-row d-flex justify-space-between bg-lightgrey px-2">
        <p class="text-grey text--darken-1">vCPU:</p>
        <p class="text-navy">{{ planCPU }}</p>
      </div>
      <div class="info-row d-flex justify-space-between px-2">
        <p class="text-grey text--darken-1">Memory:</p>
        <p class="text-navy">{{ planMemory }}</p>
      </div>
    </div>
    <div>
      <div class="info-row d-flex justify-space-between px-2">
        <p class="text-grey text--darken-1">Storage:</p>
        <p class="text-navy">{{ planStorage }}</p>
      </div>
      <div
        class="info-row os-row d-flex justify-space-between align-start px-2"
      >
        <p class="os text-grey text--darken-1">OS:</p>
        <p class="text-capitalize text-navy text-justify">{{ "s" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  computed: {
    planCPU() {
      return this.instance.region.selectedPlan
        ? this.instance.region.selectedPlan.specification.cpu + " vCPU"
        : "-";
    },
    planMemory() {
      return this.instance.region.selectedPlan
        ? this.instance.region.selectedPlan.specification.ram + " GB"
        : "-";
    },
    planStorage() {
      return this.instance.region.selectedPlan
        ? this.instance.region.selectedPlan.specification.storage + " GB"
        : "-";
    },
    // planRegion() {
    //   return this.instance.region.selectedLocation
    //     ? this.instance.selectedLocation.name
    //     : "-";
    // },
    // osName() {
    //   return this.instance.os.name ? this.instance.os.name.split("(")[0] : "-";
    // },
  },
};
</script>

<style lang="scss" scoped>
.half {
  width: 50%;
  margin-right: 8px;
}
.summary {
  .info-row {
    align-items: center;
    height: 23px;
    border-radius: 4px;
    &.os-row {
      height: 35px;
    }
  }
}
.os {
  min-width: 70px;
}
</style>
