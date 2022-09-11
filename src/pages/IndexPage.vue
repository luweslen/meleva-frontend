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
      <select-city class="q-ma-md" :searching="searching" @search-hotels="searchHotels"/>
      <component class="q-ma-md" v-if="searching" :is="tab" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import Hotels from '../components/Hotels.vue';
import SelectCity from '../components/SelectCity.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Hotels, SelectCity },
  setup() {
    const router = useRouter();
    const tab = ref('hotels');

    const searching = ref(false);

    router.replace({ query: { search: tab.value } });

    function searchHotels() {
      searching.value = true;
      console.log('search');
    }

    return { tab, searching, searchHotels };
  },
});
</script>
