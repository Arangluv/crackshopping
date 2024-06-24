import axios from "axios";
import { NextResponse } from "next/server";
import { getAccessToken } from "./utills";

// 지역별로 default category tree id를 알 수 있다.
// 이걸 받아 getCategory를 호출

export const getCategory = async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "http://localhost:3000/api/",
    });
    return data;
  } catch (err) {
    console.log("get category에서 오류?");
    return null;
  }
};

export const getDefaultCategoryTreeId = async () => {
  const accessToken = await getAccessToken();
  try {
    const data = await axios({
      method: "GET",
      url: `${process.env.EBAY_URL}/commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=EBAY_US`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Charset": "utf-8",
        "Accept-Language": "en-us",
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
      },
    });

    // data.data ->  data: { categoryTreeId: '0', categoryTreeVersion: '130' }
    const {
      data: { categoryTreeId },
    } = data;

    return categoryTreeId;
  } catch (err) {
    return null;
  }
};
export const getAllCategory = async () => {
  const accessToken = await getAccessToken();
  const categoryTreeId = await getDefaultCategoryTreeId();

  try {
    const data = await axios({
      method: "GET",
      url: `${process.env.EBAY_URL}/commerce/taxonomy/v1/category_tree/${categoryTreeId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Charset": "utf-8",
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        "Accept-Language": "en-us",
      },
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const GET = async () => {
  console.log("실행이 안되나?ddd");
  try {
    const response = await getAllCategory();
    console.log(response);
    return NextResponse.json({ searchData: response.data });
  } catch (err) {
    console.log("err");
    throw err;
  }
};
