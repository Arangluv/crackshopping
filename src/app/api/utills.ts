export const getAccessToken = async () => {
  try {
    const URL = `${process.env.EBAY_URL}/identity/v1/oauth2/token`;
    const token = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.EBAY_APP_ID}:${process.env.EBAY_SECRET_KEY}`,
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope: "https://api.ebay.com/oauth/api_scope",
      }),
      next: {
        revalidate: 7100,
      },
    }).then(res => {
      if (res.status >= 400 || !res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    });
    // token의 만료시간은 7200초
    return token.access_token;
  } catch (err) {
    throw new Error(err);
  }
};
