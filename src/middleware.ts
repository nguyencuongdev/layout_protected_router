import { NextRequest, NextResponse } from 'next/server';

// Các route yêu cầu xác thực
const protectedRoutes = ['/', '/employee-management', '/dog-management'];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  // Kiểm tra người dùng đã đăng nhập chưa (ví dụ từ cookie hoặc session)
  const token = request.cookies.get('token')?.value ?? true;

  // Kiểm tra nếu URL là một route yêu cầu xác thực
  if (!token && protectedRoutes.some(route => url.startsWith(route))) {
    if (url !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (token && url === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Cho phép tiếp tục với request nếu đã xác thực
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/employee-management/:path*', '/login', '/dog-management/:path*'],
};
