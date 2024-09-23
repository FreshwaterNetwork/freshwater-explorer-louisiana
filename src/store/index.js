import { defineStore } from 'pinia';
import { markRaw, toRaw } from 'vue';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Legend from '@arcgis/core/widgets/Legend.js';
import Expand from '@arcgis/core/widgets/Expand.js';

export const useMapStore = defineStore('mapStore', () => ({
  // esri login logic
  // async esriLogin() {
  //   const info = new OAuthInfo({
  //     appId: "Tg43YMEjGKSxr1un",
  //     popup: false,
  //     expiration: 20160, // 14 days in mins
  //   });
  //   IdentityManager.registerOAuthInfos([info]);
  //   try {
  //     const credentials = await IdentityManager.getCredential(
  //       info.portalUrl + "/sharing",
  //       {
  //         oAuthPopupConfirmation: false,
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     alert(
  //       "There was a problem connecting to the site. Please contact the Enterprise Helpdesk to gain access."
  //     );
  //   }
  // },

  // selected web map layer for visibility
  // selectedLayer: '1920149df6f-layer-9',

  // attributes for feature layer map clicks
  // attributes: ref([]),

  // model for toggling between single and multiple fireshed selections
  // selectionType: 'single',

  // web map

  webMap: null,
  tncHillshadeMapId: 'd22aed9a4acb4bc8ae8f2141732af496',
  createWebMap() {
    let webMap = {};
    return (webMap = markRaw(
      new WebMap({
        portalItem: {
          id: '21bf1cdbe96e4c3fbea6acdf69f46895',
        },
        basemap: {
          portalItem: {
            id: this.tncHillshadeMapId,
          },
        },
      })
    ));
  },

  // map view
  mapView: null,
  createMapView() {
    let mapView = {};
    return (mapView = markRaw(
      new MapView({
        map: this.webMap,
        center: [-92.507471, 31.356186],
        zoom: 6,
        container: 'map',
        popupEnabled: false,
      })
    ));
  },

  layers: [],
  sublayers: [],

  getLayers() {
    this.webMap.layers.forEach((layer) => {
      layer.layers.items.forEach((item) => {
        this.layers.push({
          expansionLabel: item.title,
          sub: [],
        });

        this.sublayers.push(item.layers.items.reverse());
      });
    });

    this.layers = this.layers.reverse();

    this.layers.forEach((l) => {
      this.sublayers.forEach((sublayer) => {
        sublayer.forEach((s) => {
          let sLay = toRaw(s);

          if (sLay.parent.title == l.expansionLabel) {
            l.sub.push({
              title: sLay.title,
              id: sLay.id,
            });
          }
        });
      });
    });
  },

  // set web map layer visibility
  setLayerVisibility(id) {
    this.webMap.layers.forEach((layer) => {
      layer.layers.forEach((l) => {
        l.layers.forEach((s) => {
          if (s.id == id) {
            s.visible = !s.visible;
          }
        });
      });
    });
  },

  // create legend
  legend: null,
  createLegend() {
    let legend = {};
    return (legend = markRaw(
      new Legend({
        label: 'Freshwater Explorer',
        view: this.mapView,
      })
    ));
  },

  // create expand for legend
  expand: null,
  createExpand() {
    let expand = {};
    return (expand = markRaw(
      new Expand({
        view: this.mapView,
        content: this.legend,
        expanded: true,
      })
    ));
  },
}));
