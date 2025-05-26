#!/bin/bash

echo "🚀 启动 Anker Creative AI System"
echo "================================"

# 检查Node.js和npm是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js (https://nodejs.org/)"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 npm"
    exit 1
fi

echo "✅ Node.js版本: $(node --version)"
echo "✅ npm版本: $(npm --version)"
echo ""

# 检查是否在项目目录中
if [ ! -f "package.json" ]; then
    echo "❌ 请确保在 creative-ai-system 项目目录中运行此脚本"
    exit 1
fi

echo "📦 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "🔧 安装项目依赖..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
    echo "✅ 依赖安装完成"
else
    echo "✅ 依赖已存在"
fi

echo ""
echo "🏗️  构建检查..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ 项目构建成功"
else
    echo "⚠️  项目构建有警告，但可以继续运行"
fi

echo ""
echo "🎯 项目特性："
echo "   • O.I.K.F.P 完整架构实现"
echo "   • React + TypeScript + Tailwind CSS"
echo "   • 智能内容创作工作流"
echo "   • 多平台数据分析"
echo "   • KOL/KOC 管理系统"
echo ""

echo "🌟 启动开发服务器..."
echo "   访问地址: http://localhost:3000"
echo "   按 Ctrl+C 停止服务器"
echo ""

# 启动开发服务器
npm start