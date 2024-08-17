import renderCategories from "./category/renderCategories.js";
import * as events from "./events";

/**
 * This is where the app is initialized.
 * All the are rendered and then the events are initialized when the DOM is ready.
 */

document.addEventListener("DOMContentLoaded", async () => {
  await renderCategories();
  events.init();
});
