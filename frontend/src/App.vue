<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>Luiso & Achu</v-toolbar-title>
      <v-spacer></v-spacer>
      <span><v-icon left>{{ icons.mdiAccount }}</v-icon>{{id}}</span>
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
              <GiftCard :gift="gift" @select="onSelect"></GiftCard>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <InvitationDialog :dialog="invitationDialog" @accept=onAccept></InvitationDialog>

      <ConfirmationDialog :dialog="confirmationDialog"
      @accept=onAccept></ConfirmationDialog>

      <WelcomeDialog :dialog="welcomeDialog" @accept=onAccept></WelcomeDialog>
      
    </v-main>
  </v-app>
</template>

<script>
import ConfirmationDialog from './components/ConfirmationDialog.vue'
import InvitationDialog from './components/InvitationDialog.vue'
import GiftCard from './components/GiftCard.vue'
import WelcomeDialog from './components/WelcomeDialog.vue'
import { mdiAccount } from '@mdi/js' 

export default {
  data: () => ({
    id: null,
    invitationDialog: true,
    welcomeDialog: false,
    confirmationDialog: false,
    icons: {
      mdiAccount
    },
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
    ConfirmationDialog,
    InvitationDialog,
    GiftCard,
    WelcomeDialog
  },
  methods: {
    onAccept(id) {
      this.id = id
      this.invitationDialog = false
      this.welcomeDialog = true
    },
    onSelect(gift) {
      this.confirmationDialog = true
      console.log(gift)
    }
  }
}
</script>
