<template>
  <div class="about">
    <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-title class="text-h5">
              This is an about page
            </v-card-title>

            <v-card-text class="text-center">
              ¿Desea eliminar el producto?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="dialog = false"
              >
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Producto',

    data: () => ({
      dialog: true,
      producto: {},
    })
  }
</script>