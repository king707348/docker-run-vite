# 🐳 使用 Docker 容器化 Vite 應用程式
本指南說明如何將基於 Vite 的前端應用程式容器化，並確保在 Docker 環境中開發伺服器能正常運行。<br>
建立好後cd到該資料夾
```
    npm create vite@latest docker-run-vite -- --template vue # 例如使用 Vue 模板
    cd docker-run-vite
    npm install
```
### Create Dockerfile
建立node環境，寫進打開vue app方式
```
    # Dockerfile (開發環境)
    FROM node:18
    WORKDIR /app
    # 複製所有應用程式檔案 (會忽略 .dockerignore 中的內容)
    COPY . .
    RUN npm install
    EXPOSE 5173
    # 提醒：CMD 執行的是開發伺服器，適合 HMR 開發
    CMD ["npm", "run", "dev"]
```
### Update vite.config.js
在 Docker 容器內運行應用程式時，Vite 伺服器必須監聽所有網路接口 (0.0.0.0)，才能讓容器外部（主機）通過埠口映射來訪問。
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

參考文獻:<a href="https://deanin.com/blog/wsl-localhost-docker/">wsl-localhost-docker</a>

### Run app
最後在docker image建立且賦名，使用docker network
```
    # 1. 建置 Image
    docker build -t docker-vite .

    docker network create vite

    docker run -d -p 5173:5173 --network vite docker-vite
```
最後，在瀏覽器中訪問 http://localhost:5173/ 即可看到運行中的 Vite 應用程式。
