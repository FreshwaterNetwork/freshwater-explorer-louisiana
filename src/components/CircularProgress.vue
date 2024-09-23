<template>
  <div class="row no-wrap items-center q-mt-sm q-mb-sm">
    <div>
      <q-circular-progress
        show-value
        font-size="12px"
        :value="value"
        size="lg"
        :thickness="0.22"
        color="primary"
        track-color="grey-3"
        class="q-mx-sm"
        reverse>
        {{ valueLabel }}
      </q-circular-progress>
    </div>
    <div style="display: flex; align-items: center; height: 40px">
      {{ label }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  value: Number,
  valueLabel: String,
  label: String,
});
</script>
