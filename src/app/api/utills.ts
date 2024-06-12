import axios from "axios";

// identity part
export const getAccessToken = async () => {
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
