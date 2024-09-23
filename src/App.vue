<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title
          >Freshwater Network
          <span class="text-weight-light"
            >| Louisiana Freshwater Explorer</span
          ></q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      behavior="desktop"
      side="left"
      elevated
      :width="450"
    >
      <!-- drawer content -->
      <TheLeftPanel></TheLeftPanel>
    </q-drawer>

    <q-page-container><TheMap></TheMap></q-page-container>
  </q-layout>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import TheMap from './components/TheMap.vue';
import { useMapStore } from './store/index';
import TheLeftPanel from '../src/components/TheLeftPanel.vue';

// esri login
const ms = useMapStore();
// ms.esriLogin();

const $q = useQuasar();
const smallScreen = computed(() => $q.screen.lt.sm);
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.text-h1 {
  font-size: 20px !important;
  font-weight: 300 !important;
  line-height: 2rem !important;
}
.text-h2 {
  font-size: 16px !important;
  font-weight: 300 !important;
  line-height: 1.5rem !important;
}
.text-h3 {
  font-size: 14px !important;
  font-weight: 300 !important;
  line-height: 1.5rem !important;
}
@media screen and (max-width: 700px) {
  .q-splitter__before,
  .q-splitter__after {
    overflow: hidden !important;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__mask--expanded {
    display: none;
  }
  .esri-view-width-xsmall .esri-expand--auto .esri-expand__container--expanded {
    top: 100px;
  }
  .esri-view-width-xsmall
    .esri-expand--auto
    .esri-expand__container--expanded
    .esri-expand__panel {
    padding: 2px;
  }
}
</style>
