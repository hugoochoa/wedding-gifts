<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Introduce el Número de Invitación</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="id"
                    :rules="idRules"
                    label="Número de Invitación"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <small
            >El Número de Invitación se encuentra escrito en la tarjeta de
            invitación física</small
          >
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="blue darken-1"
            text
            @click="onAccept"
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
  name: "InvitationDialog",
  data() {
    const INVITATION_NUMBER_LIMIT = 100;

    function validateInvitationNumber(value) {
      const parsedValue = parseInt(value);
      if (
        isNaN(parsedValue) ||
        parsedValue <= 0 ||
        parsedValue > INVITATION_NUMBER_LIMIT
      ) {
        return false;
      }
      return true;
    }

    return {
      valid: false,
      id: "",
      idRules: [
        (v) => !!v || "El Número de Invitación es requerido",
        (v) =>
          validateInvitationNumber(v) || "El Número de Invitación es inválido",
      ],
    };
  },
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onAccept() {
      this.$emit("accept", this.id);
    },
  },
};
</script>
