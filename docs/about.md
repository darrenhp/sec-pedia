---
title: "关于 Sec-Pedia"
description: "Sec-Pedia 项目宗旨、知识库内容规范与建设路线"
---

# 关于 Sec-Pedia 安全百科

## 💡 项目宗旨

**Sec-Pedia（安全知识百科）** 旨在构建一个面向软件工程师、安全研究员、架构师及安全爱好者的系统化、高品质知识库。

在信息安全与密码学领域，技术文档往往存在两大痛点：
1. **零散化**：知识分散在各个 RFC、论文、厂商官方博客中，缺乏自顶向下的知识树脉络；
2. **两极化**：要么是极其艰深晦涩的纯数学与协议报文规范，要么是流于表面的科普问答，缺乏工程落地、攻击面分析与演进历史维度的有机整合。

Sec-Pedia 坚持 **「原理剖析 + 标准溯源 + 历史脉络 + 实战攻防」** 的写作范式，让每一位读者既能洞悉协议设计的初衷与底层逻辑，也能获得直接指导系统架构与代码落地的安全防御实践。

---

## 📐 七步内容生产标准

为确保全站知识质量的高度一致性与严谨性，所有条目均由自动化与人工校验联合审核，严格遵循以下 7 大模块：

1. **概述（What）**：一句话精准定义，明确其解决的核心安全痛点与典型应用场景。
2. **原理详解（How it works）**：拆解底层核心机制，强制搭配 **Mermaid 时序图 / 流程图 / 架构图**，配有详细图注与技术参数说明。
3. **协议与标准（Protocols & Standards）**：明确标注权威编号（如 IETF RFC、W3C、NIST FIPS、ISO），并对主流实现方案进行多维对比。
4. **发展历史（Timeline）**：梳理起源背景、重大版本迭代里程碑（含具体年份），记录由重大安全漏洞（如 Heartbleed、POODLE）倒逼协议演进的历程。
5. **优缺点与安全性分析**：剖析防御边界、已知攻击载荷与弱点，明确标注当前行业推荐状态（<span class="badge-pill status-recommended">强烈推荐</span> / <span class="badge-pill status-caution">谨慎使用</span> / <span class="badge-pill status-deprecated">已淘汰/废弃</span>）。
6. **关联知识点（Related）**：构建上下游技术链接与横向对比，形成互联互通的知识图谱网。
7. **参考资料（References）**：文末附带严格的标准文档与权威博客引用链接，正文采用 `[1]`、`[2]` 角标准确呼应。

---

## 🗺️ 架构演进与批次路线

- **P0（核心基石，已完整上线）**：密码哈希演进、OTP 家族（HOTP/TOTP）、Passkey 与 WebAuthn、TLS 1.3 / HTTPS、AES 与 RSA、OAuth 2.0 / OIDC。
- **P1（认证深化）**：生物识别安全路线、PKI 数字证书信任链、多因素认证 MFA、现代无感验证码。
- **P2（架构防御）**：RBAC/ABAC 权限模型、零信任架构（Zero Trust）、KMS/HSM 密钥托管、JWT/Cookie 存储安全。
- **P3（体系防御）**：常见 Web 攻击攻防演练、WAF/IDS 网络纵深防御、终端指纹与 TEE、应急响应与数据合规。
- **P4（前沿探索）**：区块链共识机制与合约审计、AI 大模型安全（Prompt Injection / 越狱防护）、后量子密码迁移（NIST PQC）。

---

## 🤝 开源与贡献

Sec-Pedia 源代码托管于 GitHub，文档采用 Markdown 格式，基于 VitePress 驱动。

- **仓库地址**：[https://github.com/darrenhp/sec-pedia](https://github.com/darrenhp/sec-pedia)
- **部署地址**：[GitHub Pages](https://darrenhp.github.io/sec-pedia/)
- **贡献流程**：欢迎通过 Issue 提出修订建议，或直接提交 Pull Request。请在提交新文章时确保符合本规范的七大模块。

---

## 📜 许可证

本站所有原创文字与示意图均基于 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可证开源共享。商业转载请取得授权，引用需保留原始出处与作者信息。
