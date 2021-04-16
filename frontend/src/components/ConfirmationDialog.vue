<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="600"
    >
      <v-card>
        <template v-if="mode === 'select'">
          <v-card-title class="headline">
            ¿Estás seguro de regalar {{ gift.name }}?
          </v-card-title>
          <v-card-text>En caso de querer cambiar tu elección puedes entrar con tu
          mismo Número de Invitación, cancelar tu selección y escoger un nuevo
          regalo</v-card-text>
        </template>
        <template v-if="mode === 'cancel'">
          <v-card-title class="headline">
            ¿Estás seguro de cancelar el regalo {{ gift.name }}?
          </v-card-title>
        </template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('cancel', gift)"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('accept', gift)"
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
      },
      mode: {
        type: String,
        required: true
      },
      gift: {
        type: Object,
        required: true
      }
    },
  }
</script>
