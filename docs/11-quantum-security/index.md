---
title: "十一、量子计算与后量子密码 PQC 概览"
category: "量子安全"
tags: [量子计算, 后量子密码, PQC, NIST-PQC, Shor算法, Grover算法, ML-KEM, Kyber, Dilithium, QKD, BB84]
status: published
last_updated: 2026-09-15
---

# 十一、量子计算与后量子密码（Quantum & PQC）体系概览 ⚛️

> **后量子密码学（Post-Quantum Cryptography, PQC）与量子安全** 代表了现代密码学近半个世纪以来最深远的一次历史性技术大迁移。当实用化通用量子计算机到来时，现行支撑全球互联网金融、HTTPS 与国防通信的非对称密码（RSA、ECC）将在物理层面被瞬间化解。

---

## 🗺️ 量子安全全景图谱

```mermaid
graph TD
    QuantumSec[量子时代密码安全] --> Threats[量子计算两大颠覆性算法]
    Threats --> Shor["Shor 算法 (1994)<br/>• 多项式时间内攻破质因数分解与离散对数<br/>• 💥 彻底摧毁 RSA, ECC, Diffie-Hellman, ECDSA"]
    Threats --> Grover["Grover 算法 (1996)<br/>• 暴力搜索复杂度开根号 (二次加速)<br/>• ⚠️ 对称加密/哈希等效密钥长度减半 (AES-128 降为 64-bit)"]
    Threats --> SNDL["'先窃取后解密'威胁 (Harvest Now, Decrypt Later)<br/>• 敌对国家今日全量录制公网密文, 待量子计算机建成后解密"]

    QuantumSec --> Solutions[两大抵御路线]
    Solutions --> PQC["数学路线: 后量子密码学 (PQC)<br/>• 运行在经典计算机上, 基于格密码等全新抗量子数学难题<br/>• 🌟 NIST 正式发布首批标准: FIPS 203 / 204 / 205"]
    Solutions --> Physics["物理路线: 量子密码学 (Quantum Cryptography)<br/>• 利用量子物理定律不可克隆性与测不准原理<br/>• BB84 量子密钥分发 (QKD) 与量子真随机数 (QRNG)"]
```
<div class="diagram-caption">图 11-1：量子计算对现代密码学的冲击与两大防御演进路线</div>

---

## 📑 本章节知识点索引

| 知识点 | 核心算法 / 规范 | 核心机理与战略意义 | 探索状态 |
| :--- | :--- | :--- | :--- |
| [1. 量子威胁与"先窃后解"威胁模型](./01-quantum-threats) | Shor 算法, Grover 算法, SNDL | 非对称算法崩塌危机、十年保密期军事与商业机密威胁 | <span class="badge-pill status-caution">紧迫现实威胁</span> |
| [2. 后量子密码学 PQC 标准化](./02-pqc-standards) | NIST FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) | 格密码学（Lattice-based）、经典与 PQC 混合过渡部署 | <span class="badge-pill status-recommended">现役首选迁移路线</span> |
| [3. 量子物理密码 (BB84 QKD 与 QRNG)](./03-qkd-qrng) | BB84 协议, 单光子偏振, TRNG | 海森堡测不准原理、窃听必被发现、物理级真随机熵源 | <span class="badge-pill status-recommended">物理前沿标杆</span> |
