---
layout: home

hero:
  name: "Sec-Pedia 安全百科"
  text: "体系化现代安全与密码学知识库"
  tagline: "从基础认证授权、数据加密传输，到前沿区块链、AI 大模型安全与后量子密码学"
  image:
    src: /logo.svg
    alt: Sec-Pedia Logo
  actions:
    - theme: brand
      text: 快速开始 (P0 核心专区) 🚀
      link: /01-authentication/01-password-hashing
    - theme: alt
      text: 浏览知识图谱 🧭
      link: /01-authentication/
    - theme: alt
      text: 外部资源导航 🌐
      link: /08-external-resources/

features:
  - icon: 📐
    title: 严谨七步结构
    details: 每篇文章均按照「概述 → 原理详解 → 协议标准 → 发展历史 → 优缺点分析 → 关联技术 → 权威参考资料」7大模块展开。
  - icon: 📊
    title: 全景流程图解
    details: 内置 Mermaid 交互时序图、算法流水线、CA 证书信任链、权限架构图，让抽象的安全协议一目了然。
  - icon: 🎯
    title: 官方标准溯源
    details: 紧密跟踪 IETF RFC、W3C、FIDO 联盟、NIST 等权威机构最新标准，提供可直接跳转的官方原文索引。
  - icon: ⚡
    title: 覆盖前沿领域
    details: 特设区块链安全、大模型（Prompt Injection/越狱/护栏）、后量子密码（NIST FIPS 203/204）三大前沿专题。
  - icon: 🔍
    title: 本地秒级检索
    details: 全文离线分词检索，即输即显，快速定位具体协议编号（如 RFC 6238、FIPS 140-3）与防护策略。
  - icon: 🤝
    title: 开源共建
    details: 托管于 GitHub，遵循 CC BY-NC-SA 4.0 协议，支持直接提交 Pull Request 持续迭代完善。
---

<div style="margin-top: 3rem; text-align: center;">

## 📚 知识库板块导航

</div>

| 板块类别 | 章节 | 核心覆盖领域 | 状态 |
| :--- | :--- | :--- | :--- |
| **基础安全** | [一、身份认证 Authentication](/01-authentication/) | 密码哈希、HOTP/TOTP、Passkey/WebAuthn、Magic Link、OAuth2、OIDC、SAML、生物识别、CAPTCHA | <span class="badge-pill status-recommended">核心完整</span> |
| **基础安全** | [二、数据保护 Data Protection](/02-data-protection/) | 对称加密(AES)、非对称加密(RSA/ECC)、哈希签名、TLS 1.3、E2EE、KMS/HSM、PKI证书、差分隐私 | <span class="badge-pill status-recommended">核心完整</span> |
| **基础安全** | [三、访问控制 Access Control](/03-access-control/) | RBAC / ABAC 权限模型、零信任架构 (Zero Trust)、Session / JWT / Cookie 安全防御 | <span class="badge-pill status-recommended">核心完整</span> |
| **基础安全** | [四、网络安全 Network Security](/04-network-security/) | XSS / CSRF / SQL注入 / SSRF / MITM 攻击与深度防御、WAF / IDS / DDoS 纵深防护 | <span class="badge-pill status-recommended">核心完整</span> |
| **基础安全** | [五、终端与设备安全](/05-endpoint-security/) | 浏览器与设备指纹追踪、ARM TrustZone / Apple Secure Enclave / TEE 可信计算 | <span class="badge-pill status-recommended">已规划</span> |
| **基础安全** | [六、安全运营 SecOps](/06-security-operations/) | 智能业务风控体系、反欺诈规则引擎、安全事件应急响应 (PICERL 模型) | <span class="badge-pill status-recommended">已规划</span> |
| **基础安全** | [七、合规与法规 Compliance](/07-compliance/) | GDPR、PIPL 个人信息保护法、数据出境、ISO 27001、SOC 2 Type II、等保 2.0 | <span class="badge-pill status-recommended">已规划</span> |
| **精选推荐** | [八、外部资源导航](/08-external-resources/) | Cloudflare Learning、jwt.io、webauthn.me、The Copenhagen Book、OWASP 权威站点精选 | <span class="badge-pill status-recommended">精选导航</span> |
| **前沿探索** | [九、区块链安全 Blockchain](/09-blockchain-security/) | 哈希链、Merkle树、ECDSA签名、PoW/PoS共识攻击、BIP39/HD钱包、智能合约重入漏洞、零知识证明 | <span class="badge-pill status-caution">前沿探索</span> |
| **前沿探索** | [十、AI 与大模型安全 AI Security](/10-ai-security/) | 对抗样本、Prompt Injection 提示词注入、越狱防御、联邦学习、C2PA 内容水印鉴伪 | <span class="badge-pill status-caution">前沿探索</span> |
| **前沿探索** | [十一、量子计算与后量子密码 PQC](/11-quantum-security/) | Shor / Grover 算法威胁、"先窃后解"威胁模型、NIST PQC 标准 (Kyber/Dilithium)、BB84 QKD | <span class="badge-pill status-caution">前沿探索</span> |
