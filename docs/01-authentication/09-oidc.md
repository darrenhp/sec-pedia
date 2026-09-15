---
title: "OpenID Connect (OIDC) 身份层协议"
category: "身份认证/单点登录"
tags: [OIDC, OpenID-Connect, ID-Token, JWT, SSO, OAuth2]
status: published
last_updated: 2026-09-15
---

# OpenID Connect (OIDC) 身份层协议 🪪

## 1. 概述（What）

**OpenID Connect（OIDC）** 是构建在 **OAuth 2.0 授权框架之上的身份认证层协议（Identity Layer）**。OAuth 2.0 解决的是授权问题（"你能读取照片吗"），而 OIDC 通过引入经过密码学签名的 **ID Token（JSON Web Token, JWT）** 与标准化的 `UserInfo` 端点，彻底规范了身份认证（"你是谁"），实现了跨域的单点登录（SSO）。

- **核心解决问题**：终结了以往各大厂商基于 OAuth 2.0 各自为政拼凑私有 `get_user_info` 接口的乱象，为全互联网提供了一致的、防篡改的通用身份声明规范。
- **典型应用场景**：企业内部统一单点登录（Okta, Keycloak, Auth0, Authing）、Google / Apple 联合登录、Kubernetes 针对云身份提供商的 RBAC 绑定。

---

## 2. 原理详解（How it works）

OIDC 对 OAuth 2.0 进行了精准的三大扩展：
1. **强制引入 `openid` scope**：客户端请求必须在 `scope` 参数中包含 `openid`。
2. **下发规范的 ID Token**：授权服务器颁发的响应中必须包含一个经非对称签名（JWS）的 ID Token。
3. **元数据发现协议（Discovery）**：通过 `/.well-known/openid-configuration` 端点自描述公钥集（JWKS）、颁发者（Issuer）及各端点 URL。

### ID Token 核心声明结构（Claims）
```json
{
  "iss": "https://auth.sec-pedia.org",       // 颁发者 (Issuer)
  "sub": "usr_99812736",                    // 唯一主体用户 ID (Subject)
  "aud": "my-client-app-id",                // 受众客户端 ID (Audience)
  "exp": 1789452000,                        // 过期时间戳 (Expiration)
  "iat": 1789448400,                        // 签发时间戳 (Issued At)
  "nonce": "n-0S6_WzA2Mj",                  // 防重放随机数
  "email": "alice@sec-pedia.org",           // 用户邮箱
  "email_verified": true                    // 邮箱是否已核实
}
```

### OIDC 登录认证交互全流程

```mermaid
sequenceDiagram
    autonumber
    actor User as 用户
    participant App as 客户端应用 (RP)
    participant OIDC as 身份提供商 (OP / IdP)

    User->>App: 点击"使用企业 SSO / Google 登录"
    App->>App: 生成随机 state 与 nonce (防重放)
    App->>OIDC: 302 重定向至 /authorize?response_type=code&scope=openid email profile&client_id=...&nonce=...
    OIDC-->>User: 渲染身份认证表单 (MFA / 密码)
    User->>OIDC: 完成身份核验
    OIDC-->>App: 302 重定向回调至 redirect_uri?code=AUTH_CODE&state=...

    rect rgb(240, 248, 255)
        Note over App,OIDC: 后台安全信道换取令牌
        App->>OIDC: POST /token (携带 code, client_id, client_secret)
        OIDC-->>App: 返回 { id_token, access_token, expires_in }
    end

    rect rgb(255, 248, 220)
        Note over App: 客户端自主验签 (无需再次请求网络)
        App->>App: 提取 OIDC Provider 缓存的 JWKS 公钥
        App->>App: 验证 ID Token 签名有效性
        App->>App: 严格校验 iss == OP_URL, aud == client_id, exp > now(), nonce == original_nonce
    end
    App-->>User: 认证通过，建立本地用户登录态
```
<div class="diagram-caption">图 1-22：OIDC 基于授权码模式换取并本地校验 ID Token 全时序图</div>

> **图注说明**：客户端拿到 ID Token 后，借助 OIDC 提供的公钥（JWKS）在本地即可零延迟完成数学验签与声明核对，大幅减轻了集中认证网关的查询并发压力。

---

## 3. 协议与标准（Protocols & Standards）

| 规范 | 制定组织 | 年份 | 核心定位 |
| :--- | :--- | :--- | :--- |
| **OpenID Connect Core 1.0** [1] | OpenID Foundation | 2014 | 核心协议，定义了 ID Token 规范与三大流程（授权码、隐式、混合） |
| **OpenID Connect Discovery 1.0** [2] | OpenID Foundation | 2014 | 定义 `/.well-known/openid-configuration` 自动发现标准 |
| **RFC 7517 (JWK / JWKS)** [3] | IETF | 2015 | JSON Web Key 结构标准，定义公钥旋转与公布格式 |

---

## 4. 发展历史（Timeline）

```mermaid
timeline
    title 开放身份认证发展脉络
    2005 : OpenID 1.0 诞生 : 早期基于 XML 与自定义重定向，极度繁琐
    2007 : OpenID 2.0 推广 : 受到各大极客网站支持，但与现代 RESTful/JSON 架构格格不入
    2012 : OAuth 2.0 确立 : 开发者纷纷将 OAuth 滥用为认证协议，引发严重安全混乱
    2014 : OpenID Connect 1.0 正式发布 : 完美将 OAuth 2.0 与 JWT 融合，成为互联网 SSO 绝对霸主
```
<div class="diagram-caption">图 1-23：OpenID 走向现代化 OIDC 的历史飞跃</div>

---

## 5. 优缺点与安全性分析

### 优点
- **认证与授权职责清晰分离**：ID Token 专用于给客户端确认"你是谁"；Access Token 专用于给资源服务器决定"你能做什么"。
- **防伪造与无状态验签**：基于不对称加密签名，客户端本地秒级验签，不占用集中数据库连接。

### 安全弱点与配置大忌
- **混淆代理攻击（Confused Deputy Problem）**：若客户端仅检查签名而**遗漏校验 `aud`（受众）**，恶意第三方可用自己申请的同平台合法 ID Token 伪造身份登录受害者账户。**对策**：代码层强制断言 `id_token.aud === client_id`。
- **遗漏 `nonce` 校验导致重放**：**对策**：在请求时注入高熵随机 `nonce`，并验证 ID Token 中回传的 `nonce` 声明完全一致。
- **当前推荐状态**：<span class="badge-pill status-recommended">强烈推荐（SSO 首选）</span>。现代 Web、移动端、SaaS 多租户身份网关的标准基石。

---

## 6. 关联知识点（Related）

- **底层承载**：[OAuth 2.0 授权框架](./08-oauth2)（OIDC 的基础底座）。
- **企业传统标准**：[SAML 2.0 联合身份](./10-saml)（老牌基于 XML 的企业 SSO 方案）。
- **数据结构**：[Session / JWT / Cookie 安全](/03-access-control/03-session-jwt-cookie)。

---

## 7. 参考资料（References）

[1] OpenID Foundation. OpenID Connect Core 1.0 incorporating errata set 1.  
https://openid.net/specs/openid-connect-core-1_0.html

[2] OpenID Foundation. OpenID Connect Discovery 1.0.  
https://openid.net/specs/openid-connect-discovery-1_0.html

[3] IETF. RFC 7517: JSON Web Key (JWK).  
https://datatracker.ietf.org/doc/html/rfc7517
