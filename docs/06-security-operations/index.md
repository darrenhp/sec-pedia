---
title: "六、安全运营 SecOps 概览"
category: "安全运营"
tags: [安全运营, SecOps, 业务风控, 应急响应, PICERL, 反欺诈, SIEM, SOAR]
status: published
last_updated: 2026-09-15
---

# 六、安全运营（Security Operations / SecOps）体系概览 🛡️

> **安全运营（Security Operations）** 是将静态的安全技术、算法和策略转化为动态、持续、实时的闭环防护过程。核心围绕**「事前防范、事中拦截阻断、事后应急响应与复盘溯源」**，实现对业务欺诈与网络入侵的高效治理。

---

## 🗺️ 安全运营双轮驱动全景

```mermaid
graph LR
    SecOps[现代安全运营 SecOps] --> BizSec[业务安全运营 (Business Security)]
    BizSec --> RiskControl[智能风控体系: 规则引擎 / 实时特征流 / 图计算]
    BizSec --> AntiFraud[反作弊与反欺诈: 羊毛党拦截 / 撞库防范]

    SecOps --> InfraSec[基建与网络安全运营 (Infra & Cyber)]
    InfraSec --> SIEM[威胁监测与日志关联: SIEM / SOC 7x24 监控]
    InfraSec --> IncidentResp[应急响应处置: PICERL 六阶段处置体系]
    InfraSec --> SOAR[自动化编排与响应: SOAR 剧本快速处置]
```
<div class="diagram-caption">图 6-1：业务风控反欺诈与网络攻防应急响应双轮驱动体系</div>

---

## 📑 本章节知识点索引

| 知识点 | 核心领域 | 核心机制与框架 | 推荐状态 |
| :--- | :--- | :--- | :--- |
| [1. 业务风控体系与反欺诈](./01-risk-control) | 规则引擎, 实时特征工程, 图计算 | 识别羊毛党、批量养号、转账盗刷、撞库扫号 | <span class="badge-pill status-recommended">互联网核心必备</span> |
| [2. 安全应急响应体系 (PICERL)](./02-incident-response) | NIST / SANS PICERL 响应模型 | 准备、检测、遏制、根除、恢复、事后复盘 | <span class="badge-pill status-recommended">安全运营军规</span> |
