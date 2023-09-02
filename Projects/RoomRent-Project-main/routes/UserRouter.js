import express from "express";
const router = express.Router();

//middleware to apply security for user route
router.use((req, res, next) => {
  if (req.session.sunm == undefined || req.session.srole != "user")
    res.redirect("/login");
  else next();
});

router.get("/", (req, res) => {
  res.render("User/userhome", { sunm: req.session.sunm });
});

router.get("/cpuser", (req, res) => {
  res.send("<h1>/cpuser url invoked , user panel</h1>");
});

router.get("/epuser", (req, res) => {
  res.send("<h1>/epuser url invoked , user panel</h1>");
});

router.get("/logout", (req, res) => {
  res.send("<h1>/logout url invoked , admin panel</h1>");
});

export default router;
