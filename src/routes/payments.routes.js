import { Router } from "express";
import createOrder from "../handlers/payments/createOrder.js";
import getSuccess from "../handlers/payments/getSuccess.js";
import getWebhook from "../handlers/payments/getWebhook.js";
const router = Router();

router.get('/create-order', createOrder)
router.get('/success', getSuccess)
router.get('/webhook', getWebhook)



export default router;