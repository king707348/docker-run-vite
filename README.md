# 🐳 [DevOps] 實作 Vite 前端專案容器化 (Dockerize Vite App)
本文件說明如何將基於 Vite 的前端應用程式容器化，並確保在 Docker 環境中開發伺服器能正常運行。

```
    npm create vite@latest docker-run-vite -- --template vue
    cd docker-run-vite
    npm install
```
### Create Dockerfile
建立node環境，寫進打開vue app方式
```
    # Dockerfile (開發環境)
    FROM node:18
    WORKDIR /app
    COPY package*.json ./   # 優先複製 package.json 以利用 Docker Layer Caching
    RUN npm install   # 安裝套件 (如果 package.json 沒變，這層會直接用快取)
    COPY . .   # 複製所有應用程式檔案 (會忽略 .dockerignore 中的內容)
    EXPOSE 5173   # 開發伺服器 Port
    CMD ["npm", "run", "dev"]   # CMD 執行的是開發伺服器，適合 HMR 開發
```

### Update vite.config.js
在 Docker 容器內運行應用程式時，Vite 伺服器必須監聽所有網路接口 (0.0.0.0)，才能讓容器外部（主機）通過埠口映射來訪問。
! vite預設localhost(127.0.0.1) 無法被外部存取，須改網路接口
```
    export default defineConfig({
        plugins: [
            vue(),
        ],
        // 加上server
        server: {
            host: "0.0.0.0",
        }
    });
```

視需求增加 .dockerignore 檔案。<br>
這對於任何 Docker 專案都是最佳實踐，可以排除不必要的檔案（如 node_modules）以加快建置速度

### Run app
最後在docker image建立且賦名，使用docker network
```
    docker build -t docker-vite .   # 建置 Image

    docker network create vite

    docker run -d -p 5173:5173 --network vite docker-vite
```
最後，在瀏覽器中訪問 http://localhost:5173/ 即可看到運行中的 Vite 應用程式。
