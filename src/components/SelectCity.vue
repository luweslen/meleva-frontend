<template>
  <q-card class="my-card bg-secondary" :class="{ searching }" >
    <q-card-section
      :class="`full-width ${searching ? 'column' : 'row'} justify-center`"
    >
      <q-input
        :class="`q-mr-md ${searching ? 'q-mb-md col' : 'q-mr-md  col-7'}`"
        v-model="city"
        dark
        color="white"
        label="Cidade"
      />
      <q-btn
        :class="`${searching ? 'col-11' : 'q-mr-md col-4'}`"
        color="primary"
        label="Pesquisar"
        @click="searchHotels"
        :disable="!(!!city)"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  props: {
    searching: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const city = ref('');

    function searchHotels() {
      if (city.value) {
        emit('search-hotels', city.value);
      }
    }

    return { city, searchHotels };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 720px;

  &.searching {
    max-width: 300px;
    height: 150px;
  }
}
</style>
