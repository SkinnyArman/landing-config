<template>
  <header
    class="card-container d-flex justify-center align-center px-6 px-sm-8 px-md-12"
  >
    <div class="content d-flex justify-space-between">
      <img src="~/assets/images/logo-purple.png" />
      <a :href="constants.CLOUDZY_SIGN_IN"
        ><base-button theme="accent">Sign In</base-button></a
      >
    </div>
  </header>
</template>

<script setup>
import { constants } from "@/utils/constants";
</script>

<style lang="scss" scoped>
@import "./AppHeader.scss";
</style>
