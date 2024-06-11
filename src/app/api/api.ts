import axios from "axios";
import { json } from "stream/consumers";
const zlib = require("zlib");
const getAccessToken = async () => {
  try {
    const token = await axios({
      method: "POST",
      url: `${process.env.EBAY_URL}/identity/v1/oauth2/token`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.EBAY_APP_ID + ":" + process.env.EBAY_SECRET_KEY,
          ).toString("base64"),
      },
      data: {
        grant_type: "client_credentials",
        scope: "https://api.ebay.com/oauth/api_scope",
      },
    });
    return token.data.access_token;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// 지역별로 default category tree id를 알 수 있다.
// 이걸 받아 ge
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
    console.log("err?");
    console.log(err);
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
    });
    const buffer = Buffer.from(data.data, "binary");
    const jsonString = buffer.toString("utf-8");
    const jsonData = JSON.parse(jsonString);
    console.log(jsonData);
    //data.data ->  data: { categoryTreeId: '0', categoryTreeVersion: '130' }
  } catch (err) {
    console.log(err);
  }
};
