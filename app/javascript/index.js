import renderCategories from "./category/renderCategories.js";
import * as events from "./events";

document.addEventListener("DOMContentLoaded", async () => {
  await renderCategories();
  events.init();
});
