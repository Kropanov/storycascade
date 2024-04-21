// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {},
  }),
  actions: {
    setUserData(value) {
      this.user = { ...this.user, value };
    },
    clearUserData() {
      this.user = {};
    },
  },
});
