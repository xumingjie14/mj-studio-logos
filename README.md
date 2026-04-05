# MJ工作室 · Bloomberg Logos哨兵终端

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)
![Deployment](https://img.shields.io/badge/deployment-Vercel-success.svg)

## 🌐 项目简介

**MJ工作室 · Bloomberg Logos哨兵终端** 是一个专业的宏观流动性监控系统，采用彭博社终端风格界面，实时监控美联储流动性指标、国债拍卖、政策事件和加密货币市场。

## 🚀 在线访问

**生产环境:** https://mj-studio.vercel.app

**API端点:** https://mj-studio.vercel.app/api/liquidity

## 📊 核心功能

### 1. 流动性监控面板
- **管道压力分析:** SOFR - IORB 差值监控
- **净流动性计算:** WALCL - WTREGEN - RRPONTSYD
- **实时警报:** 爆管警报、压力警告

### 2. 拍卖追踪系统
- 国债拍卖日程跟踪
- 投标倍数分析
- 拍卖结果实时更新

### 3. 加密货币关联
- BTC/ETH 实时价格
- 市场变化趋势
- 流动性关联分析

### 4. 预警中心
- 多级别警报系统
- 历史警报查看
- 自动通知机制

## 🛠️ 技术栈

- **前端:** HTML5, CSS3, JavaScript (ES6+)
- **样式:** 自定义CSS + 响应式设计
- **部署:** Vercel (自动部署 + Serverless Functions)
- **API:** Vercel Serverless Functions
- **数据源:** FRED API, TreasuryDirect, CoinGecko

## 📁 项目结构

```
mj-studio-logos/
├── README.md                 # 项目说明
├── vercel.json              # Vercel配置
├── package.json             # 项目依赖
├── index.html              # 主界面文件
├── api/
│   └── liquidity.js        # 流动性数据API
└── .github/
    └── workflows/
        └── vercel-deploy.yml # 自动部署配置
```

## 🔧 本地开发

### 环境要求
- Node.js 16+
- Git

### 快速启动
```bash
# 克隆仓库
git clone https://github.com/your-username/mj-studio-logos.git

# 进入项目目录
cd mj-studio-logos

# 安装依赖 (如果需要)
npm install

# 启动本地服务器
npx serve . -p 3000
```

### 访问本地
打开浏览器访问: http://localhost:3000

## 🌐 部署指南

### Vercel自动部署
1. Fork 本仓库
2. 登录 Vercel (https://vercel.com)
3. 点击 "New Project"
4. 选择本GitHub仓库
5. 配置环境变量:
   - `FRED_API_KEY`: FRED API密钥
6. 点击 "Deploy"

### 环境变量配置
在Vercel项目设置中添加:
```
FRED_API_KEY = 你的FRED API密钥
```

## 📊 数据源

### 官方数据源
1. **FRED API** - 美联储经济数据
   - SOFR, IORB, WALCL, WTREGEN, RRPONTSYD
2. **TreasuryDirect** - 国债拍卖数据
3. **CoinGecko API** - 加密货币数据

### 计算公式
```
净流动性 = WALCL - WTREGEN - RRPONTSYD
管道压力 = SOFR - IORB
警报条件: 管道压力 >= 0%
```

## 👥 团队使用

### 访问方式
1. **生产环境:** https://mj-studio.vercel.app
2. **团队协作:** 统一数据视图，实时讨论

### 功能权限
- 所有团队成员: 查看权限
- 管理员: 配置权限
- 自动更新: 无需手动刷新

## 🚨 警报系统

### 警报级别
- 🔴 **严重警报:** 管道压力 >= 0%
- 🟡 **警告:** 数据异常或延迟
- 🔵 **信息:** 常规数据更新

### 通知方式
- 界面实时显示
- 团队频道通知 (可选)
- 每日晨报汇总

## 📈 晨报系统

### 自动晨报
- **时间:** 每天08:00 北京时间
- **内容:** 流动性分析 + 市场洞察
- **渠道:** Telegram / 团队频道

### 晨报内容
1. 昨日流动性变化
2. 今日拍卖日程
3. 市场预警状态
4. 投资建议

## 🔐 安全说明

### 数据安全
- API密钥通过环境变量管理
- 无用户数据存储
- 只读数据访问权限

### 访问安全
- HTTPS强制加密
- CORS安全配置
- 无敏感信息暴露

## 🤝 贡献指南

欢迎提交Issue和Pull Request改进项目。

### 开发流程
1. Fork 本仓库
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## ⚙️ 技术支持

**Logos Sentinel** 自动化监控节点
- 晨报系统维护
- 数据源监控
- 系统故障处理

---

**MJ工作室 · 让数据驱动决策** 🎨📊🚀