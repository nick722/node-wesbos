exports.myMiddleware = (req, res, next) => {
  req.name = "Nick";
  if (req.name === "Nick") {
    throw Error("That is a stupid name");
  }
  res.cookie("name", "Nick is awesome", { maxAge: 9000000 });
  next();
};
exports.homePage = (req, res) => {
  console.log("req.name>>>", req.name);
  res.render("index");
};
