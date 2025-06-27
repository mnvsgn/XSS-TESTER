<h1 align="center">🧪 XSS-TESTER</h1>

<p align="center"><em>A comprehensive testing environment for web security vulnerabilities</em></p>

<p align="center">
   <img src="https://img.shields.io/github/last-commit/mnvsgn/XSS-TESTER?color=blue&label=last%20commit">
   <img src="https://img.shields.io/github/languages/count/mnvsgn/XSS-TESTER?color=blueviolet&label=languages">
   <img src="https://img.shields.io/badge/ejs-79.7%25-yellowgreen">
   <img src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

<p align="center">
   <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white">
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=ejs&logoColor=white">
   <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</p>

---

## 📑 Table of Contents

- [📑 Table of Contents](#-table-of-contents)
- [📝 Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
  - [✅ Prerequisites](#-prerequisites)
  - [📦 Installation](#-installation)
  - [🔧 Usage](#-usage)
- [🔒 Security Testing](#-security-testing)

---

## 📝 Overview

XSS-TESTER is an educational web application designed to help developers and security enthusiasts understand common web vulnerabilities. Built with Node.js and Express, this tool provides a safe environment to:

- **Learn** about XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery) attacks
- **Practice** identifying and exploiting vulnerabilities in a controlled environment
- **Understand** proper security measures and mitigation techniques
- **Test** input validation, sanitization, and security headers

> ⚠️ **Disclaimer**: This tool is for educational purposes only. Use responsibly and only on systems you own or have explicit permission to test.

---

## ✨ Features

- 🎯 **XSS Testing**: Reflected, stored, and DOM-based XSS scenarios
- 🔄 **CSRF Simulation**: Cross-site request forgery examples
- 🛡️ **Security Headers**: Demonstration of CSP, X-Frame-Options, and more
- 🧹 **Input Sanitization**: Examples of proper input validation
- 📊 **Interactive Dashboard**: Real-time vulnerability testing interface
- 📖 **Educational Content**: Built-in explanations and mitigation guides

---

## 🚀 Getting Started

### ✅ Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher)
- **Git** for cloning the repository

### 📦 Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/mnvsgn/XSS-TESTER.git
    cd XSS-TESTER
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the application**
    ```bash
    npm start
    ```

4. **Access the application**
    Open your browser and navigate to `http://localhost:3000`

### 🔧 Usage

1. **Navigate** through different vulnerability scenarios
2. **Input** various payloads to test XSS and CSRF vulnerabilities
3. **Observe** how different security measures affect the results
4. **Learn** from the provided explanations and best practices

---

## 🔒 Security Testing

This application includes several testing scenarios:

- **Reflected XSS**: Test input reflection without proper sanitization
- **Stored XSS**: Persistent XSS through data storage
- **CSRF Attacks**: Cross-site request forgery demonstrations
- **Security Headers**: CSP, HSTS, and other protective headers
- **Input Validation**: Proper filtering and sanitization techniques