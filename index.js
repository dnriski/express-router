const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { redirect } = require("express/lib/response");

const port = 3001;
const secret = "Skjsdnfaskdnasdgnkn";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(secret));
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);

//define route
app.get("/signingcookie", (req, res) => {
  res.cookie("paket", "ransel", { signed: true }); //data teensckripsi
  res.send("signed cookie");
});
app.get("/verifycookie", (req, res) => {
  const cookies = req.signedCookies;
  res.send(cookies);
});

app.get("/count", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`count: ${req.session.count}`);
});

app.get("/register", (req, res) => {
  const { username = "Anonim" } = req.query;
  req.session.username = username;
  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  res.send(`Welcome Back ${req.session.username}`);
});

app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

app.listen(port, () => {
  console.log(`Example app linstening at http://localhost:${port}`);
});
