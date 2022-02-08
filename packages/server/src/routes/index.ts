import { Router } from "express";

import chat from "./chat";
import room from "./room";
import user from "./user";

const router = Router();

// 각 경로 하위에 있는 api를 사용
router.use("/chat", chat);
router.use("/user", user);
router.use("/room", room);

export default router;
