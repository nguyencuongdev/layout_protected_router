import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_LOCALE_NAME } from './constant';
import { defaultLocale, Locale, locales } from './utils';

// Các route yêu cầu xác thực (không cần thêm locale ở đây)
const protectedRoutes = ['/', '/employee-management', '/dog-management'];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const url = request.nextUrl;
  const pathname = url.pathname;
  const pathNames = pathname.split('/');
  const localeCookie = request.cookies.get(COOKIE_LOCALE_NAME)?.value ?? defaultLocale;
  const locale = locales.includes(pathNames[1] as Locale) ? pathNames[1] : localeCookie;

  // Kiểm tra người dùng đã đăng nhập chưa
  const token = request.cookies.get('token')?.value ?? true;
  response.cookies.set(COOKIE_LOCALE_NAME, locale);

  // Đối với các request đến trang login mà không có locale hoặc chưa có locale mà đã xác thực rồi thì điều hướng về trang chủ.
  if (token && (pathname === `/${locale}/login` || pathname === `/login`)) {
    return NextResponse.redirect(new URL(`/${locale}/`, request.url));
  }

  if (!token && pathname === `/login`) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  // Kiểm tra xem user access vào một route yêu cầu xác thực hay không ?
  const checkAccessRouterProteced = protectedRoutes.some(
    route => pathname.startsWith(`/${locale}${route}`) || pathname.startsWith(`${route}`),
  );

  // nếu chưa xác thực sẽ điều hướng về trang xác thực
  if (!token && checkAccessRouterProteced) {
    if (!token && pathname !== `/login` && pathname !== `/${locale}/login`) {
      return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
    }
  }

  // Cho phép tiếp tục với request nếu đã xác thực
  return !locales.includes(pathNames[1] as Locale)
    ? NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    : response;
}

export const config = {
  matcher: ['/', '/(vn|en)/:path*', '/employee-management/:path*', '/login', '/dog-management/:path*'],
};
