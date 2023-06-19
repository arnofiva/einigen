import Color from "@arcgis/core/Color";
import { whenOnce } from "@arcgis/core/core/reactiveUtils";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-loader";

// setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.77/assets");

// const params = new URLSearchParams(document.location.search.slice(1));
// const someParam = params.has("someParam");

IdentityManager.registerOAuthInfos([
  new OAuthInfo({
    appId: "KojZjH6glligLidj",
    popup: true,
    popupCallbackUrl: `${document.location.origin}${document.location.pathname}oauth-callback-api.html`,
  }),
]);

(window as any).setOAuthResponseHash = (responseHash: string) => {
  IdentityManager.setOAuthResponseHash(responseHash);
};

const map = new WebScene({
  portalItem: {
    id: "2f1e3813919043d08a31b2cdd85190ae",
  },
});

const view = new SceneView({
  container: "viewDiv",
  map,
  qualityProfile: "high",
});

map.when().then(() => {
  map.ground.surfaceColor = new Color([220, 220, 220]);
});

map.loadAll().then(() => {
  const slides = map.presentation.slides;
  const slide = slides.getItemAt(Math.floor(Math.random() * slides.length));
  slide.applyTo(view, { animate: false });
});

whenOnce(() => !view.updating).then(() => {
  const loader = document.getElementById("loader");
  loader?.parentElement?.removeChild(loader);
});

(window as any)["view"] = view;
