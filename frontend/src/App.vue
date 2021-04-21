<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Lista de Regalos de Fer y Luiso</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="id"
        ><v-icon left>{{ icons.mdiAccount }}</v-icon
        >{{ id }}</span
      >
    </v-app-bar>

    <v-main class="grey lighten-1">
      <v-container>
        <v-row>
          <template v-for="category in categories">
            <v-col :key="category" class="mt-2" cols="12">
              <strong>{{ category }}</strong>
            </v-col>

            <v-col
              v-for="gift in getCategoryGifts(category)"
              :key="gift.name"
              cols="12"
              md="4"
            >
              <GiftCard
                :gift="gift"
                :id="id"
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

      <v-snackbar
        v-model="snackbar"
      >
        Cambio guardado con éxito
        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

    </v-main>
  </v-app>
</template>

<script>
import ConfirmationDialog from "./components/ConfirmationDialog.vue";
import InvitationDialog from "./components/InvitationDialog.vue";
import GiftCard from "./components/GiftCard.vue";
import WelcomeDialog from "./components/WelcomeDialog.vue";
import { mdiAccount } from "@mdi/js";
import axios from "axios";

const API_BASE_URL = "http://3.143.179.41:3000";

export default {
  mounted() {
    this.fetch()
  },
  data: () => ({
    id: "",
    invitationDialog: true,
    welcomeDialog: false,
    confirmationDialog: false,
    confirmationDialogMode: "select",
    selectedGift: {},
    icons: {
      mdiAccount,
    },
    gifts: [],
    snackbar: false
  }),
  computed: {
    categories() {
      const categories = this.gifts.reduce((categories, gift) => {
        categories[gift.category] = true;
        return categories;
      }, {});
      return Object.keys(categories);
    },
  },
  components: {
    ConfirmationDialog,
    InvitationDialog,
    GiftCard,
    WelcomeDialog,
  },
  methods: {
    fetch() {
      axios.get(`${API_BASE_URL}/gifts`).then((response) => {
        this.gifts = response.data;
      });
    },
    getCategoryGifts(category) {
      return this.gifts.filter((gift) => gift.category === category);
    },
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
      const params = { reserved_by: this.confirmationDialogMode === 'select' ? this.id : '' }
      
      axios
        .patch(`${API_BASE_URL}/gifts/${gift._id}`, params)
        .then(() => {
          this.fetch()
          this.snackbar = true
          setTimeout(() => {
            this.snackbar = false
          }, 5000)
        });
    },
    onConfirmationCancel() {
      this.confirmationDialog = false;
    },
  },
};
</script>
