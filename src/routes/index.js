import { Router } from "express";
import testHello from './testHello.routes.js'
import payments from './payments.routes.js'

const router = Router();

// Use routes
router.use("/test-hello", testHello);
router.use("/payments", payments);

export default router;