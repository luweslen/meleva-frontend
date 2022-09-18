<template>
  <div>
    <span class=" text-h4 text-white">Resultados</span>
    <q-card
      class="q-mt-md full-width card-hotels bg-secondary"
      v-for="hotel in store.hotels"
      :key="hotel.nomeHotel"
    >
      <q-card-section
        :class="`full-width column justify-center`"
      >
        <span class="q-mb-md text-h6 text-white">{{hotel.nomeHotel}}</span>
        <span class="q-mb-md text-white" v-if="hotel.enderecoHotel">{{hotel.enderecoHotel}}</span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { useHotelsStore } from 'src/stores/hotels';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotelsComponent',
  setup() {
    const store = useHotelsStore();

    return { store };
  },
});
</script>

<style lang="scss" scoped>
.card-hotels {
  max-width: 500px;
}
</style>
