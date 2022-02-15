<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link :to="{name: 'Producto'}">
        <v-btn
        text
      >
          <span class="mr-2">Producto</span>
        </v-btn>
      </router-link>
      <router-link :to="{name: 'Contacto'}">
        <v-btn
        text
      >
          <span class="mr-2">Contacto</span>
        </v-btn>
      </router-link>
      <router-link :to="{name: 'About'}">
        <v-btn
        text
      >
          <span class="mr-2">About</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
