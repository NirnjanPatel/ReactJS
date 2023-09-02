import express from "express";
import AdminController from "../controller/AdminController.js";
import * as url from "url";
import * as path from "path";
const router = express.Router();

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// middleware to apply security for admin route
/*
router.use((req,res,next)=>{
 if(req.session.sunm==undefined || req.session.srole!="admin")
  res.redirect("/login");
 else
  next();   
});
*/

router.get("/", (req, res) => {
  res.render("Admin/adminhome", { sunm: req.session.sunm });
});

router.get("/manageusers", (req, res) => {
  AdminController.manageUsers({ role: "user" })
    .then((result) => {
      res.render("Admin/manageusers", {
        userDetails: result,
        sunm: req.session.sunm,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/manageuserstatus", (req, res) => {
  var urlobj = url.parse(req.url, true).query;
  AdminController.manageUserStatus(urlobj)
    .then((result) => {
      res.redirect("/admin/manageusers");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/addcategory", (req, res) => {
  res.render("Admin/addcategory", { sunm: req.session.sunm, output: "" });
});

router.post("/addcategory", (req, res) => {
  AdminController.addCategory(catname, caticonname)
    .then((result) => {})
    .catch((err) => {});

  var catname = req.body.catname;
  var fileobj = req.files.caticon;
  var caticonname = fileobj.name;
  var uploadpath = path.join(
    __dirname,
    "../public/uploads/categoryicons",
    caticonname
  );
  fileobj.mv(uploadpath);
  res.render("Admin/addcategory", {
    sunm: req.session.sunm,
    output: "form submitted",
  });
});

export default router;
