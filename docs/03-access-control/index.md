---
title: "三、访问控制 Access Control 概览"
category: "访问控制"
tags: [访问控制, RBAC, ABAC, 零信任, Zero-Trust, JWT, Session, Cookie]
status: published
last_updated: 2026-09-15
---

# 三、访问控制（Access Control）体系概览 🛡️

> **访问控制（Access Control，缩写为 AuthZ）** 决定了已经被认证合法的主体（Subject）能够对特定的客体资源（Object）执行哪些具体操作（Action）。它回答的核心问题是：**「你能访问什么？你可以执行什么操作？」**

---

## 🗺️ 访问控制核心演进矩阵

```mermaid
graph TD
    AC[访问控制 Access Control] --> Models[经典授权模型]
    Models --> DAC[自主访问控制 DAC: 属主自由分发]
    Models --> MAC[强制访问控制 MAC: 多级机密标签]
    Models --> RBAC[基于角色访问控制 RBAC: 用户-角色-权限]
    Models --> ABAC[基于属性访问控制 ABAC: 动态策略上下文]

    AC --> Architecture[企业架构级演化]
    Architecture --> Perimeter[传统边界安全: 内网即信任 ❌]
    Architecture --> ZeroTrust[零信任架构: 从不信任, 始终验证 🌟]

    AC --> TokenSession[会话与状态承载]
    TokenSession --> Stateful[有状态会话: Server Session + HttpOnly Cookie]
    TokenSession --> Stateless[无状态令牌: JWT / JWS / JWE]
```
<div class="diagram-caption">图 3-1：访问控制模型分类与现代零信任架构演变全景</div>

---

## 📑 本章节知识点索引

| 知识点 | 核心标准 / 模型 | 机制特点 | 行业推荐状态 |
| :--- | :--- | :--- | :--- |
| [1. RBAC 与 ABAC 权限模型](./01-rbac-abac) | NIST RBAC, XACML 3.0 | 静态角色分配 vs 动态多维环境属性策略判断 | <span class="badge-pill status-recommended">企业核心规范</span> |
| [2. 零信任架构 (Zero Trust)](./02-zero-trust) | NIST SP 800-207 | 摒弃物理网络边界，细粒度持续动态微隔离 | <span class="badge-pill status-recommended">下一代安全标杆</span> |
| [3. Session / JWT / Cookie 安全](./03-session-jwt-cookie) | RFC 7519, RFC 6265bis | 客户端存储防御、SameSite、CSRF/XSS 令牌防护 | <span class="badge-pill status-recommended">Web 开发必备</span> |
