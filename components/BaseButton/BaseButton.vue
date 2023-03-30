<template>
  <v-btn
    :class="[size, { short: short }, fontSize]"
    elevation="0"
    :loading="loading"
    :width="width"
    :disabled="disabled"
    :color="disabled ? 'white' : theme"
    :type="type"
    @click.stop="$emit('click')"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: String,
      required: false,
      default: "",
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    short: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: String,
      required: false,
      default: "",
    },
    color: {
      type: String,
      required: false,
      default: "white",
    },
    fontSize: {
      type: String,
      required: false,
      default: "normal",
    },
    theme: {
      type: String,
      required: false,
      default: "secondary",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./BaseButton.scss";
</style>
