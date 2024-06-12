import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "../utills";
import axios from "axios";

// ref: https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#s0-1-22-6-7-7-6-SearchforItemsbyKeyword-0
export const GET = async (req: NextRequest) => {
  try {
    const accessToken = await getAccessToken();
    const response = await axios({
      url: `${process.env.EBAY_URL}/buy/browse/v1/item_summary/search?q=iphone&limit=10&offset=0`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Language": "en",
        "X-EBAY-C-ENDUSERCTX": `affiliateCampaignId=${process.env.EBAY_PARTNER_ID}`,
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
      },
    });
    console.log("호출하면 안됨");
    return NextResponse.json({ searchData: response.data });
  } catch (err) {
    throw err;
  }
};
