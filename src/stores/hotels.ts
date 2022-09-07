import { defineStore } from 'pinia';

export const useHotelsStore = defineStore('counter', {
  state: () => ({
    hotels: [],
  }),
  getters: {},
  actions: {
    handleGetHotels() {
      console.log('Pegar hotéis');
    },
  },
});
