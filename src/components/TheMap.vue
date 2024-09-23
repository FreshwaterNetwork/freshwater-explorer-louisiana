<template><div id="map" ref="map"></div></template>

<script setup>
import { onMounted, resolveComponent } from 'vue';
import { useMapStore } from '../store/index';

// bring in map store
const ms = useMapStore();

onMounted(() => {
  // create web map
  ms.webMap = ms.createWebMap();

  // create the map view
  ms.mapView = ms.createMapView();

  // layer vis, feature layer, legend, and expand
  ms.mapView.when(function () {
    ms.getLayers();
    // create legend
    ms.legend = ms.createLegend();
    // expand item for legend
    ms.expand = ms.createExpand();
    // add expand to mapView
    ms.mapView.ui.add(ms.expand, 'bottom-left');
  });
});
</script>
<style>
@import 'https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css';

#map {
  flex: 1;
  min-height: calc(100vh - 225px);
  height: calc(100vh - 50px);
  width: calc(100vw - 450px);
  position: fixed;
}
.esri-legend {
  width: fit-content;
}
h3 {
  line-height: 2rem !important;
}
</style>
