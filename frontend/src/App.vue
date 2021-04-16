<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Luiso & Achu</v-toolbar-title>
      <v-spacer></v-spacer>
      <span
        ><v-icon left>{{ icons.mdiAccount }}</v-icon
        >{{ id }}</span
      >
    </v-app-bar>

    <v-main class="grey lighten-1">
      <v-container>
        <v-row>
          <template v-for="category in gifts">
            <v-col :key="category.name" class="mt-2" cols="12">
              <strong>{{ category.name }}</strong>
            </v-col>

            <v-col
              v-for="gift in category.items"
              :key="gift.name"
              cols="12"
              md="3"
            >
              <GiftCard
                :gift="gift"
                @select="onGiftSelect(gift)"
                @cancel="onGiftCancel(gift)"
              ></GiftCard>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <InvitationDialog
        :dialog="invitationDialog"
        @accept="onInvitationAccept"
      ></InvitationDialog>

      <WelcomeDialog
        :dialog="welcomeDialog"
        @accept="onWelcomeAccept"
      ></WelcomeDialog>

      <ConfirmationDialog
        :dialog="confirmationDialog"
        :mode="confirmationDialogMode"
        :gift="selectedGift"
        @accept="onConfirmationAccept"
        @cancel="onConfirmationCancel"
      ></ConfirmationDialog>
    </v-main>
  </v-app>
</template>

<script>
import ConfirmationDialog from "./components/ConfirmationDialog.vue";
import InvitationDialog from "./components/InvitationDialog.vue";
import GiftCard from "./components/GiftCard.vue";
import WelcomeDialog from "./components/WelcomeDialog.vue";
import { mdiAccount } from "@mdi/js";

export default {
  data: () => ({
    id: null,
    invitationDialog: true,
    welcomeDialog: false,
    confirmationDialog: false,
    confirmationDialogMode: "select",
    selectedGift: {},
    icons: {
      mdiAccount,
    },
    gifts: [
      {
        name: "Cocina",
        items: [
          {
            name: "Microondas",
            description: "Esta es la descripcion",
          },
          {
            name: "Cucharas",
            description: "Esta es la descripcion",
          },
        ],
      },
      {
        name: "Baño",
        items: [
          {
            name: "Toallas",
            description: "Esta es la descripcion",
          },
        ],
      },
    ],
  }),
  components: {
    ConfirmationDialog,
    InvitationDialog,
    GiftCard,
    WelcomeDialog,
  },
  methods: {
    onInvitationAccept(id) {
      this.id = id;
      this.invitationDialog = false;
      this.welcomeDialog = true;
    },
    onWelcomeAccept() {
      this.welcomeDialog = false;
    },
    onGiftSelect(gift) {
      this.confirmationDialogMode = "select";
      this.confirmationDialog = true;
      this.selectedGift = gift;
    },
    onGiftCancel(gift) {
      this.confirmationDialogMode = "cancel";
      this.confirmationDialog = true;
      this.selectedGift = gift;
    },
    onConfirmationAccept(gift) {
      this.confirmationDialog = false;
      console.log("gift", gift);
    },
    onConfirmationCancel(gift) {
      this.confirmationDialog = false;
      console.log("gift", gift);
    },
  },
};
</script>
