import express from "express";
import IndexController from "../controller/IndexController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/service", (req, res) => {
  res.render("service");
});

router.get("/register", (req, res) => {
  res.render("register", { output: "" });
});

router.post("/register", (req, res) => {
  // console.log(req.body);
  IndexController.userRegister(req.body)
    .then((result) => {
      res.render("register", { output: "User registered succesfully,,," });
    })
    .catch((err) => {
      res.render("register", { output: err });
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

export default router;
