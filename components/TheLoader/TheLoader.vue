<template>
  <v-skeleton-loader
    :loading="true"
    :width="width"
    :height="height"
    :type="type"
    max-width="100%"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: 'TheLoader',
  props: {
    type: {
      type: String,
      required: true,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: ''
    },
    height: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style></style>
