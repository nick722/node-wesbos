const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.homePage = (req, res) => {
  console.log("req.name>>>", req.name);
  res.render("index");
};

exports.addStore = (req, res) => {
  res.render("editStore", {
    title: "Add Store"
  });
};

exports.createStore = (req, res) => {
  const store = new Store(req.body);
  store.save();
  then(store => {
    res.json(store);
  }).catch(err => {
    throw Error(err);
  });
};
