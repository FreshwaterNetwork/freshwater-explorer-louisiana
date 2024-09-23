<template>
  <q-checkbox
    class="q-ml-lg"
    checked-icon="task_alt"
    unchecked-icon="panorama_fish_eye"
    :label="layer.title"
    v-model="model"
    toggle-order="ft"
    @update:model-value="subVis(layer)"
  ></q-checkbox>
</template>
<script setup>
import { ref } from 'vue';
import { useMapStore } from '../store/index';
const mapStore = useMapStore();

const props = defineProps({
  layer: Object,
});

const model = ref(false);

function subVis(l) {
  mapStore.setLayerVisibility(l.id);
}
</script>
