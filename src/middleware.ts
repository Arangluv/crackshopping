import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// match(languages, locales, defaultLocale);

// 지원하고자 하는 언어는 순서대로 영어, 독일어, 불어, 이탈리아어
let locales = ["en", "de", "fr", "it"];

const getLocale = (req: NextRequest) => {
  const language = new Negotiator({
    headers: {
      "accept-language": req.headers.get("accept-language"),
    },
  }).languages();
  let defaultLocale = "en";
  return match(language, locales, defaultLocale);
};
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  // 있으면 빠져나온다
  if (pathnameHasLocale) return;

  // 만약 없다면 사용자 locale 위치로 redirect 시킨다.
  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}/${pathname}`;
  return NextResponse.redirect(req.nextUrl);
}

// text
export const config = {
  // all internal paths 무시
  // matcher[1]는 이미지관련 오류로 정적자료에 middleware가 호출되는 것을 방지
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)",
    // "/((?!_next).*)",
  ],
};
