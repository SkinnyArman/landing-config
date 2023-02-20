<template>
  <footer class="bg-darkblue px-6 px-md-15 d-flex flex-xs-column justify-center">
    <v-row no-gutters align-content="center" class="footer-content">
      <v-col cols="12" sm="6" order-sm="1">
        <div
          class="d-flex flex-xs-center"
          :class="{ 'd-flex justify-center': xs }"
        >
          <img src="~/assets/images/logo-white.png" />
        </div>
      </v-col>
      <v-col cols="12" order-sm="3" class="my-5">
        <div class="horizontal-line white"></div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        order-sm="2"
        class="d-flex justify-center justify-sm-end"
      >
        <div class="icons d-flex mt-sm-2">
          <a class="d-flex align-center" href="#"><facebook-icon /></a>
          <a class="d-flex align-center" href="#"> <twittrer-icon /></a>
          <a class="d-flex align-center" href="#"> <instagram-icon /></a>
          <a class="d-flex align-center" href="#">
            <linkedin-icon />
          </a>
          <a
            class="d-flex align-center"
            target="_href"
            :href="constants.CLOUDZY_YOUTUBE"
          >
            <youtube-icon />
          </a></div
      ></v-col>
      <v-col cols="12" sm="6" order-sm="4" class="mt-2">
        <div
          class="white--text caption text-center text-sm-left"
          style="opacity: 0.3"
        >
          <p class="mb-0">
            © 2008-{{ new Date().getFullYear() }} Cloudzy. All rights reserved.
          </p>
        </div></v-col
      >
      <v-col cols="12" sm="6" order-sm="5" class="mt-2">
        <p
          class="white--text text-sm-right caption text-center text-sm-left mb-0"
          style="opacity: 0.3"
        >
          <a
            href="https://cloudzy.com/terms-of-service/"
            target="_blank"
            class="text-decoration-underline mr-2"
            style="color: inherit"
          >
            Terms of Service</a
          ><a
            href="https://cloudzy.com/privacy-policy/"
            target="_blank"
            class="text-decoration-underline"
            style="color: inherit"
            >Privacy Policy</a
          >
        </p></v-col
      >
    </v-row>
  </footer>
</template>

<script setup>
import { constants } from "@/utils/constants";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { xs } = useDisplay();
</script>

<style scoped lang="scss">
@import "./AppFooter.scss";
</style>
