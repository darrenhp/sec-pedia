---
title: "七、合规与法规 Compliance 概览"
category: "合规与法规"
tags: [合规, 法规, GDPR, PIPL, ISO27001, SOC2, 等保2.0, 审计]
status: published
last_updated: 2026-09-15
---

# 七、合规与法规（Compliance & Regulations）体系概览 📜

> **安全合规与法规（Security Compliance & Privacy Laws）** 明确了技术系统在法律、监管与商业信用层面的**底线约束**。安全不仅是技术攻防，更是企业履约合规、保障用户基本人权与跨国出海展业的必备准入通行证。

---

## 🗺️ 全球合规框架与审计基线

```mermaid
graph TD
    Compliance[安全合规体系 Compliance] --> Laws[法定强制法规 (Statutory Laws)]
    Laws --> GDPR[欧盟 GDPR: 被遗忘权 / 巨额罚款 / 72小时通报]
    Laws --> PIPL[中国 PIPL: 个人信息保护法 / 关键信息基础设施 / 数据出境]
    Laws --> CCPA[美国加州 CCPA/CPRA: 消费者隐私权法]

    Compliance --> Standards[行业审计与认证 (Certifications)]
    Standards --> ISO27001[ISO/IEC 27001: 信息安全管理体系 ISMS]
    Standards --> SOC2[AICPA SOC 2 Type II: SaaS 商业信任报告]
    Standards --> MLPS[中国网络安全等级保护 2.0 (等保三级)]
```
<div class="diagram-caption">图 7-1：国际法定合规与主流行业安全认证框架</div>

---

## 📑 本章节知识点索引

| 知识点 | 覆盖法规 / 认证 | 核心要求与法律后果 | 推荐状态 |
| :--- | :--- | :--- | :--- |
| [1. GDPR 与 PIPL 数据保护法规](./01-gdpr-pipl) | 欧盟 GDPR, 中国 PIPL | 知情同意、用户撤回权、数据出境安全评估、DPO 设置 | <span class="badge-pill status-recommended">跨国展业红线</span> |
| [2. ISO 27001 与 SOC 2 认证](./02-iso27001-soc2) | ISO/IEC 27001:2022, SOC 2 Type II | 风险评估、供应商管理、持续控制措施有效性审计报告 | <span class="badge-pill status-recommended">B2B 采购标配</span> |
