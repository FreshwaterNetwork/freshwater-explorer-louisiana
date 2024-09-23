<template>
  <div class="q-pa-md">
    <div v-for="group in ms.layers" :key="group">
      <q-expansion-item :label="group.expansionLabel">
        <div v-for="l in group.sub" :key="l">
          <layer-group-checkbox :layer="l"></layer-group-checkbox>
        </div>
      </q-expansion-item>
    </div>
  </div>
</template>
<script setup>
import { useMapStore } from '../store/index';
import { computed } from 'vue';
import layerGroupCheckbox from './LayerGroupCheckbox.vue';
import CircularProgress from './CircularProgress.vue';

// get map store
const ms = useMapStore();

// define radio model
// const selectedLayer = computed({
//   get: () => ms.selectedLayer,
//   set: (value) => (ms.selectedLayer = value),
// });
//define radio layers
// const layerOptions = [
//   {
//     label: 'Combined Opportunities',
//     value: '1920149df6f-layer-9',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
//   {
//     label: 'Air Quality',
//     value: '1920153cf07-layer-11',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
//   {
//     label: 'Biodiversity',
//     value: '192015f4237-layer-14',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
//   {
//     label: 'Carbon',
//     value: '1920155c83d-layer-12',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
//   {
//     label: 'Communities',
//     value: '19201509687-layer-10',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
//   {
//     label: 'Water Quality',
//     value: '19201582a7c-layer-13',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
// ];
// define selection options
// const selectionOptions = [
//   {
//     label: 'Single',
//     value: 'single',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
//   {
//     label: 'Multiple',
//     value: 'multiple',
//     checkedIcon: 'task_alt',
//     uncheckedIcon: 'panorama_fish_eye',
//   },
// ];
// selection type model
// const selectionType = computed({
//   get() {
//     return ms.selectionType;
//   },
//   set(value) {
//     ms.selectionType = value;
//   },
// });
// // attributes
// const attributes = computed(() => {
//   return ms.attributes;
// });
// const forest = computed(() => {
//   if (attributes.value.length === 1) {
//     const hectares = ms.attributes[0].Area_HA.toLocaleString('en-US');
//     const PerDryForest = ms.attributes[0].PerDryForest;
//     const PerConifer = ms.attributes[0].PerConifer;
//     const PerDryForestAllFed = ms.attributes[0].PerDryForestAllFed;
//     const PerDryForestUSFS = ms.attributes[0].PerDryForestUSFS;
//     const PerDryForestOtherFed = ms.attributes[0].PerDryForestOtherFed;
//     const PerDryForestTribal = ms.attributes[0].PerDryForestTribal;
//     const PerDryForestState = ms.attributes[0].PerDryForestState;
//     const PerDryForestLocal = ms.attributes[0].PerDryForestLocal;
//     const PerDryForestPrivate = ms.attributes[0].PerDryForestPrivate;
//     const PerDryForestOther = ms.attributes[0].PerDryForestOther;

//     return {
//       hectares,
//       PerDryForest,
//       PerConifer,
//       PerDryForestAllFed,
//       PerDryForestUSFS,
//       PerDryForestOtherFed,
//       PerDryForestState,
//       PerDryForestTribal,
//       PerDryForestPrivate,
//       PerDryForestLocal,
//       PerDryForestOther,
//     };
//   }
//   if (attributes.value.length > 1) {
//     // get total hecacres
//     let hectares = 0;
//     attributes.value.forEach((a) => {
//       hectares += a.Area_HA;
//     });
//     // figure out percent cover based on total hectares
//     let PerDryForest = 0;
//     attributes.value.forEach((a) => {
//       PerDryForest += a.PerDryForest * a.Area_HA;
//     });
//     PerDryForest = PerDryForest / hectares;

//     return {
//       hectares,
//       PerDryForest,
//     };
//   }
// });
// const outcomes = computed(() => {
//   const array = ms.attributes;
//   const keysToCheck = [
//     'Communities',
//     'Carbon',
//     'AirQuality',
//     'Water',
//     'Biodiversity',
//   ];
//   const resultSet = array.reduce((acc, obj) => {
//     keysToCheck.forEach((key) => {
//       if (obj[key] > 0) {
//         if (key === 'AirQuality') {
//           acc.add('Air Quality');
//         } else if (key === 'Water') {
//           acc.add('Water Quality');
//         } else {
//           acc.add(key);
//         }
//       }
//     });
//     return acc;
//   }, new Set());

//   const resultArray = Array.from(resultSet).sort();
//   const concatenatedString = resultArray.join(', ');
//   const itemCount = resultArray.length;
//   const percent = (itemCount / 5) * 100;

//   return {
//     concatenatedString,
//     itemCount,
//     percent,
//   };
// });
</script>
