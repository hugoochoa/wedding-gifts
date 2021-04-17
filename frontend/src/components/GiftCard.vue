<template>
  <v-card class="mx-auto" max-width="300">
    <v-img v-if="gift.image_url" height="100" :src="gift.image_url"></v-img>

    <v-card-title>
      {{ gift.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ gift.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        v-if="id"
        color="blue darken-1"
        text
        @click="$emit('select', $event)"
        :disabled="!!gift.reserved_by"
      >
        Regalar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        v-if="id && gift.reserved_by === id"
        color="blue darken-2"
        text
        @click="$emit('cancel', $event)"
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
    id: {
      type: String,
      required: true,
    },
    gift: {
      type: Object,
      required: true,
    },
  },
};
</script>
