# React 最新版本

### 安装环境

```js
yarn add react@alpha react-dom@alpha @types/react @types/react-dom -S
yarn add vite typescript @vitejs/plugin-react-refresh -D
```

### 配置文件

```js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh],
});
```
