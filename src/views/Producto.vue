<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Productos</h1>
        <v-btn
          color="green"
          dark
          class="rounded-tl-xl"
          >
              Nuevo
        </v-btn>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left d-sm-none  d-md-none">
                  Id
                </th>
                <th class="text-left">
                  Código
                </th>
                <th class="text-left">
                  Descripción
                </th>
                <th class="text-left">
                  Precio de Compra
                </th>
                <th class="text-left">
                  Precio de Venta
                </th>
                <th class="text-left">
                  Existencia
                </th>
                <th class="text-left">
                  Editar
                </th>
                <th class="text-left">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="productos.length == 0">
                <td colspan="8" class="text-center">No existen productos para desplegar</td>
              <tr>
              <tr
                v-for="item in productos" :key="item.id"
              >
                <td class="d-sm-none  d-md-none">{{ item.id }}</td>
                <td>{{ item.codigo }}</td>
                <td>{{ item.descripcion }}</td>
                <td>{{ item.precio_compra | formatNumber }}</td>
                <td>{{ item.precio_venta | formatNumber }}</td>
                <td>{{ item.existencia | formatNumber }}</td>
                <td>
                  <v-btn
                    color="warning"
                    dark
                    @click="editar(item)"
                  >
                    <v-icon
                      dark
                      center
                    >
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="error"
                     @click="confirmEliminar(item)"
                  >
                    <v-icon
                      center
                    >
                      mdi-trash-can
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-title class="text-h5">
              {{ producto.descripcion }}
            </v-card-title>

            <v-card-text class="text-center">
              ¿Desea eliminar el producto?
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="error"
                @click="eliminar"
              >
                <v-icon
                  center
                  text
                >
                  mdi-trash-can
                </v-icon>
                Eliminar
              </v-btn>
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

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Producto',

    data: () => ({
      dialog: false,
      producto: {},
      productos: [
        {
          id: 1,
          codigo: '1',
          descripcion: 'Galletas Chokis',
          precio_compra: 10,
          precio_venta: 15,
          existencia: 2,
        },
        {
          id: 2,
          codigo: '2',
          descripcion: 'Mermelada de Fresa',
          precio_compra: 65,
          precio_venta: 80,
          existencia: 97,
        },
        {
          id: 3,
          codigo: '3',
          descripcion: 'Aceite',
          precio_compra: 18,
          precio_venta: 20,
          existencia: 100,
        },
        {
          id: 4,
          codigo: '4',
          descripcion: 'Palomitas de maíz',
          precio_compra: 12,
          precio_venta: 15,
          existencia: 98,
        },
        {
          id: 5,
          codigo: '5',
          descripcion: 'Doritos',
          precio_compra: 5,
          precio_venta: 8,
          existencia: 99,
        },
      ]
    }),
    methods: {
      editar(item) {
        // alert(id)
        this.producto = item;
        // this.dialog = true;
      },
      confirmEliminar(item) {
        // alert(id)
        // console.log(item)
        this.producto = item;

        this.dialog = true;
      },
      eliminar() {
        this.productos = this.productos.filter(producto => producto.id !== this.producto.id);
        this.dialog = false;
      },
      update() {
        const index = this.productos.findIndex(item => item.id === this.producto.id);
        this.productos.splice(index, 1, this.producto);
        this.productos = [...this.productos];
        this.producto = {};
      }
    },
    filters: {
    formatNumber: function(value) {
      return value.toFixed(2);
    },
  },
  }
</script>