import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getAccessToken } from "../utills";

export const getRecommandedKeyword = async ({
  keyword,
  locale,
}: {
  keyword: string;
  locale: string;
}) => {
  const response = await axios({
    method: "GET",
    url: `/api/recommanded-keyword/?keyword=${keyword}&locale=${locale}`,
  });
  return response.data.searchData;
};

// ref: https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#s0-1-22-6-7-7-6-SearchforItemsbyKeyword-0
export const GET = async (req: NextRequest) => {
  try {
    const keyword = req.nextUrl.searchParams.get("keyword");
    const locale = req.nextUrl.searchParams.get("locale");
    const accessToken = await getAccessToken();
    const response = await axios({
      url: `${process.env.EBAY_URL}/buy/browse/v1/item_summary/search?q=${keyword}&limit=10&offset=0`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Language": locale,
        "X-EBAY-C-ENDUSERCTX": `affiliateCampaignId=${process.env.EBAY_PARTNER_ID}`,
        "X-EBAY-C-MARKETPLACE-ID": `EBAY_${
          locale === "en" ? "US" : locale.toLocaleUpperCase()
        }`,
      },
    });
    return NextResponse.json({ searchData: response.data });
  } catch (err) {
    throw new Error(err);
  }
};
