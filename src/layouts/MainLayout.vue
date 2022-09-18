<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-pa-md row justify-center" elevated>
      <img src="../assets/logo.svg" alt="MeLeva">
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    return {};
  },
});
</script>
