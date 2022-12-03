import dotEnv from "dotenv";
dotEnv.config();

import TelegramBot from "node-telegram-bot-api";
import { convert2AnimeStyle } from "./funcs/convert2AnimeStyle";
import { getBase64 } from "./utils/url2base64";

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });
bot.on("photo", async (msg) => {
  const fid = msg.photo[2].file_id;
  const link = await bot.getFileLink(fid);

  const base64 = await getBase64(link);
  const images = await convert2AnimeStyle(base64);

  bot.sendPhoto(msg.chat.id, images[0]);
});
