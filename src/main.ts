import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routes/index";

//scope animejs to the app
import "primeicons/primeicons.css";
import Severniy from "./presets/noir.ts";
import PrimeVue from "primevue/config";
import {
  InputText,
  Button,
  Password,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Badge,
  Avatar,
  AvatarGroup,
  Divider,
  Card,
  ScrollPanel,
} from "primevue";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Severniy,
    options: {
      cssLayer: false,
      darkModeSelector: ".my-app-dark",
    },
  },
});
app.use(router);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Password", Password);
app.component("Image", Image);
app.component("Tabs", Tabs);
app.component("TabList", TabList);
app.component("Tab", Tab);
app.component("TabPanels", TabPanels);
app.component("TabPanel", TabPanel);
app.component("Accordion", Accordion);
app.component("AccordionPanel", AccordionPanel);
app.component("AccordionHeader", AccordionHeader);
app.component("AccordionContent", AccordionContent);
app.component("Badge", Badge);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("Divider", Divider);
app.component("Card", Card);
app.component("ScrollPanel", ScrollPanel);
app.mount("#app");
