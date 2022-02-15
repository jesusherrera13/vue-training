<template>
    <v-container class="bg">
        <v-row class="form">
            <v-col cols="8" style="background:#fff">
                <h1>Formulario de Contacto {{ nombre }}</h1>
                <v-row>
                    <v-col cols="12">
                        <v-form
                        ref="form"
                        @submit.prevent="submitForm"
                        >
                        <v-container fluid class="elevation-12">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Nombre *</span>
                                        <v-text-field
                                            v-model="nombre"
                                            color="purple darken-2"
                                            outlined
                                            label="Escribe tu nombre"
                                            >
                                        </v-text-field>
                                        <span class="error" v-if="(!$v.nombre.required || !$v.nombre.alpha) && $v.nombre.$dirty">Nombre is required</span>

                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Email *</span>
                                        <v-text-field
                                            v-model="email"
                                            color="purple darken-2"
                                            label="Escribe tu email"
                                            required
                                            outlined
                                            >
                                        </v-text-field>
                                        <span class="error" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty">
                                            Escriba un corre válido
                                        </span>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Teléfono</span>
                                        <v-text-field
                                            v-model="telefono"
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
                                            v-model="sitioweb"
                                            color="purple darken-2"
                                            label="Escribe la URL de tu web"
                                            outlined
                                            >
                                        </v-text-field>
                                        <span class="error" v-if="(!$v.sitioweb.required || !$v.sitioweb.url) && $v.email.$dirty">
                                            Escriba una url válida
                                        </span>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <span>Asunto *</span>
                                        <v-text-field
                                            v-model="asunto"
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
                                            v-model="mensaje"
                                            outlined
                                            name="input-7-4"
                                            label="Deja aquí tu comentario"
                                            >
                                        </v-textarea>
                                        <span class="error" v-if="(!$v.mensaje.required || !$v.mensaje.minLength) && $v.mensaje.$dirty">
                                            Los comentarios debe ser mínimo {{ $v.mensaje.$params.minLength.min }}
                                        </span>
                                    </v-col>
                                </v-row>

                                <v-card-actions>
                                    <v-btn
                                    x-large
                                    color="purple"
                                    dark
                                    @click="submitForm"
                                    >
                                        Enviar
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

import { required, email, minLength, url, alpha } from 'vuelidate/lib/validators'



export default {
    data: ()  => ({
        nombre: '',
        email: '',
        telefono: '',
        sitioweb: '',
        asunto: '',
        mensaje: '',
    }),
    validations: {
        nombre: {
            required,
            alpha
        },
        email: {
            required,
            email
        },
        telefono: {
            required,
        },
        sitioweb: {
            required,
            url
        },
        asunto: {
            required,
        },
        mensaje: {
            required,
            minLength: minLength(50)
        }
    },
    computed: {
        /* formIsValid () {
            return (
                this.form.first &&
                this.form.last &&
                this.form.favoriteAnimal &&
                this.form.terms
            )
        }, */
    },

    methods: {
        submitForm () {
            // this.form = Object.assign({}, this.defaultForm)
            // this.$refs.form.reset()
            this.$v.$touch();
            if(!this.$v.$invalid) {
                console.log(`Name: $(this.name), Email: $(this.email)`)
            }
        },
        submit () {
            this.snackbar = true
            // this.resetForm()
            console.log('11')
        },
        /* status(validation) {
            return {
                error: validation.$error,
                dirty: validation.$dirty
            }
        } */
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
