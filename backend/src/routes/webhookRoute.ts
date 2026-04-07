import express from "express";
import {
 HandleShowWebHook,
} from "../controllers/webhook";

const webHookRoutes = express.Router();

webHookRoutes.post(
    "/show",
    HandleShowWebHook,
);

export { webHookRoutes }