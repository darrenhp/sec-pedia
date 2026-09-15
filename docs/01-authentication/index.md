---
title: "一、身份认证 Authentication 概览"
category: "身份认证"
tags: [身份认证, 密码学, WebAuthn, OAuth, MFA]
status: published
last_updated: 2026-09-15
---

# 一、身份认证（Authentication）体系概览 🛡️

> **身份认证（Authentication, 缩写为 AuthN）** 是确定声明者真实身份的验证过程，回答的核心问题是：**「你是谁？」**（证明你的身份），与授权（Authorization, AuthZ，回答「你能访问什么」）形成安全控制的双支柱。

---

## 🗺️ 身份认证全景图谱

```mermaid
graph TD
    Auth[身份认证 Authentication] --> Factor[认证三要素]
    Factor --> WhatYouKnow[所知凭证: 密码/PIN/私钥]
    Factor --> WhatYouHave[所有凭证: 手机/硬件Token/Passkey]
    Factor --> WhatYouAre[生物特征: 指纹/人脸/虹膜]

    Auth --> Evolution[技术演进代际]
    Evolution --> Gen1[第一代: 纯明文/单向哈希密码]
    Evolution --> Gen2[第二代: 动态验证码 OTP / SMS]
    Evolution --> Gen3[第三代: 联合身份与单点登录 OAuth2 / OIDC / SAML]
    Evolution --> Gen4[第四代: 无密码时代 Passkey / FIDO2 / WebAuthn]
```
<div class="diagram-caption">图 1-1：现代身份认证知识图谱与演进代际</div>

---

## 📑 本章节知识点索引

| 知识点 | 核心技术 / 协议 | 典型机制与特点 | 安全评级与状态 |
| :--- | :--- | :--- | :--- |
| [1. 密码与哈希存储](./01-password-hashing) | Argon2id, bcrypt, PBKDF2 | 盐值 (Salt) + 慢哈希 + 内存硬度 | <span class="badge-pill status-recommended">现代基石</span> |
| [2. HOTP 算法](./02-otp-hotp) | RFC 4226, HMAC-SHA-1 | 基于事件计数的单向动态密码 | <span class="badge-pill status-caution">部分场景</span> |
| [3. TOTP 时间动态密码](./03-otp-totp) | RFC 6238, Google Auth | 基于时间步长（30s）动态密码 | <span class="badge-pill status-recommended">广泛推荐</span> |
| [4. 短信与邮箱验证码](./04-otp-sms-email) | 带外传输 (OOB) | 依赖电信 SS7 或 SMTP 通道 | <span class="badge-pill status-caution">易遭中间人/拦截</span> |
| [5. Passkey 与 WebAuthn](./05-passkey-webauthn) | W3C WebAuthn, FIDO2, CTAP2 | 公私钥挑战响应、防钓鱼无密码 | <span class="badge-pill status-recommended">最高级别推荐</span> |
| [6. Magic Link 魔法链接](./06-magic-link) | 签名 Token + 邮箱路由 | 免密临时单次登录链接 | <span class="badge-pill status-caution">依赖邮箱安全</span> |
| [7. U2F 硬件密钥](./07-u2f-hardware-token) | FIDO U2F, YubiKey, USB/NFC | 物理芯片防复制、硬件安全元件 | <span class="badge-pill status-recommended">高安全首选</span> |
| [8. OAuth 2.0 授权框架](./08-oauth2) | RFC 6749, RFC 7636 (PKCE) | 委托授权、AccessToken、刷新令牌 | <span class="badge-pill status-recommended">开放平台标准</span> |
| [9. OIDC 身份层协议](./09-oidc) | OpenID Connect Core, JWT | 在 OAuth2 之上的标准化身份断言 | <span class="badge-pill status-recommended">现代 SSO 首选</span> |
| [10. SAML 2.0 联合身份](./10-saml) | OASIS SAML 2.0, XML 签名 | 企业内网与传统 SaaS 联合登录 | <span class="badge-pill status-recommended">企业级规范</span> |
| [11. 多因素认证 MFA](./11-mfa) | NIST SP 800-63B | 组合不同维度因子，抵御凭证填充 | <span class="badge-pill status-recommended">合规强制要求</span> |
| [12. 生物识别安全](./12-biometrics) | 3D 结构光, 活体检测, 声纹 | 本地硬件比对，拒绝云端原始特征 | <span class="badge-pill status-caution">注意抗攻击度</span> |
| [13. 图灵验证 (CAPTCHA)](./13-captcha) | Cloudflare Turnstile, reCAPTCHA | 区分人机行为，抗撞库与自动化脚本 | <span class="badge-pill status-recommended">前端风控必备</span> |
