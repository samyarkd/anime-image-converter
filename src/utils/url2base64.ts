import axios from "axios";

export async function getBase64(url) {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });

  const base64 = Buffer.from(response.data, "binary").toString("base64");

  return base64;
}
