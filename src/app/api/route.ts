import axios from "axios";
import { json } from "stream/consumers";
import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "./utills";

// 지역별로 default category tree id를 알 수 있다.
// 이걸 받아 getCategory를 호출
export const getDefaultCategoryTreeId = async () => {
  const accessToken = await getAccessToken();
  try {
    const data = await axios({
      method: "GET",
      url: `${process.env.EBAY_URL}/commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=EBAY_US`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Encoding": "gzip",
        "Accept-Charset": "utf-8",
        "Accept-Language": "en-us",
        // "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
      },
    });
    //data.data ->  data: { categoryTreeId: '0', categoryTreeVersion: '130' }
    const {
      data: { categoryTreeId },
    } = data;

    return categoryTreeId;
  } catch (err) {
    return null;
  }
};
export const getCategory = async () => {
  const accessToken = await getAccessToken();
  const categoryTreeId = await getDefaultCategoryTreeId();

  try {
    const data = await axios({
      method: "GET",
      url: `${process.env.EBAY_URL}/commerce/taxonomy/v1/category_tree/${categoryTreeId}/fetch_item_aspects`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // "Accept-Encoding": "gzip",
        "Accept-Charset": "utf-8",
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        "Accept-Language": "en-us",
      },
      responseType: "arraybuffer",
    }).then(response => {
      const buffer = Buffer.from(response.data, "binary");
      const jsonString = buffer.toString("utf-8");
      const jsonData = JSON.parse(jsonString);
      return jsonData;
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const GET = async () => {
  try {
    const data = await getCategory();
    return Response.json({ data });
  } catch (err) {
    console.log("err");
    throw err;
  }
};
