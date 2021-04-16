<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7MhPWxCjZY4MjUvRxU5EQDeBmz2zfu0gXwzzs5ooyh8OAMCY5loRD8bsqe71WK9IwoAfL4U6&usqp=CAc"
      height="200px"
    ></v-img>

    <v-card-title>
      Horno de Microondas Winia
    </v-card-title>

    <v-card-subtitle>
      1.1 Pies Cúbicos Acero Inoxidable
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Regalar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Lo necesito para hacerme unas palomitas y ver a la maquina
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: "GiftCard",
    data: () => ({
      show: false,
    }),
  }
</script>
