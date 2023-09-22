# docker vite

建立好後cd到該資料夾
```
    cd docker-run-vite
```
### Create Dockerfile
建立node環境，寫進打開vue app方式
```
    FROM node:18
    WORKDIR /app
    COPY . .
    RUN npm install
    EXPOSE 5173
    CMD ["npm", "run", "dev"]
```
### Update vite.config.js
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
參考文獻:<a href="https://deanin.com/blog/wsl-localhost-docker/">wsl-localhost-docker</a>

### Run app
最後在docker image建立且賦名，使用docker network
```
    docker build -t docker-vite .

    docker network creste vite

    docker run -d -p 5173:5173 --network vite docker-vite
```
最後在 http://localhost:5173/ 跑初畫面就成功了
