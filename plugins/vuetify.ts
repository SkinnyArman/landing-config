// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#1A1E79",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#FF4465",
    info: "#2C5EFF",
    success: "#00CD82",
    warning: "#FB8C00",
    accent: "#2D31A6",
    darkblue: "#001E58",
    navy: "#2F3857",
    silver: "#5A5E6F",
    lightgrey: "#F5F5F5",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
