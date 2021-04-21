<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          Mesa de Regalos de Fer & Luiso
        </v-card-title>

        <v-card-text>
          <p>Gracias por tu ayuda :)</p>
          <p>
            Puedes seleccionar cualquier regalo de la lista. Si eventualmente
            requieres cambiar tu selección puedes ingresar nuevamente a este
            sitio y actualizarla.
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('accept')">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "WelcomeDialog",
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
