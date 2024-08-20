import searchProducts from "./search";
import createMenu from "./menu";

/**
 * The events directory contains all the event listeners for the app,
 * when an element needs and event listener, a file with the event needs to be created
 * and the event imported here to be initialized in the index.js.
 */

function init() {
  searchProducts();
  createMenu();
}

export { init };
