---
title: "二、数据保护 Data Protection 概览"
category: "数据保护"
tags: [数据保护, 密码学, 对称加密, 非对称加密, TLS, PKI, 差分隐私]
status: published
last_updated: 2026-09-15
---

# 二、数据保护（Data Protection）体系概览 🛡️

> **数据保护（Data Protection）** 涵盖密码学算法、通信传输安全、密钥全生命周期托管与隐私计算技术，旨在捍卫数据在**静态存储（Data at Rest）**、**动态传输（Data in Transit）** 与 **计算使用（Data in Use）** 三大态下的机密性（Confidentiality）、完整性（Integrity）与不可抵赖性（Non-repudiation）。

---

## 🗺️ 数据保护核心架构全景

```mermaid
graph TD
    DP[数据保护 Data Protection] --> Rest[静态数据保护 (At Rest)]
    Rest --> Symm[对称加密: AES-256-GCM / ChaCha20]
    Rest --> KeyMgmt[密钥托管: KMS 信封加密 / HSM 硬件隔离]
    Rest --> Anonym[隐私技术: 动态脱敏 / 差分隐私]

    DP --> Transit[传输数据保护 (In Transit)]
    Transit --> TLS[传输层安全: TLS 1.3 / HTTPS]
    Transit --> PKI[信任体系: PKI / X.509 证书 / OCSP]
    Transit --> E2EE[端到端加密: Signal 双棘轮协议]

    DP --> CryptoPrimitives[密码学基础原语 (Primitives)]
    CryptoPrimitives --> Asymm[非对称算法: RSA-4096 / ECC Curve25519]
    CryptoPrimitives --> HashSig[哈希与签名: SHA-256 / HMAC / Ed25519]
```
<div class="diagram-caption">图 2-1：数据保护三大状态与现代密码学架构矩阵</div>

---

## 📑 本章节知识点索引

| 知识点 | 核心标准 / 算法 | 关键机制与安全目标 | 推荐级别 |
| :--- | :--- | :--- | :--- |
| [1. 对称加密 (AES / ChaCha20)](./01-symmetric-encryption) | FIPS 197, RFC 8439 | 分组密码与流密码、AEAD 关联数据认证加密 | <span class="badge-pill status-recommended">核心基石</span> |
| [2. 非对称加密 (RSA / ECC)](./02-asymmetric-encryption) | PKCS #1, RFC 7748 | 大数质因数分解、椭圆曲线离散对数难解性 | <span class="badge-pill status-recommended">核心基石</span> |
| [3. 哈希与数字签名](./03-hash-signature) | FIPS 180-4, RFC 8032 | 消息完整性校验、私钥不可抵赖签名 (Ed25519) | <span class="badge-pill status-recommended">核心基石</span> |
| [4. TLS / HTTPS 传输安全](./04-tls-ssl) | RFC 8446 (TLS 1.3) | 1-RTT 极速握手、前向保密（PFS）、淘汰旧套件 | <span class="badge-pill status-recommended">传输必选</span> |
| [5. 端到端加密 (E2EE)](./05-end-to-end-encryption) | Signal Protocol, 双棘轮 | 哪怕中转服务器沦陷，第三方也无法破译聊天信息 | <span class="badge-pill status-recommended">隐私通讯标杆</span> |
| [6. 密钥管理 KMS 与 HSM](./06-key-management-kms-hsm) | FIPS 140-3, PKCS #11 | 信封加密（Envelope Encryption）、硬件根信任 | <span class="badge-pill status-recommended">企业级规范</span> |
| [7. PKI 与数字证书信任链](./07-pki-certificates) | RFC 5280, X.509 v3 | CA 根证书分发、CRL / OCSP Stapling、CT 透明日志 | <span class="badge-pill status-recommended">Web 信任基石</span> |
| [8. 隐私保护与差分隐私](./08-privacy-protection) | $(\epsilon, \delta)$-DP, k-匿名 | 数据查询注入拉普拉斯噪声、动态数据脱敏 | <span class="badge-pill status-recommended">合规必备</span> |
