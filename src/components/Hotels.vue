<template>
  <div>
    <span class=" text-h4 text-white">Resultados</span>
    <q-card class="q-mt-md full-width card-hotels bg-secondary" >
      <q-card-section
        :class="`full-width column justify-center`"
      >
        <span class="q-mb-md text-h6 text-white">Hotel 1</span>
        <span class="q-mb-md text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quo?
          Aliquam labore eos obcaecati. Ducimus totam ipsam quam!
          Rerum facilis, voluptatibus ipsum laborum molestiae vero possimus hic?
          Blanditiis, sapiente animi?
        </span>
        <q-btn
          color="primary"
          label="Saiba mais"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotelsComponent',
});
</script>

<style lang="scss" scoped>
.card-hotels {
  max-width: 500px;
}
</style>
