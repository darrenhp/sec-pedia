# Sec-Pedia 安全百科 🛡️

> 现代体系化安全与密码学知识库：从基础身份认证、数据传输加密，到区块链安全、大模型安全与后量子密码学。

[![Deploy Sec-Pedia to GitHub Pages](https://github.com/darrenhp/sec-pedia/actions/workflows/deploy.yml/badge.svg)](https://github.com/darrenhp/sec-pedia/actions/workflows/deploy.yml)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

- **在线访问**：[https://darrenhp.github.io/sec-pedia/](https://darrenhp.github.io/sec-pedia/)
- **代码仓库**：[https://github.com/darrenhp/sec-pedia](https://github.com/darrenhp/sec-pedia)

---

## 🌟 核心特色与规范

本项目严格遵循内容规划标准，每一篇知识点均覆盖标准 **7 大模块**：
1. **概述（What）**：一句话定义与解决痛点。
2. **原理详解（How it works）**：强制搭配 **Mermaid 交互时序图、流程图或架构图**，配有详细图注。
3. **协议与标准（Protocols & Standards）**：明确标注 IETF RFC、W3C、NIST FIPS、ISO 权威规范编号。
4. **发展历史（Timeline）**：包含明确年份与重大安全漏洞驱动的演进时间线。
5. **优缺点与安全性分析**：优势、攻防弱点及当前行业推荐状态标示。
6. **关联知识点（Related）**：上下游知识网络与对比。
7. **参考资料（References）**：文末附带官方标准文档链接，正文采用 `[1]`、`[2]` 角标呼应。

---

## 🗺️ 知识库全景架构

```
docs/
├── 01-authentication/         # 一、身份认证 (密码哈希/HOTP/TOTP/Passkey/WebAuthn/OAuth2/OIDC/SAML/MFA/生物识别/CAPTCHA)
├── 02-data-protection/        # 二、数据保护 (AES/ChaCha20/RSA/ECC/数字签名/TLS 1.3/E2EE/KMS与HSM/PKI证书/差分隐私)
├── 03-access-control/         # 三、访问控制 (RBAC与ABAC/零信任架构/Session与JWT与Cookie安全)
├── 04-network-security/       # 四、网络安全 (XSS/CSRF/SQLi/SSRF/MITM常见Web攻防/WAF/IDS/DDoS防护体系)
├── 05-endpoint-security/      # 五、终端与设备安全 (设备指纹技术/TEE与Apple Secure Enclave硬件隔离)
├── 06-security-operations/    # 六、安全运营 (业务智能风控与反欺诈/安全应急响应PICERL模型)
├── 07-compliance/             # 七、合规与法规 (GDPR/PIPL个人信息保护法/ISO 27001与SOC 2认证)
├── 08-external-resources/     # 八、外部资源导航 (Cloudflare Learning/jwt.io/webauthn.me/OWASP精选)
├── 09-blockchain-security/    # 九、区块链安全 (前沿: 密码学基石/PoW与PoS共识/BIP39助记词与钱包/智能合约重入/零知识证明/典型事件)
├── 10-ai-security/            # 十、AI 与大模型安全 (前沿: 对抗样本/Prompt Injection提示词注入/越狱/联邦学习/C2PA水印/SafeTensors)
└── 11-quantum-security/       # 十一、量子计算与后量子密码 (前沿: Shor算法威胁/SNDL模型/NIST PQC标准/BB84 QKD)
```

---

## 🛠️ 本地开发与构建

项目基于 **Node.js**、**pnpm** 与 **VitePress** 构建，并深度集成 **Mermaid** 图表插件：

```bash
# 1. 克隆代码仓库
git clone https://github.com/darrenhp/sec-pedia.git
cd sec-pedia

# 2. 安装依赖
pnpm install

# 3. 启动本地实时热重载开发服务器
pnpm docs:dev

# 4. 构建生产静态页面 (产物输出至 docs/.vitepress/dist)
pnpm docs:build

# 5. 本地预览构建产物
pnpm docs:preview
```

---

## 🚀 部署至 GitHub Pages

本项目已配置完整的 GitHub Actions 自动化部署流水线（`.github/workflows/deploy.yml`）：

1. 将代码推送到 `main` 分支后，GitHub Actions 将自动安装依赖并构建静态站点；
2. 在 GitHub 仓库设置中开启 Pages：
   - 打开仓库的 **Settings** -> **Pages**；
   - 在 **Build and deployment** 下将 **Source** 选择为 **GitHub Actions**；
3. 构建完成后站点将在 `https://<your-username>.github.io/sec-pedia/` 自动上线！

---

## 📜 许可证

本项目内容遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可证开源共享。代码与构建配置遵循 MIT 许可证。
