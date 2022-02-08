const SocketIO = require("socket.io");

import { Application, NextFunction, RequestHandler } from "express";
import { Server } from "net";
import { Socket } from "socket.io";

const socket = (server: Server, app: Application, session: RequestHandler) => {
  const io = SocketIO(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
    },
  });

  app.set("io", io);

  const chat = io.of("/chat"); // 채팅 관련해서 소켓통신 예정

  io.use((socket: Socket, next: NextFunction) => {
    const req = socket.request;
    //@ts-ignore
    const res = socket.request.res || {};
    //@ts-ignore
    session(req, res, next);
  });
  chat.on("connection", async (socket: Socket) => {
    socket.on("join", (roomId) => {
      socket.join(roomId);
    });
    socket.on("disconnect", (data) => {
      console.log("disconnected to Chat");
    });
  });
};

export default socket;
