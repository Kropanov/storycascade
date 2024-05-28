// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {},
    isFooterVisible: true,
  }),
  actions: {
    setUserData(value) {
      this.user = { ...this.user, value };
    },
    clearUserData() {
      this.user = {};
    },
    hideFooter() {
      this.isFooterVisible = false;
    },
    showFooter() {
      this.isFooterVisible = true;
    },
  },
});
