import { NextResponse } from 'next/server'

export function middleware(request) {
      if (request.method === "PUT") {
            if (!(request.headers.get("authorization") === `Bearer ${process.env.SECRET_TOKEN}`)) {
                  
                  return NextResponse.json({}, { status: 401 })
            }
      }
}

export const config = {
  matcher: ["/api/:path*"]
}