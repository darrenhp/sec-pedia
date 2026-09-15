---
title: "四、网络安全 Network Security 概览"
category: "网络安全"
tags: [网络安全, Web攻防, XSS, CSRF, SQL注入, SSRF, WAF, DDoS]
status: published
last_updated: 2026-09-15
---

# 四、网络安全（Network Security）体系概览 🛡️

> **网络安全（Network Security）** 关注在公共开放网络环境与应用服务中，抵御针对传输链路、网络层协议、Web 应用逻辑与主机端口的各类恶意渗透、漏洞利用与拒绝服务攻击，构建覆盖从**流量接入层**到**应用运行时**的纵深防御体系。

---

## 🗺️ 网络攻防对抗全景

```mermaid
graph TD
    NetSec[网络安全 Network Security] --> Attacks[常见攻击手法]
    Attacks --> ClientSide[客户端攻击: XSS 跨站脚本 / CSRF 跨站请求伪造]
    Attacks --> ServerSide[服务端攻击: SQL注入 / SSRF 服务端请求伪造 / RCE 命令执行]
    Attacks --> NetworkLayer[网络链路攻击: MITM 中间人窃听 / ARP 欺骗 / DNS 投毒]

    NetSec --> Defense[防护与防御体系]
    Defense --> Edge[边缘与接入层: DDoS 流量清洗高防 / Anycast BGP]
    Defense --> AppFirewall[应用层感知: WAF Web应用防火墙 / RASP 运行时防护]
    Defense --> IntDetect[流量入侵检测: IDS / IPS / 蜜罐诱捕]
```
<div class="diagram-caption">图 4-1：网络安全攻防技术栈全景</div>

---

## 📑 本章节知识点索引

| 知识点 | 覆盖领域 | 核心机制与防线 | 推荐状态 |
| :--- | :--- | :--- | :--- |
| [1. 常见 Web 攻击手法与防御](./01-web-attacks) | XSS / CSRF / SQLi / SSRF / MITM | 输入验证、参数化查询、CSP 策略、SameSite 隔离 | <span class="badge-pill status-recommended">开发必备军规</span> |
| [2. 网络安全纵深防护体系](./02-defense-systems) | WAF / IDS / IPS / DDoS 防护 | 语义分析引擎、正则过滤、Anycast 流量清洗、分布式黑洞路由 | <span class="badge-pill status-recommended">网络基建标准</span> |
