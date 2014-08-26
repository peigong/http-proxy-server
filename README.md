# HTTP反向代理服务器 #

## 部署服务的目录结构 ##

部署服务需要的目录结构如下：

- **config：**服务的配置目录。
- **proxy：**服务的软链接目录。
- **release：**版本发布目录。

**建议：**可以部署在目标服务器的`/home/localad/http-proxy-server`目录下。

## 服务部署的方法 ##

### 克隆和部署 ###

使用GIT克隆项目代码：

	cd /home/localad/http-proxy-server/release
	git clone https://github.com/localad/http-proxy-server.git http-proxy-server-{版本号} -b {版本号}

### 建立软连接 ###

	rm -rf /home/localad/http-proxy-server/proxy
	ln -s /home/localad/http-proxy-server/release/http-proxy-server-{版本号} /home/localad/http-proxy-server/proxy

第一次部署时，需要复制系统配置文件，并设置：

	cp -r /home/localad/http-proxy-server/release/http-proxy-server-{版本号}/config /home/localad/http-proxy-server

### 启动和停止服务 ###

进入`proxy/bin`目录，可以使用以下命令：

- `sh ./http-proxy-server.sh start`：启动
- `sh ./http-proxy-server.sh stop`：停止
- `sh ./http-proxy-server.sh restart`：重启

## URL拦截的限制 ##

- 只能是HTTP协议
- 只能是80端口
- HOST与路径必须用`/`连接。