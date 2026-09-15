---
title: "十、AI 安全 AI Security 概览"
category: "AI安全"
tags: [AI安全, 大语言模型, Prompt-Injection, 越狱攻击, 对抗样本, 联邦学习, C2PA, 供应链安全]
status: published
last_updated: 2026-09-15
---

# 十、AI 安全（Artificial Intelligence Security）体系概览 🤖

> **AI 安全（AI Security）** 关注在现代人工智能、深度学习特别是大语言模型（LLM）与生成式 AI 时代，针对**模型算法内部脆弱性、输入输出交互链路、训练数据隐私与开源模型供应链**的全方位新型攻防技术体系。

---

## 🗺️ 现代 AI 安全攻防全景图

```mermaid
graph TD
    AISec[现代 AI 安全体系] --> ModelThreats[经典模型层攻击]
    ModelThreats --> Adv[对抗样本攻击: FGSM / 像素级扰动欺骗图像分类]
    ModelThreats --> Poison[数据投毒攻击: 训练集中毒导致模型埋藏后门]
    ModelThreats --> Steal[模型逆向与窃取: 通过高频 API 盗取模型权重与数据]

    AISec --> LLMSec[大模型专属安全 (OWASP Top 10 for LLM)]
    LLMSec --> PromptInj[提示词注入 (Prompt Injection: 直接与间接)]
    LLMSec --> Jailbreak[越狱攻击 (Jailbreak: 绕过系统道德审查)]
    LLMSec --> Guardrails[对齐与护栏: RLHF / Llama Guard / NeMo Guardrails]

    AISec --> PrivacyAuth[隐私与真实性]
    PrivacyAuth --> FedLearn[联邦学习与差分隐私: 保护原始训练数据]
    PrivacyAuth --> DeepfakeC2PA[AIGC 鉴伪: Deepfake 检测与 C2PA 内容水印]
    PrivacyAuth --> SupplyChain[开源供应链: HuggingFace 恶意 Pickle 权重防范]
```
<div class="diagram-caption">图 10-1：人工智能系统多层次安全攻防框架</div>

---

## 📑 本章节知识点索引

| 知识点 | 核心技术 / 概念 | 典型机制与场景 | 探索状态 |
| :--- | :--- | :--- | :--- |
| [1. 模型攻击面 (对抗/投毒/窃取/后门)](./01-model-attacks) | FGSM, PGD, Clean-label Poisoning | 物理贴纸欺骗自动驾驶路标、潜伏性触发后门 | <span class="badge-pill status-recommended">核心基石</span> |
| [2. LLM 专属安全 (注入/越狱/护栏)](./02-llm-security) | OWASP LLM01, Indirect Injection, NeMo | 系统指令被不可信文本覆盖、黑客钓鱼提取私有知识库 | <span class="badge-pill status-caution">前沿核心</span> |
| [3. 隐私保护机器学习](./03-privacy-ml) | 联邦学习 (FL), DP-SGD, MPC | 数据可用不可见、医疗跨机构联合建模、防止成员推断 | <span class="badge-pill status-recommended">隐私合规必备</span> |
| [4. AIGC 鉴伪与数字水印 (C2PA)](./04-content-authenticity) | C2PA 内容凭据, 频域隐写水印, 活体反换脸 | 追踪生成来源、防御虚假新闻与换脸诈骗 | <span class="badge-pill status-recommended">国际标准落地</span> |
| [5. AI 模型供应链安全](./05-supply-chain) | PyTorch SafeTensors, Pickle RCE, HuggingFace | 杜绝加载权重直接触发系统 Shell 提权入侵 | <span class="badge-pill status-recommended">安全部署必知</span> |
