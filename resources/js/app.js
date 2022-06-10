import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./views/App.vue";
import "./bootstrap";

library.add(faPlus);
library.add(faTrash);

createApp(App).component("fa-icon", FontAwesomeIcon).mount("#app");
