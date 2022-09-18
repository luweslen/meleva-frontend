import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

type Hotel = { nomeHotel: string, enderecoHotel: string }

export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    hotels: [] as Array<Hotel>,
  }),
  getters: {},
  actions: {
    async handleGetHotels(value: string) {
      this.hotels = [];
      const { data: { hoteisDisponiveis } } = await api.post('get-page', {
        cidadeZipCode: value,
        tokemAcesso: 'MlPR97YVfWsywUGDG6AdApqDDAb6',
        dataInicial: '18/09/2022',
        dataFinal: '20/09/2022',
      });

      this.hotels = hoteisDisponiveis;
    },
  },
});
