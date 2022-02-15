<template>
    <v-container class="bg">
        <v-row class="form">
            <v-col cols="8" style="background:#fff">
                <h1>Formulario de Contacto {{ form.nombre }}</h1>
                <v-row>
                    <v-col cols="12">
                        <v-form
                        ref="form"
                        @submit.prevent="submit"
                        >
                        <div class="form-group" :class="{ 'form-group--error': $v.nombre.$error }">
    <label class="form__label">Name</label>
    <input class="form__input" v-model.trim="$v.nombre.$model"/>
  </div>
                        <v-container fluid class="elevation-12">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Nombre *</span>
                                        <v-text-field
                                            v-model="form.nombre"
                                            :rules="rules.requerido"
                                            color="purple darken-2"
                                            required
                                            outlined
                                            label="Escribe tu nombre"
                                            >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Email *</span>
                                        <v-text-field
                                            v-model="form.email"
                                            :rules="rules.email"
                                            color="purple darken-2"
                                            label="Escribe tu email"
                                            required
                                            outlined
                                            >
                                        </v-text-field>
                                        <div v-if="!v.email">Email is required</div>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Teléfono</span>
                                        <v-text-field
                                            v-model="form.telefono"
                                            color="purple darken-2"
                                            label="Escribe tu teléfono"
                                            outlined
                                            >
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Sitio web</span>
                                        <v-text-field
                                            v-model="form.sitioweb"
                                            color="purple darken-2"
                                            label="Escribe la URL de tu web"
                                            outlined
                                            >
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Asunto *</span>
                                        <v-text-field
                                            v-model="form.asunto"
                                            :rules="rules.mensaje"
                                            color="purple darken-2"
                                            outlined
                                            label="Escribe un asunto"
                                            >
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Mensaje *</span>
                                        <v-textarea
                                            v-model="form.mensaje"
                                            :rules="rules.mensaje"
                                            outlined
                                            name="input-7-4"
                                            label="Deja aquí tu comentario"
                                            >
                                        </v-textarea>
                                    </v-col>
                                </v-row>

                                <v-card-actions>
                                    <v-btn
                                    text
                                    @click="submit"
                                    >
                                    Cancel
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    :disabled="!formIsValid"
                                    text
                                    color="primary"
                                    type="submit"
                                    >
                                    Register
                                    </v-btn>
                                </v-card-actions>
                            </v-container>
                        </v-form>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { required } from 'vuelidate/lib/validators'


  export default {
    data () {
        const defaultForm = Object.freeze({
            nombre: '',
            email: '',
            telefono: '',
            sitioweb: '',
            asunto: '',
            mensaje: '',
        })

        return {
            form: Object.assign({}, defaultForm),
            rules: {
                age: [
                    val => val < 10 || `I don't believe you!`,
                ],
                requerido: [val => (val || '').length > 0 || 'This field is required'],
                mensaje: [val => (val || '').length > 49 || 'El campo es requerido, mínimo 50 caracteres'],
            },
            animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
            conditions: false,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
            snackbar: false,
            terms: false,
            defaultForm,
        }
    },
    validations: {
        nombre: {
            required
        }
    },
    computed: {
        formIsValid () {
            return (
                this.form.first &&
                this.form.last &&
                this.form.favoriteAnimal &&
                this.form.terms
            )
        },
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
        console.log('11')
      },
      status(validation) {
        return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    }
    },
  }
</script>

<style scoped>

.bg{
    background: rgb(240, 187, 240);
}

.form {
    display:flex; 
    justify-content:center;
}
</style>
