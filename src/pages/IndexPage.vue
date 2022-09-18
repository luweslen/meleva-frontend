<template>
  <q-page class="q-py-md bg-dark column items-center justify-start">
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-white text-primary"
    >
      <q-tab name="hotels" icon="apartment" label="Hotéis" no-caps/>
      <q-tab name="tickets" icon="airplane_ticket" label="Passagens" disable no-caps/>
    </q-tabs>
    <div class="full-width row justify-center">
      <select-city
        class="q-ma-md"
        :searched="searched"
        :loading="loading"
        @search-hotels="searchHotels"
      />
      <component class="q-ma-md" v-if="searched" :is="tab" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { useHotelsStore } from 'src/stores/hotels';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useQuasar } from 'quasar';
import Hotels from '../components/Hotels.vue';
import SelectCity from '../components/SelectCity.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Hotels, SelectCity },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const tab = ref('hotels');
    const hotelsStore = useHotelsStore();

    const searched = ref(false);
    const loading = ref(false);

    router.replace({ query: { search: tab.value } });

    async function searchHotels(value: string) {
      try {
        searched.value = true;
        loading.value = true;

        await hotelsStore.handleGetHotels(value);
      } catch (error) {
        $q.notify({
          message: 'Erro ao buscar hotéis',
          color: 'red',
        });
      } finally {
        loading.value = false;
      }
    }

    return {
      tab, searched, loading, searchHotels,
    };
  },
});
</script>
