import axios from "axios";
import { animeStyleImageResponse } from "../types";

/**
 * convert image into anime style picture
 * @param base64 string
 * @returns anime style images urls
 */
export async function convert2AnimeStyle(base64: string) {
  const res = await axios.post<animeStyleImageResponse>(
    "https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",
    {
      busiId: "ai_painting_anime_img_entry",
      images: [base64],
    }
  );

  const images: string[] = JSON.parse(res.data.extra).img_urls;
  return images;
}
