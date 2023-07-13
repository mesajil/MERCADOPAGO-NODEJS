import { Router } from "express";
import getTestHello from "../handlers/test/getTestHello.js";
const router = Router();

router.get('/',getTestHello)



export default router;
