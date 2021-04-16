<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Luiso & Achu</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
    </v-navigation-drawer>

    <v-main class="grey lighten-1">
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 4"
              :key="`${n}${j}`"
              cols="12"
              md="3"
            >
              <GiftCard :key=n></GiftCard>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GiftCard from './components/GiftCard.vue'

export default {
  data: () => ({ drawer: null }),
  components: {
    GiftCard
  },
}
</script>
