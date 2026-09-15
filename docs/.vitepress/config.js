import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const base =
  process.env.BASE_URL && process.env.BASE_URL !== 'true' && process.env.BASE_URL !== ''
    ? process.env.BASE_URL.endsWith('/')
      ? process.env.BASE_URL
      : `${process.env.BASE_URL}/`
    : '/sec-pedia/'

export default withMermaid(
  defineConfig({
    title: 'Sec-Pedia 安全百科',
    description: '现代安全与密码学知识库：从基础身份认证到后量子与AI安全',
    lang: 'zh-CN',
    base: base,
    head: [
      ['link', { rel: 'icon', href: `${base}logo.svg` }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    markdown: {
      lineNumbers: true,
    },
    mermaid: {
      theme: 'neutral',
    },
    themeConfig: {
      siteTitle: '🛡️ Sec-Pedia 安全百科',
      nav: [
        { text: '首页', link: '/' },
        {
          text: '基础安全',
          items: [
            { text: '一、身份认证 Authentication', link: '/01-authentication/' },
            { text: '二、数据保护 Data Protection', link: '/02-data-protection/' },
            { text: '三、访问控制 Access Control', link: '/03-access-control/' },
            { text: '四、网络安全 Network Security', link: '/04-network-security/' },
            { text: '五、终端与设备安全', link: '/05-endpoint-security/' },
            { text: '六、安全运营 SecOps', link: '/06-security-operations/' },
            { text: '七、合规与法规 Compliance', link: '/07-compliance/' },
          ],
        },
        {
          text: '前沿安全',
          items: [
            { text: '九、区块链安全 Blockchain', link: '/09-blockchain-security/' },
            { text: '十、AI 安全 AI Security', link: '/10-ai-security/' },
            { text: '十一、量子计算与后量子密码 Quantum & PQC', link: '/11-quantum-security/' },
          ],
        },
        { text: '外部资源导航', link: '/08-external-resources/' },
        { text: '关于与贡献', link: '/about' },
      ],
      sidebar: {
        '/01-authentication/': [
          {
            text: '一、身份认证 Authentication',
            collapsed: false,
            items: [
              { text: '身份认证概览', link: '/01-authentication/' },
              { text: '密码与哈希存储', link: '/01-authentication/01-password-hashing' },
              { text: 'HOTP 算法', link: '/01-authentication/02-otp-hotp' },
              { text: 'TOTP 时间戳动态密码', link: '/01-authentication/03-otp-totp' },
              { text: '短信与邮箱验证码', link: '/01-authentication/04-otp-sms-email' },
              { text: 'Passkey 与 WebAuthn', link: '/01-authentication/05-passkey-webauthn' },
              { text: 'Magic Link 魔法链接', link: '/01-authentication/06-magic-link' },
              { text: 'U2F 硬件密钥', link: '/01-authentication/07-u2f-hardware-token' },
              { text: 'OAuth 2.0 授权框架', link: '/01-authentication/08-oauth2' },
              { text: 'OIDC 身份层协议', link: '/01-authentication/09-oidc' },
              { text: 'SAML 2.0 联合身份', link: '/01-authentication/10-saml' },
              { text: '多因素认证 MFA', link: '/01-authentication/11-mfa' },
              { text: '生物识别安全', link: '/01-authentication/12-biometrics' },
              { text: '图灵验证 (CAPTCHA)', link: '/01-authentication/13-captcha' },
            ],
          },
        ],
        '/02-data-protection/': [
          {
            text: '二、数据保护 Data Protection',
            collapsed: false,
            items: [
              { text: '数据保护概览', link: '/02-data-protection/' },
              { text: '对称加密 (AES / ChaCha20)', link: '/02-data-protection/01-symmetric-encryption' },
              { text: '非对称加密 (RSA / ECC)', link: '/02-data-protection/02-asymmetric-encryption' },
              { text: '哈希与数字签名', link: '/02-data-protection/03-hash-signature' },
              { text: 'TLS / SSL 传输安全', link: '/02-data-protection/04-tls-ssl' },
              { text: '端到端加密 E2EE', link: '/02-data-protection/05-end-to-end-encryption' },
              { text: '密钥管理 KMS 与 HSM', link: '/02-data-protection/06-key-management-kms-hsm' },
              { text: 'PKI 与数字证书信任链', link: '/02-data-protection/07-pki-certificates' },
              { text: '隐私保护 (数据脱敏与差分隐私)', link: '/02-data-protection/08-privacy-protection' },
            ],
          },
        ],
        '/03-access-control/': [
          {
            text: '三、访问控制 Access Control',
            collapsed: false,
            items: [
              { text: '访问控制概览', link: '/03-access-control/' },
              { text: 'RBAC 与 ABAC 权限模型', link: '/03-access-control/01-rbac-abac' },
              { text: '零信任架构 (Zero Trust)', link: '/03-access-control/02-zero-trust' },
              { text: 'Session / JWT / Cookie 安全', link: '/03-access-control/03-session-jwt-cookie' },
            ],
          },
        ],
        '/04-network-security/': [
          {
            text: '四、网络安全 Network Security',
            collapsed: false,
            items: [
              { text: '网络安全概览', link: '/04-network-security/' },
              { text: '常见 Web 攻击手法剖析', link: '/04-network-security/01-web-attacks' },
              { text: '网络纵深防御体系', link: '/04-network-security/02-defense-systems' },
            ],
          },
        ],
        '/05-endpoint-security/': [
          {
            text: '五、终端与设备安全',
            collapsed: false,
            items: [
              { text: '终端安全概览', link: '/05-endpoint-security/' },
              { text: '设备指纹技术', link: '/05-endpoint-security/01-device-fingerprint' },
              { text: 'TEE 与 Secure Enclave', link: '/05-endpoint-security/02-tee-secure-enclave' },
            ],
          },
        ],
        '/06-security-operations/': [
          {
            text: '六、安全运营 SecOps',
            collapsed: false,
            items: [
              { text: '安全运营概览', link: '/06-security-operations/' },
              { text: '业务风控与反欺诈体系', link: '/06-security-operations/01-risk-control' },
              { text: '安全应急响应与事件处置', link: '/06-security-operations/02-incident-response' },
            ],
          },
        ],
        '/07-compliance/': [
          {
            text: '七、合规与法规 Compliance',
            collapsed: false,
            items: [
              { text: '合规与法规概览', link: '/07-compliance/' },
              { text: 'GDPR 与 PIPL 数据保护法规', link: '/07-compliance/01-gdpr-pipl' },
              { text: 'ISO 27001 与 SOC 2 认证', link: '/07-compliance/02-iso27001-soc2' },
            ],
          },
        ],
        '/08-external-resources/': [
          {
            text: '外部资源导航',
            items: [
              { text: '权威资源导航专区', link: '/08-external-resources/' },
            ],
          },
        ],
        '/09-blockchain-security/': [
          {
            text: '九、区块链安全 Blockchain Security',
            collapsed: false,
            items: [
              { text: '区块链安全概览', link: '/09-blockchain-security/' },
              { text: '密码学基石 (哈希链/Merkle/数字签名)', link: '/09-blockchain-security/01-cryptography-foundations' },
              { text: '共识机制安全 (PoW / PoS / BFT)', link: '/09-blockchain-security/02-consensus-mechanisms' },
              { text: '密钥与钱包安全 (BIP39/HD/多签)', link: '/09-blockchain-security/03-wallets-keys' },
              { text: '智能合约安全与审计', link: '/09-blockchain-security/04-smart-contract-security' },
              { text: '零知识证明 (zk-SNARK / zk-STARK)', link: '/09-blockchain-security/05-zero-knowledge-proofs' },
              { text: '区块链典型攻击与事件', link: '/09-blockchain-security/06-common-attacks' },
            ],
          },
        ],
        '/10-ai-security/': [
          {
            text: '十、AI 安全 AI Security',
            collapsed: false,
            items: [
              { text: 'AI 安全概览', link: '/10-ai-security/' },
              { text: '模型攻击面 (对抗/投毒/窃取/后门)', link: '/10-ai-security/01-model-attacks' },
              { text: 'LLM 专属安全 (Prompt Injection/越狱/护栏)', link: '/10-ai-security/02-llm-security' },
              { text: '隐私保护机器学习', link: '/10-ai-security/03-privacy-ml' },
              { text: 'AIGC 鉴伪与数字水印 (C2PA)', link: '/10-ai-security/04-content-authenticity' },
              { text: 'AI 模型供应链安全', link: '/10-ai-security/05-supply-chain' },
            ],
          },
        ],
        '/11-quantum-security/': [
          {
            text: '十一、量子计算与后量子密码',
            collapsed: false,
            items: [
              { text: '量子计算安全概览', link: '/11-quantum-security/' },
              { text: '量子威胁 (Shor / Grover 算法)', link: '/11-quantum-security/01-quantum-threats' },
              { text: '后量子密码学 PQC 标准化', link: '/11-quantum-security/02-pqc-standards' },
              { text: '量子物理密码 (BB84 QKD 与 QRNG)', link: '/11-quantum-security/03-qkd-qrng' },
            ],
          },
        ],
      },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索知识库...',
                  buttonAriaLabel: '搜索知识库',
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                  },
                },
              },
            },
          },
        },
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/darrenhp/sec-pedia' },
      ],
      footer: {
        message: '基于 CC BY-NC-SA 4.0 许可证开源共享',
        copyright: 'Copyright © 2026 Sec-Pedia Team. 严格遵循 RFC / W3C / NIST 权威安全规范。',
      },
      editLink: {
        pattern: 'https://github.com/darrenhp/sec-pedia/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页',
      },
      outline: {
        level: [2, 3],
        label: '本页导航',
      },
      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },
    },
  })
)
