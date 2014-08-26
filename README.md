# 广告拦截重定向的HTTP反向代理服务器 #

## 部署服务的目录结构 ##

部署服务需要的目录结构如下：

- **proxy：**服务的软链接目录。
- **release：**版本发布目录。

**建议：**可以部署在目标服务器的`/home/http-proxy-server`目录下。

## 服务部署的方法 ##

### 部署代码 ###

将需要部署的全部代码打包部署在`release/http-proxy-server-{版本号}`目录。

### 建立软连接 ###

	rm -rf /home/http-proxy-server/proxy
	ln -s /home/http-proxy-server/release/http-proxy-server-{版本号} home/http-proxy-server/proxy

### 启动和停止服务 ###

进入`proxy`目录，可以使用以下命令：

- `sh ./server.sh start`：启动
- `sh ./server.sh stop`：停止
- `sh ./server.sh restart`：重启

## 拦截URL的限制 ##

- 只能是HTTP协议
- 只能是80端口
- HOST与路径必须用`/`连接。