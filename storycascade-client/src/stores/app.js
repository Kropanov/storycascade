// Utilities
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {},
  }),
  actions: {
    setUser(value) {
      this.user = { ...this.user, value };
    },
  },
});
