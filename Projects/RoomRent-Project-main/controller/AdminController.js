import IndexModel from "../models/IndexModel.js";
import AdminModel from "../models/AdminModel.js";

class AdminController {
  manageUsers(condition_obj) {
    return new Promise((resolve, reject) => {
      IndexModel.fetchUsers(condition_obj)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  manageUserStatus(urlobj) {
    return new Promise((resolve, reject) => {
      AdminModel.manageUserStatusModel(urlobj)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  addCategory(catname, caticonname) {
    return new Promise((resolve, reject) => {
      IndexModel.fetchUsers({})
        .then((result) => {
          var l = result.length;
          var _id = l == 0 ? 1 : result[l - 1]._id + 1;
          userDetails = {
            ...userDetails,
            _id: _id,
            status: 0,
            role: "user",
            info: Date(),
          };

          IndexModel.userRegisterModel(userDetails)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default new AdminController();
