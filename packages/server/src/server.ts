import express, { Application } from "express";
import session from "express-session";
import cors from "cors";

import sequelize from "./sequelize";
import routes from "./routes";
import socket from "./socket";

const FileStore = require("session-file-store")(session);

const app: Application = express();

const sessionMiddleware = session({
  secret: "kikionibs", // 쿠키를 임의로 변조하는 것을 방지하지 위한 값, 이 값을 통해서 세션을 암호화해서 저장
  saveUninitialized: true, // 세션이 저장되기전에 uninitialize화해서 저장
  cookie: { secure: false },
  resave: false, // 세션을 언제나 저장할지 설정하는 값, 값을 false로 권장
  store: new FileStore(),
});

app.use(sessionMiddleware); // session setting
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use("/", routes);

const server = app.listen(8000, () => {
  console.log("start");
});

socket(server, app, sessionMiddleware);
