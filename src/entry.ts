import { App } from "vue";
import TSXButton from "./components/TSXButton";

// 导出单独组件
export { TSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(TSXButton.name, TSXButton);
  },
};
