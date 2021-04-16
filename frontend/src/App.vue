<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>Luiso & Achu</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-1">
      <v-container>
        <v-row>
          <template v-for="category in gifts">
            <v-col
              :key="category.name"
              class="mt-2"
              cols="12"
            >
            <strong>{{ category.name }}</strong>
            </v-col>

            <v-col
              v-for="gift in category.items"
              :key="gift.name"
              cols="12"
              md="3"
            >
              <GiftCard :gift="gift"></GiftCard>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <InvitationDialog :dialog="dialog"></InvitationDialog>
    </v-main>
  </v-app>
</template>

<script>
import InvitationDialog from './components/InvitationDialog.vue'
import GiftCard from './components/GiftCard.vue'

export default {
  data: () => ({
    dialog: true,
    gifts: [{
      name: 'Cocina',
      items: [{
        name: 'Microondas',
        description: 'Esta es la descripcion'
      },{
        name: 'Cucharas',
        description: 'Esta es la descripcion'
      }]
    }, {
      name: 'Baño',
      items: [
        {
          name: 'Toallas',
          description: 'Esta es la descripcion'
        }
      ]
    }]
  }),
  components: {
    InvitationDialog,
    GiftCard
  },
}
</script>
