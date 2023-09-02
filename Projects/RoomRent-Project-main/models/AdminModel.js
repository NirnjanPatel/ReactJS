import "./connection.js";
import RegisterSchemaModel from "../schema/RegisterSchema.js";

class AdminModel {
  userRegisterModel(userDetails) {
    return new Promise((resolve, reject) => {
      // a document instance
      var obj = new RegisterSchemaModel(userDetails);

      // save model to database
      obj.save((err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  fetchUsers(condition_obj) {
    return new Promise((resolve, reject) => {
      // to find record from collection
      RegisterSchemaModel.find(condition_obj, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  manageUserStatusModel(urlobj) {
    return new Promise((resolve, reject) => {
      if (urlobj.s == "block") {
        // to update status in collection
        RegisterSchemaModel.update(
          { _id: parseInt(urlobj.regid) },
          { status: 0 },
          (err, result) => {
            err ? reject(err) : resolve(result);
          }
        );
      } else if (urlobj.s == "verify") {
        // to update status in collection
        RegisterSchemaModel.update(
          { _id: parseInt(urlobj.regid) },
          { status: 1 },
          (err, result) => {
            err ? reject(err) : resolve(result);
          }
        );
      } else {
        // to remove user in collection
        RegisterSchemaModel.remove(
          { _id: parseInt(urlobj.regid) },
          (err, result) => {
            err ? reject(err) : resolve(result);
          }
        );
      }
    });
  }
}

export default new AdminModel();
