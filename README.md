# 🧪 XSS/CSRF Tester Web App

A simple Node.js web application designed for practicing and demonstrating Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks in a safe, controlled environment.

## 🚀 Features

- 🧼 **Optional Input Sanitization** - Toggle input cleaning using the `xss` package
- 🛡️ **CSRF Protection** - Configurable CSRF protection using `csurf` middleware
- 📜 **Payload Logging** - Automatic logging of all submitted payloads to local files
- 🧪 **Real-time Reflection** - Immediate input reflection for manual XSS testing
- 🔐 **Security Headers** - Enhanced security with `helmet` when safe mode is enabled
- ⚡ **Live Toggle** - Switch between safe and vulnerable modes instantly

## 📂 Project Structure

```
xss-csrf-tester/
│
├── app.js              # Main Express application
├── package.json        # Project configuration and dependencies
├── logs/
│   └── payloads.log    # Logs of submitted payloads
├── public/
│   └── style.css       # Application styling
├── views/
│   ├── index.ejs       # Main form page
│   ├── reflect.ejs     # Input reflection display
│   └── log.ejs         # Payload log viewer
└── README.md           # Project documentation
```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mnvsgn/XSS-TESTER.git
cd XSS-TESTER
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

```bash
node app.js
```

### 4. Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## ⚙️ Usage

1. **Submit Input**: Enter text or XSS payloads in the main form
2. **Toggle Safe Mode**: Use the toggle link to switch between:
   - **Safe Mode ON**: Input sanitization active, CSRF protection enabled
   - **Safe Mode OFF**: Raw input reflection, CSRF protection disabled
3. **View Logs**: Access the "Payload Log" page to review all submitted inputs
4. **Test Vulnerabilities**: Experiment with various XSS techniques in a controlled environment

## 💣 Test Payload Examples

| Payload | Expected Behavior (Safe Mode OFF) |
|---------|-----------------------------------|
| `<script>alert('XSS')</script>` | Executes JavaScript alert dialog |
| `<img src=x onerror="alert('XSS')">` | Triggers alert via broken image |
| `<a href="javascript:alert(1)">Click</a>` | Executes alert when clicked |
| `<div onmouseover="alert('XSS')">Hover</div>` | Runs alert on mouse hover |
| `<iframe src="javascript:alert('XSS')"></iframe>` | Executes script in iframe |
| `<svg onload="alert('XSS')">` | Fires alert when SVG loads |

## 🔧 Dependencies

- **Express.js** - Web application framework
- **EJS** - Template engine for rendering views
- **xss** - Input sanitization library
- **csurf** - CSRF protection middleware
- **helmet** - Security headers middleware
- **body-parser** - Request body parsing
- **fs** - File system operations for logging

## 🔒 Security Disclaimer

⚠️ **IMPORTANT**: This application is designed **exclusively for educational and testing purposes** in controlled environments.
- **DO NOT** use for malicious purposes

## 📚 Learning Resources

- [OWASP XSS Prevention Cheat Sheet](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [OWASP CSRF Prevention Cheat Sheet](https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Helmet.js Documentation](https://helmetjs.github.io/)
- [XSS Filter npm Package](https://www.npmjs.com/package/xss)


## 👨‍💻 Author

**mnvsgn** - [GitHub Profile](https://github.com/mnvsgn)

Project Link: [https://github.com/mnvsgn/XSS-TESTER](https://github.com/mnvsgn/XSS-TESTER)

---

**Remember**: Use this tool responsibly and only for legitimate security testing and educational purposes!