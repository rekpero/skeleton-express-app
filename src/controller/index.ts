import express from "express";

import { logger } from "../utils";
import dotenv from "dotenv";

dotenv.config();

class Controller {
  constructor() {
    logger.info("Testing");
  }

  parseFileUpload = async (body: any, res: express.Response) => {
    logger.info(body);
  };
}
export default new Controller();
