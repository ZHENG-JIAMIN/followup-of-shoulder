# 使用 Node.js 官方镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json (如果存在)
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

RUN npm run build

# 暴露端口 3001（Next.js 默认的端口）
EXPOSE 3001

# 定义运行命令
CMD ["npm", "run", "start"]
