<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          ¿Estás seguro de tu selección?
        </v-card-title>
        <v-card-text>En caso de querer cambiar tu elección puedes entrar con tu
        mismo Número de Invitación, cancelar tu selección y escoger un nuevo
        regalo</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('cancel')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('accept')"
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'ConfirmationDialog',
    props: {
      dialog: {
        type: Boolean,
        required: true
      }
    },
  }
</script>
