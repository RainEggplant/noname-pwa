# 允许混合内容

## 背景

出于安全考虑，大多数浏览器不允许从通过 HTTPS 加载的页面发起未经加密的连接（如 HTTP, WebSocket 连接），而只允许发起经过加密的连接（如 HTTPS, WebSocket Secure 连接）。经过加密的和未经加密的连接同时存在的情形称为 `mixed content`（混合内容）。

遗憾的是，无名杀官方提供的联机大厅的地址是 `ws://47.99.105.222:8080`（官方的代码省略了协议名称 `ws://` 和端口号 `:8080`），而它采用的就是未经加密的 WebSocket（简称为 ws）连接。

如果无名杀网页本身是通过 HTTP 加载的，那么访问官方的联机大厅是没有问题的。但是，如今大多数网站都采用了 HTTPS，包括本项目提供的 [网页版地址](https://raineggplant.github.io/noname-pwa)。若直接访问联机大厅，通常则会被浏览器的安全策略阻止。

尽管我们仍旧呼吁您尽可能使用安全的经过加密的连接（因此我们将 wss 设置为了默认协议，如果联机地址不指明协议和端口号，例如 `server.com`，则自动视为 `wss://server.com:443`），但如果您必须使用未经加密的连接（例如官方的联机大厅），则请参考以下解决办法。

## 解决办法

### A. 修改浏览器的安全策略

#### 电脑端

请参考 [在浏览器中启用混合内容](https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=zh-cn) 。

#### 移动端

##### 基于 Chromium 的浏览器

在浏览器地址栏输入 `chrome://flags`，找到 `Insecure origins treated as secure` 设置（标签为 `#unsafely-treat-insecure-origin-as-secure`），启用该项并填入您需要连接的服务器的地址。注意地址需要包含协议和端口号，例如 `ws://47.99.105.222:8080` 。

### B. 在 HTTP 上运行无名杀网页版

如背景中所说，此时发起未经加密的连接不会被阻止。但如果在 HTTP 上运行站点，可能就无法被识别为 PWA 应用了。
