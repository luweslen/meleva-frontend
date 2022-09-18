<template>
  <q-card class="my-card bg-secondary" :class="{ searched }" >
    <q-card-section
      :class="`full-width ${searched ? 'column' : 'row'} justify-center`"
    >
      <q-select
        :class="`q-mr-md ${searched ? 'q-mb-md col' : 'q-mr-md  col-7'}`"
        v-model="city"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        emit-value
        map-options
        color="white"
        label="Cidade"
        dark
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Nenhum resultado
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-btn
        :class="`${searched ? 'col-11' : 'q-mr-md col-4'}`"
        color="primary"
        label="Pesquisar"
        @click="searchHotels"
        :disable="!(!!city)"
        :loading="loading"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  props: {
    searched: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const city = ref('');
    const optionsBase = [
      { label: 'Belém', value: 'BEL' },
      { label: 'Belo Horizonte', value: 'CNF' },
      { label: 'Brasilia', value: 'BSB' },
      { label: 'Campinas', value: 'VCP' },
      { label: 'Curitiba', value: 'CWB' },
      { label: 'Fortaleza', value: 'FOR' },
      { label: 'Londrina', value: 'LDB' },
      { label: 'Porto Alegre', value: 'POA' },
      { label: 'Rio de Janeiro', value: 'GIG' },
      { label: 'Salvador', value: 'SSA' },
      { label: 'Vitória', value: 'VIX' },
    ];
    const options = ref(optionsBase);

    function searchHotels() {
      if (city.value) {
        emit('search-hotels', city.value);
      }
    }

    function filterFn(val, update) {
      update(() => {
        const needle = val.toLowerCase();
        options.value = optionsBase.filter((v) => v.label.toLowerCase().indexOf(needle) > -1);
      });
    }

    return {
      city, searchHotels, filterFn, options,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 720px;

  &.searched {
    max-width: 300px;
    height: 150px;
  }
}
</style>
