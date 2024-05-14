import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    showAlert: false,
    type: "",
    text: "",
  }),
  actions: {
    notifyAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3500);
    },
    notifyAlertCreated() {
      this.type = "success";
      this.text = "Nota criada com sucesso!";
      this.notifyAlert();
    },
    notifyAlertDeleted() {
      this.type = "warning";
      this.text = "Nota deletada com sucesso!";
      this.notifyAlert();
    },
    notifyAlertUpdated() {
      this.type = "success";
      this.text = "Nota alterada com sucesso!";
      this.notifyAlert();
    },
    notifyAlertDone() {
      this.type = "info";
      this.text = "Nota finalizada com sucesso!";
      this.notifyAlert();
    },
  },
});
