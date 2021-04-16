<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >

  <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>
      {{ gift.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ gift.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="blue darken-1"
        text
      >
        Regalar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="blue darken-2"
        text
      >
        Cancelar
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    name: "GiftCard",
    data: () => ({
      show: false,
    }),
    props: {
      gift: {
        type: Object,
        required: true
      }
    }
  }
</script>
