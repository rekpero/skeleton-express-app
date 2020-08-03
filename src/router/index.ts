import controller from "../controller";
import express from "express";

export default (app: express.Application) => {
  app.post(
    "/updateNotary/:id",
    (req: express.Request, res: express.Response) => {
      controller.parseFileUpload(req.body, res);
    }
  );

  app.get("/appConfigs", (req: express.Request, res: express.Response) => {
    console.log(req);
  });
};
