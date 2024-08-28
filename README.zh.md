# 3D website portfolio

[English](README.md) · [简体中文](README.zh.md)

## 项目介绍

这是一个使用React、Vite和Tailwind构建的3D个人网站模板。它基于Javascript Mastery的教程进行编辑和修改，以适应个人需求。我在其中加入了i18next多语言模块，以及链接到个人社交账户的按钮。

## 功能特点

- 3D效果：使用React Three Fiber和Drei库创建3D模型和动画。
- 响应式设计：使用Tailwind CSS实现响应式布局，确保网站在不同设备上都能良好显示。
- 动画效果：使用Framer Motion库添加动画效果，提升用户体验。
- 路由管理：使用React Router DOM实现页面路由管理。
- 个性化定制： 可以直接在src\constants\index.js中修改个人简介、技能、项目、教育背景、联系方式等个人信息。
- 多语言支持： 使用i18next库实现多语言切换，支持中文和英文。
- 邮件发送： 使用emailjs库实现邮件发送功能。

## 使用方法

1. 克隆仓库到本地：

```
git clone https://github.com/Ivan-Yang1/3D_website_portfolio.git
```

2. 进入项目目录：

```
cd 3D_website_portfolio
```

3. 安装依赖：

```
npm install
```

4. env文件修改：

```
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```
https://www.emailjs.com/

5. 启动开发服务器：

```
npm run dev
```

6. 打包构建：

```
npm run build
```

## 注意事项

- 请确保在本地安装了Node.js和npm。
