import { NextRequest, NextResponse } from 'next/server'

const singInURL = `http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(singInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${req.url}; Path=/; HttpOnly; max-age=10;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
