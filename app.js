const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const csrf = require("csurf");
const fs = require("fs");
const path = require("path");
const xss = require("xss");

const app = express();
const PORT = 3000;

// Middleware setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Use cookie-session to store safeMode toggle across requests
app.use(
  cookieSession({
    name: "session",
    keys: ["supersecretkey"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Custom middleware to apply Helmet + CSRF only if safeMode is enabled
app.use((req, res, next) => {
  const safeMode = req.session.safeMode ?? true;
  res.locals.safeMode = safeMode;

  if (safeMode) {
    helmet()(req, res, () => {
      csrf({ cookie: true })(req, res, next);
    });
  } else {
    next();
  }
});

// Setup logs
const logFilePath = path.join(__dirname, "logs", "payloads.log");

// Routes
app.get("/", (req, res) => {
  const csrfToken = res.locals.safeMode && req.csrfToken ? req.csrfToken() : "";
  res.render("index", { csrfToken });
});

app.post("/reflect", (req, res) => {
  const userInput = req.body.userInput || "";
  fs.appendFileSync(logFilePath, `${new Date().toISOString()} - ${userInput}\n`);
  const reflected = res.locals.safeMode ? xss(userInput) : userInput;
  res.render("reflect", { input: reflected });
});

app.get("/log", (req, res) => {
  const logs = fs.existsSync(logFilePath)
    ? fs.readFileSync(logFilePath, "utf8")
    : "No logs yet.";
  res.render("log", { logs });
});

app.get("/toggle-safe", (req, res) => {
  req.session.safeMode = !req.session.safeMode;
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
