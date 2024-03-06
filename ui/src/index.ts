import { definePlugin } from "@halo-dev/console-shared";
import HomeView from "./views/HomeView.vue";
import { IconPlug } from "@halo-dev/components";
import { markRaw } from "vue";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        // path: "/example",
        path: "/todos",
        name: "Example",
        component: HomeView,
        meta: {
          // title: "示例页面",
          title: "Todo List",
          searchable: true,
          menu: {
            // name: "示例页面",
            name: "Todo List",
            group: "工具",
            // group: "示例分组",
            icon: markRaw(IconPlug),
            priority: 0,
          },
        },
      },
    },
  ],
  extensionPoints: {},
});
