import AccountController from "../controller/accountController.js";
import AccountsService from "../services/accountservice.js";

export default function (app) {
  let mgr = new AccountsService();
  let controller = new AccountController(mgr);

  //Map controller callback functions for rest API routes
  app.get("/api/accounts", controller.get);
  app.get("/api/accounts/:accountnumber", controller.getByNumber);
  app.get("/api/accounts/byuserid/:id", controller.getByUserId);
  app.put("/api/accounts/:accountnumber", controller.update);
}