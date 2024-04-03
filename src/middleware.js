import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "ar"],
  localeDetection: true,

  localeDetection: "en",
 
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|ar)/:path*"],
};
