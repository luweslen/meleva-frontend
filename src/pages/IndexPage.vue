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

    <!-- Entrada de dados -->

    <!-- Componentes para exibição de dados -->
    <component :is="tab" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import Hotels from '../components/Hotels.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { hotels: Hotels },
  setup() {
    const router = useRouter();
    const tab = ref('hotels');

    router.replace({ query: { search: tab.value } });

    return { tab };
  },
});
</script>
